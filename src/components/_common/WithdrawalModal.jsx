import { M } from "./Modal.style";

import React, { useState } from "react";

const WithdrawalModal = ({ setIsWithdrawalModalOpen }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleCheckClick = () => {
        // 회원탈퇴 api 호출
        setIsClicked(true);
    }
    return (
        <M.Modal>
            {isClicked ? (
                <div className="withdrawal modal">
                    <p className="emoji">(´-_ゝ-`)</p>
                    <p className="text">탈퇴되었습니다.</p>
                    <button onClick={() => setIsWithdrawalModalOpen(false)} className="big-btn">확인</button>
                </div>
            ) : (
                <div className="withdrawal modal">
                    <p className="emoji">ﾍ(;´Д｀ﾍ) </p>
                    <p className="text">탈퇴하실 건가요?</p>
                    <div>
                        <button onClick={() => setIsWithdrawalModalOpen(false)} className="btn gray-btn">취소</button>
                        <button onClick={handleCheckClick} className="btn red-btn">확인</button>
                        </div>
                </div>
            )}
        </M.Modal>
    );
}

export default WithdrawalModal;