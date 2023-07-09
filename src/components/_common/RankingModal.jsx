import { M } from "./Modal.style";

import React from "react";
import { useNavigate } from "react-router-dom";

const RankingModal = ({ setRankingModalOpen }) => {
    const navigate = useNavigate();

    const handleBtnClick = () => {
        navigate("/ranking");
        setRankingModalOpen(false);
    }
    return (
        <M.Modal>
            <div className="blue-background modal">
                <p className="emoji">( ͡° ͜ʖ ͡° )つ──☆*:・ﾟ</p>
                <p className="text">랭킹보드에 공유 완료!</p>
                <button onClick={handleBtnClick} className="blue-btn big-btn">내 순위 보러가기</button>
            </div>
        </M.Modal>
    )
}

export default RankingModal;