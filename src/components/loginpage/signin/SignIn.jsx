import { S } from './SignIn.style';
import { Login } from '../../../api/members';
import { GetTableId } from '../../../api/timetables';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

const SignIn = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [isFilled, setIsFilled] = useState(false);
    const [existedId, setExistedId] = useState(true);
    const [correctPw, setCorrectPw] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        if (id !== '' && pw !== '') setIsFilled(true);
    }, [id, pw]);

    const handleSubmit = async e => {
        e.preventDefault();
        setCorrectPw(true);
        setExistedId(true);
        if (isFilled) {
            const res = await Login(id, pw);
            if (res === 'Login Success') {
                GetTableId();
                navigate('/ranking');
            } else if (res === 'notExisedId') {
                setExistedId(false);
            } else if (res === 'notCorrectPw') {
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
                        <p className={`alert-text ${existedId && 'hidden'}`}>
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
