import { M } from "./Modal.style";

import React, { useState } from "react";

const DeleteModal = ({ setIsDeleteModalOpen, subjectName }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleCheckClick = () => {
        // 강의명 삭제
        setIsClicked(true);
    }
    return (
        <M.Modal>
            {isClicked ? (
                <div className="red-background modal">
                    <p className="emoji">(´-_ゝ-`)</p>
                    <p className="text">삭제되었습니다.</p>
                    <button onClick={() => setIsDeleteModalOpen(false)} className="red-btn big-btn">확인</button>
                </div>
            ) : (
                <div className="red-background modal">
                    <p className="emoji">(。・д・。)</p> {/* 원래 이모티콘이 깨져서 변경 */}
                    <p className="text">'{subjectName}'<br />강의를 삭제할까요?</p>
                    <div>
                        <button onClick={() => setIsDeleteModalOpen(false)} className="btn gray-btn">취소</button>
                        <button onClick={handleCheckClick} className="btn red-btn">삭제</button>
                    </div>
                </div>
            )}
        </M.Modal>
    );
}

export default DeleteModal;