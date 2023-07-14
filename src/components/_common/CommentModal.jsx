import { M } from "./Modal.style";

import React from "react";
import { isMobile } from "react-device-detect";

const CommentModal = ({ setCommentModalOpen }) => {
    return (
        <M.Modal className={`${isMobile && "mobile-background"}`}>
            <div className={`blue-background modal ${isMobile && "mobile-modal"}`}>
                <p className={`emoji ${isMobile && "mobile-emoji"}`}>₊·*◟(⌯ˇ- ˇ⌯)◜‧*・</p>
                <p className={`text ${isMobile && "mobile-text"}`}>댓글 등록 완료!</p>
                <button 
                    onClick={() => setCommentModalOpen(false)} 
                    className={`big-btn blue-btn ${isMobile && "mobile-big-btn"}`}
                >
                    확인
                </button>
            </div>
        </M.Modal>
    )
}

export default CommentModal;