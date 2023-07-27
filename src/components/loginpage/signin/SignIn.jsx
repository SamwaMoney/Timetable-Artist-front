import { S } from './SignIn.style';
import { Login } from '../../../api/members';

import { useState, useEffect } from 'react';

const SignIn = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [isFilled, setIsFilled] = useState(false);
    const [correctPw, setCorrectPw] = useState(true);

    useEffect(() => {
        if (id !== '' && pw !== '') setIsFilled(true);
    }, [id, pw]);

    const handleSubmit = e => {
        e.preventDefault();

        if (isFilled) {
            const status = Login(id, pw);
            /*
            if (status === 200) {
                navigate('/ranking');
            } else {
                setCorrectPw(false);
            }
            */
        }
    };
    return (
        <S.Wrapper>
            <form onSubmit={e => handleSubmit(e)}>
                <div className='input'>
                    <S.InputWrapper>
                        <div className='id-input'>
                            <S.Text>ID</S.Text>
                            <S.InputBox
                                placeholder='아이디'
                                onChange={e => setId(e.target.value)}
                            />
                        </div>
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
