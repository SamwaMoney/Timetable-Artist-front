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
        return err.response.data;
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
        return res;
    } catch (err) {
        console.log(err);
        return err.response.data;
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
        return res;
    } catch (err) {
        console.log(err, '로그인 에러');
        return err.response.data;
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
        localStorage.removeItem('memberId');
        return res;
    } catch (err) {
        console.log(err, '로그아웃 에러');
    }
};

export const isLogin = () => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        return true;
    }
    return false;
};
