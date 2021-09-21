
const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = (env, options) => {
	const mode = options.mode || 'development';
	const DEV = mode === 'development';

	switch (mode) {
		case 'development':
			require('dotenv').config({path: "./env/dev.env"});
			break;
		case 'production':
			require('dotenv').config({path: "./env/.env"});
			break;
	};

	const copyMap = {
		'axios': DEV ? './node_modules/axios/dist/axios.js' : './node_modules/axios/dist/axios.min.js'
	};

	const plugins = [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
			'process.env.API_URL': JSON.stringify(process.env.API_URL),
		}),

		new HtmlWebPackPlugin({
			template: './public/index.html',
			templateParameters: {
				env: DEV ? '(개발)' : '',
			},
			minify: DEV ? false : {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true
			},

			showErrors: true
		}),

		new WebpackManifestPlugin({
			filename: 'manifest.json',
			basePath: "./build"
		}),

		new CopyPlugin({
			patterns: [
				{
					from: copyMap['axios'],
					to: "js/axios.min.js"
				}
			]
		}),
	];


	switch (mode) {
		case "development":
			plugins.push(
				new ForkTsCheckerWebpackPlugin(),
				new ErrorOverlayPlugin(),
			);
			break;
		case "production":
			plugins.push(
				new CleanWebpackPlugin(),
				new MiniCssExtractPlugin({
					filename: 'css/[name].[contenthash].css'
				}),
			);
			break;
	}

	return {
		mode: mode,

		devtool: DEV ? "inline-source-map" : "source-map",

		resolve: {
			modules: [
				path.join(__dirname, "src"),
				"node_modules"
			],
			extensions: [".ts", ".tsx", ".js", ".jsx", "scss"],
		},

		devServer: {
			contentBase: "./build",
			historyApiFallback: true,
			port: 4000,
		},

		entry: {
			main: ['babel-polyfill', "./src/index.js"],
		},

		output: {
			filename: DEV ? "js/[name].[fullhash].bundle.js" : 'js/[name].[chunkhash].bundle.js',

			chunkFilename: 'js/[name].chunk.js', //dynamic import

			path: path.resolve(__dirname, './build'),

			publicPath: "/",
		},

		module: {
			rules: [
				{
					test: /\.js$|jsx$|ts$|tsx$/,
					use: [
						'babel-loader',
						{
							loader: 'ts-loader',
							options: {
								transpileOnly: false
							},
						},
					],
					exclude: /node_modules/,

				},
				{
					test: /\.scss$/,
					use: [
						DEV ? "style-loader" : MiniCssExtractPlugin.loader,
						"css-loader",
						"sass-loader",
					],
					exclude: /node_modules/
				},

				{
					test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: 'images/[name].[ext]',
								esModule:false
							}
						}
					]
				},
				{
					// write files under 10k to inline or copy files over 10k
					test: /\.(woff|woff2|eot|ttf|otf)$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 10000,
								fallback: 'file-loader',
								name: 'fonts/[name].[ext]'
							}
						}
					]
				},
			],
		},
		plugins,
		optimization: {
			splitChunks: {
				name: "vendors",
				chunks: 'all',
			}, // vendors
			runtimeChunk: {
				name: "runtime"
			}, // runtime

			minimizer: [
				// new OptimizeCSSAssetsPlugin({}),

				new TerserPlugin(),
				// new UglifyJsPlugin({
				// 	cache: true,
				// 	parallel: true,
				// 	sourceMap: true
				// }),
			]
		},

		performance: !DEV && {
			hints: false,
			maxEntrypointSize: 512000,
			maxAssetSize: 512000
		},

		externals: {
			axios: "axios"
		},
	}

}