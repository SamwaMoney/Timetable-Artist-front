import { M } from "./Modal.style";

import React from "react";

const ResetModal = ({ setIsResetModalOpen }) => {

    const handleResetClick = () => {
        // 시간표 삭제 api 불러오기
        setIsResetModalOpen(false);
        window.location.reload();
    }
    return (
        <M.Modal>
            <div className="red-background modal">
                <p className="emoji">(-_-^)</p>
                <p className="text">정말 초기화할까요?</p>
                <div>
                    <button onClick={() => setIsResetModalOpen(false)} className="btn gray-btn">취소</button>
                    <button onClick={handleResetClick} className="btn red-btn">초기화</button>
                </div>
            </div>
        </M.Modal>
    );
}

export default ResetModal;