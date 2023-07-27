import { M } from './Modal.style';

import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';

const DeleteModal = ({ setIsDeleteModalOpen, subjectName }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleCheckClick = () => {
        // 강의명 삭제
        setIsClicked(true);
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
                        삭제되었습니다.
                    </p>
                    <button
                        onClick={() => setIsDeleteModalOpen(false)}
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
                        (。・д・。)
                    </p>{' '}
                    {/* 원래 이모티콘이 깨져서 변경 */}
                    <p className={`text ${isMobile && 'mobile-text'}`}>
                        '{subjectName}'
                        <br />
                        강의를 삭제할까요?
                    </p>
                    <div>
                        <button
                            onClick={() => setIsDeleteModalOpen(false)}
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
                            삭제
                        </button>
                    </div>
                </div>
            )}
        </M.Modal>
    );
};

export default DeleteModal;
