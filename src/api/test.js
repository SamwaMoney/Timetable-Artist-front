import axios from 'axios';
import moment from 'moment';

export const test = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    contentType: 'multipart/form-data',
});

test.defaults.withCredentials = true;

const token = localStorage.getItem('accessToken') ?? false;

test.defaults.headers.common['Authorization'] = token
    ? `Bearer ${token}`
    : null;

// 헤더 없는 refresh용 axios 인스턴스 생성
const refreshtest = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    contentType: 'application/json; charset=utf-8;',
});

refreshtest.defaults.withCredentials = true;

// axios request 대한 interceptors 토큰 만료 확인
test.interceptors.request.use(
    async config => {
        const refreshToken = localStorage.getItem('refreshToken');
        const expireAt = localStorage.getItem('expireAt');
        let accessToken = localStorage.getItem('accessToken');

        // localStorage에 저장된 시간과 현재 시간 차이가 0보다 작으면 토큰 리프레시
        if (moment(expireAt).diff(moment()) < 0 && refreshToken) {
            const res = await refreshtest.post('/members/refreshtoken', {
                refreshToken: refreshToken,
            });
            accessToken = res.data.accessToken;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem(
                'expireAt',
                moment().add(1, 'hour').format('yyyy-MM-DD HH:mm:ss'),
            );

            // config 헤더에 accessToken 적용
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    async error => {
        // ex) refreshToken이 만료된 경우
        console.log('리프레시 에러', error);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('memberId');
        localStorage.removeItem('expireAt');
        window.location.reload();
        return Promise.reject(error);
    },
);
