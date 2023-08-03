import { http } from './http';
import moment from 'moment';

// 회원가입
export const CreateMember = async (id, pw) => {
    try {
        const res = await http.post('/members/signup', {
            username: id,
            password: pw,
        });
        console.log(res, '회원가입 성공');
        alert('회원가입되었습니다.\n로그인해주세요.');
        window.location.reload();
    } catch (err) {
        console.log(err, '회원가입 에러');
        if (
            err.response?.data.message ===
            `username ${id}은 이미 존재하는 회원명입니다!`
        ) {
            alert('이미 존재하는 아이디입니다.');
        } else {
            alert('회원가입 오류');
        }
    }
};

// 회원탈퇴
export const DeleteMember = async () => {
    try {
        const memberId = localStorage.getItem('memberId');
        const res = await http.delete(`/members/${memberId}`);
        console.log(res, '탈퇴 성공');
        localStorage.clear();
        return 'Account deletion successful';
    } catch (err) {
        console.log(err);
        alert('탈퇴 오류');
    }
};

// 로그인
export const Login = async (id, pw) => {
    try {
        const res = await http.post('/members/login', {
            username: id,
            password: pw,
        });
        console.log(res, '로그인 성공');
        const accessToken = res.data.accessToken;
        const refreshToken = res.data.refreshToken;
        const memberId = res.data.memberId;
        const username = res.data.username;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('memberId', memberId);
        localStorage.setItem('username', username);
        localStorage.setItem(
            'expireAt',
            moment().add(1, 'hour').format('yyyy-MM-DD HH:mm:ss'),
        );
        return 'Login Success';
    } catch (err) {
        console.log(err, '로그인 에러');
        if (
            err.response?.data.message ===
            `username ${id}은 존재하지 않는 회원명입니다!`
        ) {
            return 'notExisedId';
        } else if (err.response?.data.message === '잘못된 비밀번호입니다!') {
            return 'notCorrectPw';
        } else {
            alert('로그인 오류');
        }
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
        console.log(res, '로그아웃 성공');
        localStorage.clear();
        window.location.replace('/ranking');
        return res;
    } catch (err) {
        console.log(err, '로그아웃 에러');
        alert('로그아웃 오류');
    }
};

// 로그인 여부 확인
export const isLogin = () => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        return true;
    }
    return false;
};
