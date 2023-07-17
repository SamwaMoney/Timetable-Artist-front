import { M } from "./Modal.style";

import React from "react";
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";

const RankingModal = ({ setRankingModalOpen }) => {
    const navigate = useNavigate();

    const handleBtnClick = () => {
        navigate("/ranking");
        setRankingModalOpen(false);
    }
    return (
        <M.Modal className={`${isMobile && "mobile-background"}`}>
            <div className={`blue-background modal ${isMobile && "mobile-modal"}`}>
                <p className={`emoji ${isMobile && "mobile-emoji"}`}>( ͡° ͜ʖ ͡° )つ──☆*:・ﾟ</p>
                <p className={`text ${isMobile && "mobile-text"}`}>랭킹보드에 공유 완료!</p>
                <button 
                    onClick={handleBtnClick} 
                    className={`blue-btn big-btn ${isMobile && "mobile-big-btn"}`}
                >
                    내 순위 보러가기
                </button>
            </div>
        </M.Modal>
    )
}

export default RankingModal;