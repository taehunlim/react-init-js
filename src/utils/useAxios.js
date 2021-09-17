import axios from 'axios';
import { useState, useEffect } from 'react';

const api = axios.create({
    baseURL: process.env.API_URL,
});

export const useAxios = () => {
    const [loading, setLoading] = useState(true);
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();

    useEffect(() => {
        const interceptor = api.interceptors.request.use((config) => {
            return {
                ...config,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + accessToken,
                    ...config.headers,
                },
            };
        });
        return () => {
            api.interceptors.request.eject(interceptor);
        };
    }, [accessToken]);

    useEffect(() => {
        const interceptor = api.interceptors.response.use(
            null,
            async (err) => {
                if (err.response?.status === 401) {
                    await axios
                        .post('/auth/refresh', {refreshToken})
                        .then(res => {
                            setAccessToken(res.data.access_token);
                            setLoading(false);
                            err.config.headers[
                                'Authorization'
                                ] = `Bearer ${res.data.access_token}`;
                            return axios(err.config);
                        })
                        .catch(error => {
                            // log out
                            return Promise.reject(error);
                        });
                    return Promise.reject(err);
                }
            }
        );
        return () => {
            api.interceptors.response.eject(interceptor);
        };
    }, [refreshToken, setAccessToken]);

    return {loading, api};
};