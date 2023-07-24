import { S } from './SignUp.style';

import { useState, useEffect } from 'react';

const MSignUp = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pwCheck, setPwCheck] = useState('');
    const [isFilled, setIsFilled] = useState(false);
    const [isPwMatch, setIsPwMatch] = useState(true);
    useEffect(() => {
        if (id !== '' && pw !== '' && pwCheck !== '') setIsFilled(true);
    }, [id, pw, pwCheck]);

    const handleSubmit = e => {
        e.preventDefault();
        if (isFilled) {
            // 회원가입 api 불러오기
        }
    };
    const handlePwChange = e => {
        setPw(e.target.value);
        setIsPwMatch(pwCheck === e.target.value);
    };
    const handlePwCheckChange = e => {
        setPwCheck(e.target.value);
        setIsPwMatch(pw === e.target.value);
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
                                placeholder='아이디(4자~8자)'
                                maxLength='8'
                                minLength='4'
                                onChange={e => setId(e.target.value)}
                            />
                        </div>
                        <p className='text text-top mobile-text'>
                            *영문, 숫자, 특수문자 입력 가능
                        </p>
                        <p className='text text-bottom mobile-text'>
                            아이디가 닉네임으로 활용됩니다.
                        </p>
                    </S.InputWrapper>
                    <S.InputWrapper>
                        <div className='mobile-div'>
                            <S.Text className='mobile-Text'>PW</S.Text>
                            <S.InputBox
                                className='mobile-inputbox'
                                placeholder='비밀번호'
                                type='password'
                                onChange={e => handlePwChange(e)}
                            />
                        </div>
                        <p className='text mobile-text'>
                            *영문, 숫자, 특수문자 입력 가능
                        </p>
                    </S.InputWrapper>
                    <S.InputWrapper>
                        <div className='mobile-div'>
                            <S.Text className='mobile-Text'></S.Text>
                            <S.InputBox
                                className='mobile-inputbox'
                                placeholder='비밀번호 확인'
                                type='password'
                                onChange={e => handlePwCheckChange(e)}
                            />
                        </div>
                        <p
                            className={`alert-text text mobile-text ${
                                isPwMatch ? 'hidden' : ''
                            }`}
                        >
                            비밀번호가 일치하지 않습니다.
                        </p>
                    </S.InputWrapper>
                </div>
                <S.SubmitBtn
                    className='mobile-btn'
                    type='submit'
                    disabled={!isFilled || !isPwMatch}
                >
                    회원가입
                </S.SubmitBtn>
            </form>
        </S.Wrapper>
    );
};

export default MSignUp;
