import { S } from './SignIn.style';
import { Login } from '../../../api/members';
import { GetTableId } from '../../../api/timetables';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MSignIn = () => {
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
                                existedId && 'hidden'
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
