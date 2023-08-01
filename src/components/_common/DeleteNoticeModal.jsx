import { M } from './Modal.style';

import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';

const DeleteNoticeModal = ({ setIsDoubleDeleteModalOpen }) => {
    return (
        <M.Modal className={`${isMobile && 'mobile-background'}`}>
            <div
                className={`red-background modal ${isMobile && 'mobile-modal'}`}
            >
                <p className={`emoji ${isMobile && 'mobile-emoji'}`}>
                    (´-_ゝ-`)
                </p>
                <p className={`text ${isMobile && 'mobile-text'}`}>
                    삭제되었습니다.
                </p>
                <button
                    onClick={() => setIsDoubleDeleteModalOpen(false)}
                    className={`red-btn big-btn ${
                        isMobile && 'mobile-big-btn'
                    }`}
                >
                    확인
                </button>
            </div>
        </M.Modal>
    );
};

export default DeleteNoticeModal;
