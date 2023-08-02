import { M } from './Modal.style';
import { CreateTable, DeleteTable, GetTableId } from '../../api/timetables';

import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

const EditModal = ({ setIsEditModalOpen }) => {
    const navigate = useNavigate();

    const handleCheckClick = () => {
        const tableId = localStorage.getItem('tableId');
        DeleteTable(tableId);
        CreateTable();
        GetTableId();
        setIsEditModalOpen(false);
        navigate('/create');
    };

    return (
        <M.Modal className={`${isMobile && 'mobile-background'}`}>
            <div
                className={`red-background modal ${isMobile && 'mobile-modal'}`}
            >
                <p className={`emoji ${isMobile && 'mobile-emoji'}`}>
                    (｡•́︿•̀｡)
                </p>
                <p
                    className={`text edit-text ${
                        isMobile && 'mobile-edit-text'
                    }`}
                >
                    새 시간표를 만들면
                    <br />
                    기존의 시간표와 랭킹 기록이 사라져요!
                    <br />
                    그래도 새로 만들까요?
                </p>
                <div>
                    <button
                        onClick={() => setIsEditModalOpen(false)}
                        className={`btn gray-btn ${isMobile && 'mobile-btn'}`}
                    >
                        취소
                    </button>
                    <button
                        onClick={handleCheckClick}
                        className={`btn red-btn ${isMobile && 'mobile-btn'}`}
                    >
                        생성
                    </button>
                </div>
            </div>
        </M.Modal>
    );
};

export default EditModal;
