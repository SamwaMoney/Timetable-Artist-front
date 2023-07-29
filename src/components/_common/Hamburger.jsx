import EditModal from './EditModal';
import { S } from './Hamburger.style';
import WithdrawalModal from './WithdrawalModal';
import { Logout, isLogin } from '../../api/members';

import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Hamburger = () => {
    const [isWithdrawalModalOpen, setIsWithdrawalModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const navigate = useNavigate();

    const handleScoreClick = e => {
        e.preventDefault();
        if (isLogin()) {
            navigate('/score');
        } else {
            alert('로그인이 필요합니다!');
        }
    };
    const handleEditClick = e => {
        e.preventDefault();
        if (isLogin()) {
            setIsEditModalOpen(true);
        } else {
            alert('로그인이 필요합니다!');
        }
    };

    // 로그아웃 버튼 클릭
    const handleLogoutClick = () => Logout();

    // 회원탈퇴 버튼 클릭
    const handleWithdrawalClick = () => {
        setIsWithdrawalModalOpen(true);
    };
    const activeStyle = {
        background: 'var(--background)',
    };

    return (
        <S.Wrapper>
            <div>
                <S.MenuBtn>
                    <NavLink
                        to='/aboutus'
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        className='aboutus'
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
            </div>
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
        </S.Wrapper>
    );
};

export default Hamburger;
