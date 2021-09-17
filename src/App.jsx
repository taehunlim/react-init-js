import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { SWRConfig } from 'swr';
/** @jsx jsx */
import { ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';

import { useAxios } from './utils/useAxios';
import { Store } from './store';
import GlobalStyles from './assets/styles/GlobalStyles';
import theme from './assets/styles/theme';

import { Home } from './pages';

const App = () => {
    const { api, loading } = useAxios();
    const swrConfig = {
        // useSWR에 url만 적어도 axios의 response.data 값이 return
        fetcher: (url, params) => {
            api
                .get(url, {params})
                .then(response => response.data)
        }
    };

    return (
        <RecoilRoot>
            <Store>
                <SWRConfig value={swrConfig}>
                    <BrowserRouter>
                        <ThemeProvider theme={theme}>
                            <GlobalStyles/>
                            <Switch>
                                <Route path="/" exact render={props => <Home {...props} />}/>
                                <Redirect to="/"/>
                            </Switch>
                        </ThemeProvider>
                    </BrowserRouter>
                </SWRConfig>
            </Store>
        </RecoilRoot>
    );
};

export default App;