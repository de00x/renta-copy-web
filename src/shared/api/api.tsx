import axios, {AxiosError} from 'axios';
import {ACCESS_LOCALSTORAGE_KEY, REFRESH_LOCALSTORAGE_KEY} from 'shared/constants/localstorage';

const web = 'https://flat-renta.test.madela.dev/users/api/v1'

export const $api = axios.create({
    baseURL: web,
    withCredentials: true,
});

// $api.interceptors.request.use((config) => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem(ACCESS_LOCALSTORAGE_KEY)}`;
//     return config;
// });

$api.interceptors.response.use(
    (config) => config,
    async (error) => {
        const originalRequest = error.config._isRetry;
        if (error.response.status === 403 && error.config && !error.config._isRetry) {
            originalRequest._isRetry = true;

            try {
                await refreshAccessToken();

                return $api.request(originalRequest);
            } catch (e) {
                console.error('Ошибка обновления токена', e);
                handleTokenRefreshError(e);
            }
        }
        throw error;
    }
);

async function refreshAccessToken() {
    const refreshToken = localStorage.getItem(REFRESH_LOCALSTORAGE_KEY);
    const response = await $api.post('/auth/refresh-token', {refreshToken});
    localStorage.setItem(ACCESS_LOCALSTORAGE_KEY, response.data.accessToken);
    localStorage.setItem(REFRESH_LOCALSTORAGE_KEY, response.data.refreshToken);
}

function handleTokenRefreshError(error: AxiosError) {
    console.error('Ошибка обновления токена', error);
}

