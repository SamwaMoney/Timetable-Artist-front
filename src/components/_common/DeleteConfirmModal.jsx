import { M } from './Modal.style';

import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';

const DeleteConfirmModal = ({
    setIsDeleteModalOpen,
    lectureName,
    setIsDoubleDeleteModalOpen,
    handleDeleteLectureData,
}) => {

    const handleDeleteConfirmModal = () => {
        handleDeleteLectureData();
        setIsDeleteModalOpen(false);
        setIsDoubleDeleteModalOpen(true);
    };

    return (
        <M.Modal className={`${isMobile && 'mobile-background'}`}>
            <div
                className={`red-background modal ${isMobile && 'mobile-modal'}`}
            >
                <p className={`emoji ${isMobile && 'mobile-emoji'}`}>
                    (。・д・。)
                </p>{' '}
                {/* 원래 이모티콘이 깨져서 변경 */}
                <p className={`text ${isMobile && 'mobile-text'}`}>
                    '{lectureName}'
                    <br />
                    강의를 삭제할까요?
                </p>
                <div>
                    <button
                        onClick={() => setIsDeleteModalOpen(false)}
                        className={`btn gray-btn ${isMobile && 'mobile-btn'}`}
                    >
                        취소
                    </button>
                    <button
                        onClick={handleDeleteConfirmModal}
                        className={`btn red-btn ${isMobile && 'mobile-btn'}`}
                    >
                        삭제
                    </button>
                </div>
            </div>
        </M.Modal>
    );
};

export default DeleteConfirmModal;
