import { S } from './SignUp.style';
import { CreateMember } from '../../../api/members';

import { useState, useEffect } from 'react';

const SignUp = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pwCheck, setPwCheck] = useState('');
    const [isFilled, setIsFilled] = useState(false);
    const [isPwMatch, setIsPwMatch] = useState(true);
    const [idLengthCheck, setIdLengthCheck] = useState(false);
    const [pwLengthCheck, setPwLengthCheck] = useState(false);
    useEffect(() => {
        if (id !== '' && pw !== '' && pwCheck !== '') setIsFilled(true);
    }, [id, pw, pwCheck]);

    // 회원가입 버튼 클릭 이벤트 핸들러
    const handleSubmit = async e => {
        e.preventDefault();
        if (isFilled) {
            const res = await CreateMember(id, pw);
            if (res.status === 200) {
                alert('회원가입되었습니다. 로그인해주세요.');
                window.location.reload();
            } else if (res.status === 500) {
                // 아이디 중복 시 상태 500 중복 alert 처리
                alert('이미 존재하는 아이디입니다.');
            }
        }
    };

    // 아이디 입력 이벤트 핸들러
    const handleIdChange = e => {
        setId(e.target.value);
        if (e.target.value.length < 4) setIdLengthCheck(true);
        else setIdLengthCheck(false);
    };

    // 비밀번호 입력 이벤트 핸들러
    const handlePwChange = e => {
        setPw(e.target.value);
        if (e.target.value.length < 6) setPwLengthCheck(true);
        else setPwLengthCheck(false);
        setIsPwMatch(pwCheck === e.target.value);
    };

    // 비밀번호 확인 입력 이벤트 핸들러
    const handlePwCheckChange = e => {
        setPwCheck(e.target.value);
        setIsPwMatch(pw === e.target.value);
    };

    return (
        <S.Wrapper>
            <form onSubmit={e => handleSubmit(e)}>
                <div className='input'>
                    <S.InputWrapper>
                        <div>
                            <S.Text>ID</S.Text>
                            <S.InputBox
                                placeholder='아이디(4자~8자)'
                                maxLength='8'
                                minLength='4'
                                onChange={handleIdChange}
                                className={`${idLengthCheck && 'red-inputbox'}`}
                            />
                        </div>
                        <p className='text text-top'>
                            *영문, 숫자, 특수문자 입력 가능
                        </p>
                        <p className='text text-bottom'>
                            아이디가 닉네임으로 활용됩니다.
                        </p>
                    </S.InputWrapper>
                    <S.InputWrapper>
                        <div>
                            <S.Text>PW</S.Text>
                            <S.InputBox
                                placeholder='비밀번호(6자 이상)'
                                type='password'
                                onChange={handlePwChange}
                                className={`${pwLengthCheck && 'red-inputbox'}`}
                            />
                        </div>
                        <p className='text'>*영문, 숫자, 특수문자 입력 가능</p>
                    </S.InputWrapper>
                    <S.InputWrapper>
                        <div>
                            <S.Text></S.Text>
                            <S.InputBox
                                placeholder='비밀번호 확인'
                                type='password'
                                onChange={handlePwCheckChange}
                            />
                        </div>
                        <p
                            className={`alert-text text ${
                                (isPwMatch || !pwCheck) && 'hidden'
                            }`}
                        >
                            비밀번호가 일치하지 않습니다.
                        </p>
                    </S.InputWrapper>
                </div>
                <S.SubmitBtn
                    type='submit'
                    disabled={!isFilled || !isPwMatch}
                    className={`${
                        (!isFilled ||
                            !isPwMatch ||
                            idLengthCheck ||
                            pwLengthCheck) &&
                        'disabled'
                    }`}
                >
                    회원가입
                </S.SubmitBtn>
            </form>
        </S.Wrapper>
    );
};

export default SignUp;
