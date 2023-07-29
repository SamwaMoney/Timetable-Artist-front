import axios from 'axios';
import { Logout } from './members';

export const http = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    contentType: 'application/json; charset=utf-8;',
});

http.defaults.withCredentials = true;

const token = localStorage.getItem('accessToken') ?? false;
const refreshToken = localStorage.getItem('refreshToken') ?? false;

http.defaults.headers.common['Authorization'] = token
    ? `Bearer ${token}`
    : null;

// 헤더 없는 refresh용 axios 인스턴스 생성
const refreshHTTP = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    contentType: 'application/json; charset=utf-8;',
});

refreshHTTP.defaults.withCredentials = true;

// axios response에 대한 interceptors 토큰 만료 확인
http.interceptors.response.use(
    async config => {
        return config;
    },
    async error => {
        // 기존에 수행하려던 작업
        const originalConfig = error.config;
        // error response로 보낸 message
        const msg = error.response.data.message;
        // 에러 코드
        const status = error.response.status;

        console.log(error, '리프레시 에러 체크');
        console.log(msg, '메시지');

        if (status === 500) {
            // 500
            if (msg === 'access token expired') {
                // 실제 반환 msg 확인해서 수정 필요
                try {
                    // 헤더 안 보냄
                    const res = await refreshHTTP.post(
                        '/members/refreshtoken',
                        {
                            refreshToken: refreshToken,
                        },
                    );
                    const newToken = res.data.accessToken;

                    // 새 accessToken 저장
                    localStorage.setItem('accessToken', newToken);
                    originalConfig.headers[
                        'Authentication'
                    ] = `Bearer ${newToken}`;

                    // 이것도 해야하는지 체크 필요 (아마 필요 없을듯)
                    /*
                    http.defaults.headers.common[
                        'Authentication'
                    ] = `Bearer ${newToken}`;*/

                    window.location.reload();
                } catch (err) {
                    console.log(err, '에러에러');
                    // 상태 500 에러 뜨면 로그아웃시킴 (refreshToken이 expired된 상황)
                    /*
                    if (status === 500) {
                        Logout();
                    }
                    */
                }
            }
            /* 리프레시가 만료될 일은 없다
            else if (msg === 'refresh token expired') {
                Logout();
                window.location.reload();
            }*/
        }
        /* 필요한지 체크
        else if (status === 401 || status === 404 || status === 409) {
            console.log(msg);
        }
        */
        return Promise.reject(error);
    },
);
