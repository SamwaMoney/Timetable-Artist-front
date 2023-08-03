import { M } from './Modal.style';
import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';

const DeleteCmtConfirmModal = ({
    setIsDeleteCmtModalOpen,
    deleteMyComment,
    memberId,
    replyId,
}) => {
    console.log('삭제 모달 댓글아이디', replyId);
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
                    댓글을 삭제할까요?
                </p>
                <div>
                    <button
                        onClick={() => {
                            setIsDeleteCmtModalOpen(false);
                        }}
                        className={`btn gray-btn ${isMobile && 'mobile-btn'}`}
                    >
                        취소
                    </button>
                    <button
                        onClick={() => {
                            deleteMyComment(memberId, replyId);
                            setIsDeleteCmtModalOpen(false);
                        }}
                        className={`btn red-btn ${isMobile && 'mobile-btn'}`}
                    >
                        삭제
                    </button>
                </div>
            </div>
        </M.Modal>
    );
};
export default DeleteCmtConfirmModal;
