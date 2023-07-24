import { S } from './SignIn.style';
import { useState, useEffect } from 'react';

const MSignIn = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [isFilled, setIsFilled] = useState(false);
    useEffect(() => {
        if (id !== '' && pw !== '') setIsFilled(true);
    }, [id, pw]);

    const handleSubmit = e => {
        e.preventDefault();
        if (isFilled) {
            // 로그인 api 불러오기
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
                        <p className='alert-text hidden mobile-text'>
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
                        <p className='alert-text hidden mobile-text'>
                            비밀번호가 일치하지 않습니다.
                        </p>
                    </S.InputWrapper>
                </div>
                <S.SubmitBtn
                    className='mobile-btn'
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
