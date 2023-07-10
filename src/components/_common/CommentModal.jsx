import { M } from "./Modal.style";

import React from "react";

const CommentModal = ({ setCommentModalOpen }) => {
    return (
        <M.Modal>
            <div className="blue-background modal">
                <p className="emoji">₊·*◟(⌯ˇ- ˇ⌯)◜‧*・</p>
                <p className="text">댓글 등록 완료!</p>
                <button onClick={() => setCommentModalOpen(false)} className="blue-btn big-btn">확인</button>
            </div>
        </M.Modal>
    )
}

export default CommentModal;