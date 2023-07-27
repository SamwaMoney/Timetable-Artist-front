import { M } from './Modal.style';
import { DeleteMember } from '../../api/members';

import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';

const WithdrawalModal = ({ setIsWithdrawalModalOpen }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleCheckClick = () => {
        const res = DeleteMember();
        if (res === 500) {
            alert('탈퇴 에러');
        } else {
            setIsClicked(true);
            window.location.replace('/');
        }
    };
    return (
        <M.Modal className={`${isMobile && 'mobile-background'}`}>
            {isClicked ? (
                <div
                    className={`red-background modal ${
                        isMobile && 'mobile-modal'
                    }`}
                >
                    <p className={`emoji ${isMobile && 'mobile-emoji'}`}>
                        (´-_ゝ-`)
                    </p>
                    <p className={`text ${isMobile && 'mobile-text'}`}>
                        탈퇴되었습니다.
                    </p>
                    <button
                        onClick={() => setIsWithdrawalModalOpen(false)}
                        className={`red-btn big-btn ${
                            isMobile && 'mobile-big-btn'
                        }`}
                    >
                        확인
                    </button>
                </div>
            ) : (
                <div
                    className={`red-background modal ${
                        isMobile && 'mobile-modal'
                    }`}
                >
                    <p className={`emoji ${isMobile && 'mobile-emoji'}`}>
                        ﾍ(;´Д｀ﾍ)
                    </p>
                    <p className={`text ${isMobile && 'mobile-text'}`}>
                        탈퇴하실 건가요?
                    </p>
                    <div>
                        <button
                            onClick={() => setIsWithdrawalModalOpen(false)}
                            className={`btn gray-btn ${
                                isMobile && 'mobile-btn'
                            }`}
                        >
                            취소
                        </button>
                        <button
                            onClick={handleCheckClick}
                            className={`btn red-btn ${
                                isMobile && 'mobile-btn'
                            }`}
                        >
                            확인
                        </button>
                    </div>
                </div>
            )}
        </M.Modal>
    );
};

export default WithdrawalModal;
