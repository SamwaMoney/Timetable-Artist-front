import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import WithdrawalModal from './WithdrawalModal';
import EditModal from './EditModal';
import S from './M_Hamburger.style';
import BackBtn from './BackBtn';

const MHamburger = () => {
    const [isWithdrawalModalOpen, setIsWithdrawalModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true); // 초기상태 false

    //로그인 인증 api 불러오기
    //setIsLogin(true);

    const navigate = useNavigate();

    const handleScoreClick = e => {
        e.preventDefault();
        if (isLogin) {
            navigate('/score');
        }
    };
    const handleEditClick = e => {
        e.preventDefault();
        if (isLogin) {
            setIsEditModalOpen(true);
        }
    };
    const handleWithdrawalClick = () => {
        setIsWithdrawalModalOpen(true);
    };
    const activeStyle = {
        background: 'var(--background)',
    };

    const handleMoveBack = () => {
        navigate(-1);
    };

    return (
        <S.FlexContainer>
            <div style={{ marginTop: '25%', borderBottom: '1px solid black' }}>
                <BackBtn />
            </div>
            <S.MenuBtn>
                <NavLink
                    to='/aboutus'
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    <p>ABOUT US</p>
                </NavLink>
            </S.MenuBtn>
            <S.MenuBtn>
                <NavLink
                    to='/ranking'
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    <p>랭킹보드</p>
                </NavLink>
            </S.MenuBtn>
            <S.MenuBtn>
                <NavLink
                    to='/score'
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    onClick={e => handleScoreClick(e)}
                >
                    <p>내 시간표 점수</p>
                </NavLink>
            </S.MenuBtn>
            <S.MenuBtn>
                <NavLink
                    to='/create'
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    onClick={e => handleEditClick(e)}
                >
                    <p>내 시간표 수정</p>
                </NavLink>
            </S.MenuBtn>
            {isLogin ? (
                <S.WithdrawalBtn onClick={handleWithdrawalClick}>
                    <p>회원탈퇴</p>
                </S.WithdrawalBtn>
            ) : (
                <S.MenuBtn className='login'>
                    <NavLink
                        to='/login'
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        <p>로그인</p>
                    </NavLink>
                </S.MenuBtn>
            )}
            {isWithdrawalModalOpen && (
                <WithdrawalModal
                    setIsWithdrawalModalOpen={setIsWithdrawalModalOpen}
                />
            )}
            {isEditModalOpen && (
                <EditModal setIsEditModalOpen={setIsEditModalOpen} />
            )}
        </S.FlexContainer>
    );
};
export default MHamburger;
