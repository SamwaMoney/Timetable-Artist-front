import { S } from "./SignIn.style";
import { useState, useEffect } from "react";

const SignIn = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [isFilled, setIsFilled] = useState(false);
    useEffect(() => {
        if (id !== '' && pw !== '') setIsFilled(true);
    }, [id, pw]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFilled) {
            // 로그인 api 불러오기
        }
    }
    return (
        <S.Wrapper>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="input">
                    <S.InputWrapper>
                        <div className="id-input">
                            <S.Text>ID</S.Text>
                            <S.InputBox
                                placeholder="아이디"
                                onChange={e => setId(e.target.value)}
                            />
                        </div>
                        <p className="alert-text hidden">비밀번호가 일치하지 않습니다.</p>
                    </S.InputWrapper>
                    <S.InputWrapper>
                        <div className="pw-input">
                            <S.Text>PW</S.Text>
                            <S.InputBox
                                placeholder="비밀번호"
                                type="password"
                                onChange={e => setPw(e.target.value)}
                            />
                        </div>
                        <p className="alert-text hidden">비밀번호가 일치하지 않습니다.</p>
                    </S.InputWrapper>
                </div>
                <S.SubmitBtn type="submit" disabled={!isFilled}>로그인</S.SubmitBtn>
            </form>
        </S.Wrapper>
    );
}

export default SignIn;