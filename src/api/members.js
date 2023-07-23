import { http } from '../http';

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
        console.log(err);
    }
};

// 회원탈퇴
// 로그인
// 로그아웃
