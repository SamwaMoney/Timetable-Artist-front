import { useNavigate } from 'react-router-dom';
import { http } from './http';

// 회원가입
export const CreateMember = async (id, pw) => {
    try {
        const res = await http.post('/members/signup', {
            username: id,
            password: pw,
        });
        console.log(res);
        return res;
    } catch (err) {
        console.log(err, '회원가입 에러');
        // 아이디 중복 시 상태 500 중복 alert 처리
        if (err.response.status === 500) {
            alert('이미 존재하는 아이디입니다.');
        }
    }
};

// 회원탈퇴
export const DeleteMember = async () => {
    try {
        const memberId = localStorage.getItem('memberId');
        const res = await http.delete(`/members/${memberId}`);
        console.log(res);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('memberId');
    } catch (err) {
        console.log(err);
        return err.response.status;
    }
};

// 로그인
export const Login = async (id, pw) => {
    try {
        const res = await http.post('/members/login', {
            username: id,
            password: pw,
        });
        console.log(res);
        const accessToken = res.data.accessToken;
        const refreshToken = res.data.refreshToken;
        const memberId = res.data.memberId;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('memberId', memberId);
        window.location.replace('/ranking');
    } catch (err) {
        console.log(err, '로그인 에러');
        const status = err.response.status;
        return status;
    }
};

// 로그아웃
export const Logout = async () => {
    try {
        const refreshToken = localStorage.getItem('refreshToken');
        const res = await http.delete('/members/logout', {
            data: {
                refreshToken: refreshToken,
            },
        });
        console.log(res);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('username');
        window.location.replace('/ranking');
    } catch (err) {
        console.log(err);
    }
};

export const isLogin = () => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        return true;
    }
    return false;
};
