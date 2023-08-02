import S from './M_Hamburger.style';
import WithdrawalModal from './WithdrawalModal';
import EditModal from './EditModal';
import BackBtn from './BackBtn';
import { Logout, isLogin } from '../../api/members';
import { CreateTable, GetTableId } from '../../api/timetables';

import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const MHamburger = () => {
    const [isWithdrawalModalOpen, setIsWithdrawalModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

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
            const tableId = localStorage.getItem('tableId');
            // tableId 가져오기
            // 'null'인지 null인지 체크
            if (tableId !== 'null') {
                setIsEditModalOpen(true);
            } else {
                CreateTable();
                GetTableId();
                navigate('/create');
            }
        } else {
            alert('로그인이 필요합니다!');
        }
    };

    // 로그아웃 버튼 클릭
    const handleLogoutClick = () => Logout();

    // 회원탈퇴 버튼 클릭
    const handleWithdrawalClick = () => setIsWithdrawalModalOpen(true);

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
                    <p>새 시간표 만들기</p>
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
