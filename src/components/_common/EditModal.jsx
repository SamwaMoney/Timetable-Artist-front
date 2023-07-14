import { M } from './Modal.style';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

const EditModal = ({ setIsEditModalOpen }) => {
    const navigate = useNavigate();

    const handleCheckClick = () => {
        navigate('/create');
        setIsEditModalOpen(false);
    };
    return (
        <M.Modal className={`${isMobile && "mobile-background"}`}>
            <div className={`red-background modal ${isMobile && "mobile-modal"}`}>
                <p className={`emoji ${isMobile && "mobile-emoji"}`}>(｡•́︿•̀｡)</p>
                <p className={`text edit-text ${isMobile && "mobile-edit-text"}`}>
                    시간표를 수정하면
                    <br />
                    기존의 시간표와 랭킹 기록이 사라져요!
                    <br />
                    그래도 수정할까요?
                </p>
                <div>
                    <button
                        onClick={() => setIsEditModalOpen(false)}
                        className={`btn gray-btn ${isMobile && "mobile-btn"}`}
                    >
                        취소
                    </button>
                    <button 
                        onClick={handleCheckClick} 
                        className={`btn red-btn ${isMobile && "mobile-btn"}`}
                    >
                        수정
                    </button>
                </div>
            </div>
        </M.Modal>
    );
};

export default EditModal;
