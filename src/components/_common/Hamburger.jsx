import EditModal from "./EditModal";
import { S } from "./Hamburger.style";
import WithdrawalModal from "./WithdrawalModal";

import { useState } from "react";

const Hamburger = () => {
    const [isWithdrawalModalOpen, setIsWithdrawalModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const handleEditClick = (e) => {
        e.preventDefault();
        setIsEditModalOpen(true);
    }
    const handleWithdrawalClick = () => {
        setIsWithdrawalModalOpen(true);
    };
    const activeStyle = {
        background: "var(--background)"
    }
    
    return (
        <S.Wrapper>
            <S.MenuWrapper>
                <S.MenuBtn>
                    <S.NavLink
                        to="/aboutus"
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                        className="aboutus"
                    >
                        <p>ABOUT US</p>
                    </S.NavLink>
                </S.MenuBtn>
                <S.MenuBtn>
                    <S.NavLink
                        to="/ranking"
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                        <p>랭킹보드</p>
                    </S.NavLink>
                </S.MenuBtn>
                <S.MenuBtn>
                    <S.NavLink
                        to="/score"
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                        <p>내 시간표 점수</p>
                    </S.NavLink>
                </S.MenuBtn>
                <S.MenuBtn>
                    <S.NavLink
                        to="/create"
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                        onClick={e => handleEditClick(e)}
                    >
                        <p>내 시간표 수정</p>
                    </S.NavLink>
                </S.MenuBtn>
            </S.MenuWrapper>
            <S.WithdrawalBtn onClick={handleWithdrawalClick}>
                <p>회원탈퇴</p>
            </S.WithdrawalBtn>
            {isWithdrawalModalOpen && <WithdrawalModal setIsWithdrawalModalOpen={setIsWithdrawalModalOpen}/>}
            {isEditModalOpen && <EditModal setIsEditModalOpen={setIsEditModalOpen} />}
        </S.Wrapper>
    );
}

export default Hamburger;