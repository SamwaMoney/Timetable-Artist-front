import { S } from './SignIn.style';
import { Login } from '../../../api/members';

import { useState, useEffect } from 'react';

const SignIn = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [isFilled, setIsFilled] = useState(false);
    const [correctPw, setCorrectPw] = useState(true);
    const [notExistedId, setNotExistedId] = useState(true);

    useEffect(() => {
        if (id !== '' && pw !== '') setIsFilled(true);
    }, [id, pw]);

    const handleSubmit = async e => {
        e.preventDefault();
        if (isFilled) {
            const res = await Login(id, pw);

            if (res.status === 200) {
                window.location.replace('/ranking');
            } else if (
                res.message === `username ${id}은 이미 존재하는 회원명입니다!`
            ) {
                setNotExistedId(true);
            } else if (res.message === '잘못된 비밀번호입니다!') {
                setCorrectPw(false);
            }
        }
    };
    return (
        <S.Wrapper>
            <form onSubmit={e => handleSubmit(e)}>
                <div className='input'>
                    <S.InputWrapper>
                        <div>
                            <S.Text>ID</S.Text>
                            <S.InputBox
                                placeholder='아이디'
                                onChange={e => setId(e.target.value)}
                            />
                        </div>
                        <p className={`alert-text ${notExistedId && 'hidden'}`}>
                            존재하지 않는 아이디입니다.
                        </p>
                    </S.InputWrapper>
                    <S.InputWrapper>
                        <div>
                            <S.Text>PW</S.Text>
                            <S.InputBox
                                placeholder='비밀번호'
                                type='password'
                                onChange={e => setPw(e.target.value)}
                            />
                        </div>
                        <p className={`alert-text ${correctPw && 'hidden'}`}>
                            비밀번호가 일치하지 않습니다.
                        </p>
                    </S.InputWrapper>
                </div>
                <S.SubmitBtn
                    type='submit'
                    disabled={!isFilled}
                    className={`${!isFilled && 'disabled'}`}
                >
                    로그인
                </S.SubmitBtn>
            </form>
        </S.Wrapper>
    );
};

export default SignIn;
