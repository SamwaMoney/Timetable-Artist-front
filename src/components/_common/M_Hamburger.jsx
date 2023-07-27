import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import WithdrawalModal from './WithdrawalModal';
import EditModal from './EditModal';
import S from './M_Hamburger.style';
import BackBtn from './BackBtn';
import { Logout, isLogin } from '../../api/members';

const MHamburger = () => {
    const [isWithdrawalModalOpen, setIsWithdrawalModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    //const [isLogin(), setIsLogin] = useState(true); // 초기상태 false
    //setIsLogin(true);

    const navigate = useNavigate();

    // 내 시간표 점수 버튼 클릭
    const handleScoreClick = e => {
        e.preventDefault();
        if (isLogin()) {
            navigate('/score');
        } else {
            alert('로그인이 필요합니다!');
        }
    };
    // 내 시간표 수정 버튼 클릭
    const handleEditClick = e => {
        e.preventDefault();
        if (isLogin()) {
            setIsEditModalOpen(true);
        } else {
            alert('로그인이 필요합니다!');
        }
    };
    // 로그아웃 버튼 클릭
    const handleLogoutClick = () => {
        const res = Logout();
        if (res.status === 200) {
            window.location.reload();
        }
    };
    // 탈퇴 버튼 클릭
    const handleWithdrawalClick = () => {
        setIsWithdrawalModalOpen(true);
    };
    const activeStyle = {
        background: 'var(--background)',
    };

    return (
        <S.FlexContainer>
            <div
                style={{
                    marginTop: '30%',
                    borderBottom: ' 0.05rem solid black',
                }}
            >
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
            {isLogin() ? (
                <S.BottomBox>
                    <S.LogoutBtn onClick={handleLogoutClick}>
                        <p>로그아웃</p>
                    </S.LogoutBtn>
                    <S.WithdrawalBtn onClick={handleWithdrawalClick}>
                        <p>회원탈퇴</p>
                    </S.WithdrawalBtn>
                </S.BottomBox>
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
