import { S } from './M_CreateTimeTable.style';
import MHamburgerButton from '../_common/M_HamburgerBtn';
import { useState } from 'react';
import TimeTable from './TimeTable';
import add_timetable from '../../assets/createpage/add_timetable.png';
import MTimeTableInputModal from './M_TimeTableInputModal';
import ResetModal from '../_common/ResetModal';

import { useSelector } from 'react-redux';
import { CreateClasses, CreateTable } from '../../api/timetables';
import { useNavigate } from 'react-router-dom';

const MCreateTimeTable = () => {
    const nickname = '삼와머니';

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [colorIndex, setColorIndex] = useState(0);

    // 초기화 모달 open 여부
    const [isResetModalOpen, setIsResetModalOpen] = useState(false);

    // 초기화 모달 open 관련 함수
    const handleResetModal = () => {
        setIsResetModalOpen(true);
    };

    // redux에 있는 시간표 데이터. 시간표 완성 시 사용
    const timetableData = useSelector(
        state => state.timeTableReducer,
    ).selectedData;

    // navigate
    const navigate = useNavigate();

    // 시간표 완성 버튼 클릭 시 제출하는 함수
    const handleSubmitClassData = async () => {
        console.log('시간표 완성');

        // 만약 수업 개수가 없으면 강의가 없습니다 alert 띄우기
        if (timetableData.length <= 0) {
            alert('현재 추가된 강의가 없습니다. 강의를 추가해주세요!');
            return;
        }
        // memberId, timetableId 받아오기
        const memberId = localStorage.getItem('memberId');
        const timeTableId = await CreateTable();

        // - 반복문 돌면서 memberId, timetableId 추가, startTime, endTime 시간과 분 분리, startTime, endTime 삭제
        const finalTimeTableData = timetableData.map(classData => {
            // 새로운 객체를 생성하여 원본 객체의 프로퍼티를 복사
            const newClassData = { ...classData };

            // memberId, timetableId 추가
            newClassData.memberId = parseInt(memberId, 10);
            newClassData.timetable = parseInt(timeTableId, 10);

            // startTime에서 시간과 분 분리하여 숫자 형태로 프로퍼티 추가
            if (newClassData.startTime) {
                const startTimeParts = newClassData.startTime.split(':');
                newClassData.startH = parseInt(startTimeParts[0], 10);
                newClassData.startM = parseInt(startTimeParts[1], 10);
            } else {
                newClassData.startH = null;
                newClassData.startM = null;
            }

            // endTime에서 시간과 분 분리하여 숫자 형태로 프로퍼티 추가
            if (newClassData.endTime) {
                const endTimeParts = newClassData.endTime.split(':');
                newClassData.endH = parseInt(endTimeParts[0], 10);
                newClassData.endM = parseInt(endTimeParts[1], 10);
            } else {
                newClassData.endH = null;
                newClassData.endM = null;
            }

            // startTime, endTime 삭제
            delete newClassData.startTime;
            delete newClassData.endTime;

            return newClassData;
        });

        // post
        const res = await CreateClasses(finalTimeTableData);

        // post 성공 시 결과 페이지로 이동
        if (res.status === 200 || res.status === 201) {
            navigate('/score');
        }
    };

    return (
        <>
            <S.MWrapper>
                <MHamburgerButton />
                <S.MInnerContainer>
                    <S.MButtonDiv className={isModalOpen ? 'delete' : ''}>
                        <S.MResetBtn onClick={handleResetModal}>
                            초기화
                        </S.MResetBtn>
                        <S.MCompleteBtn onClick={handleSubmitClassData}>
                            완성
                        </S.MCompleteBtn>
                    </S.MButtonDiv>
                    <S.MTimeTableText className={isModalOpen ? 'delete' : ''}>
                        <S.MNicknameText>{nickname}</S.MNicknameText>의 시간표
                    </S.MTimeTableText>

                    <TimeTable
                        isScorePage={false}
                        isHidden={false}
                        classList={null}
                    />

                    <S.MAddButtonDiv>
                        <S.MAddButton
                            src={add_timetable}
                            alt='+버튼'
                            onClick={() => {
                                setIsModalOpen(true);
                            }}
                        />
                    </S.MAddButtonDiv>
                </S.MInnerContainer>
            </S.MWrapper>
            {isModalOpen && (
                <MTimeTableInputModal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    colorIndex={colorIndex}
                    setColorIndex={setColorIndex}
                />
            )}
            {isResetModalOpen && (
                <ResetModal setIsResetModalOpen={setIsResetModalOpen} />
            )}
        </>
    );
};

export default MCreateTimeTable;
