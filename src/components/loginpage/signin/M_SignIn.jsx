import { S } from './SignIn.style';
import { Login } from '../../../api/members';

import { useState, useEffect } from 'react';

const MSignIn = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [isFilled, setIsFilled] = useState(false);
    const [notExistedId, setNotExistedId] = useState(true);
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
                //setNotExistedId(true);
            } /* if (status === 401)* else {
                setCorrectPw(false);
            }
            */
        }
    };
    return (
        <S.Wrapper>
            <form onSubmit={e => handleSubmit(e)}>
                <div className='input mobile-input'>
                    <S.InputWrapper>
                        <div className='mobile-div'>
                            <S.Text className='mobile-Text'>ID</S.Text>
                            <S.InputBox
                                className='mobile-inputbox'
                                placeholder='아이디'
                                onChange={e => setId(e.target.value)}
                            />
                        </div>
                        <p
                            className={`alert-text mobile-text ${
                                notExistedId && 'hidden'
                            }`}
                        >
                            존재하지 않는 아이디입니다.
                        </p>
                    </S.InputWrapper>
                    <S.InputWrapper>
                        <div className='mobile-div'>
                            <S.Text className='mobile-Text'>PW</S.Text>
                            <S.InputBox
                                className='mobile-inputbox'
                                placeholder='비밀번호'
                                type='password'
                                onChange={e => setPw(e.target.value)}
                            />
                        </div>
                        <p
                            className={`alert-text mobile-text ${
                                correctPw && 'hidden'
                            }`}
                        >
                            비밀번호가 일치하지 않습니다.
                        </p>
                    </S.InputWrapper>
                </div>
                <S.SubmitBtn
                    className={`mobile-btn ${!isFilled && 'disabled'}`}
                    type='submit'
                    disabled={!isFilled}
                >
                    로그인
                </S.SubmitBtn>
            </form>
        </S.Wrapper>
    );
};

export default MSignIn;
