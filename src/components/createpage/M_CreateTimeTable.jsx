import { S } from './M_CreateTimeTable.style';
import MHamburgerButton from '../_common/M_HamburgerBtn';
import { useState } from 'react';
import TimeTable from './TimeTable';
import add_timetable from '../../assets/createpage/add_timetable.png';
import MTimeTableInputModal from './M_TimeTableInputModal';

const MCreateTimeTable = () => {
    const nickname = '삼와머니';

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [colorIndex, setColorIndex] = useState(0);

    return (
        <>
            <S.MWrapper>
                <MHamburgerButton />
                <S.MInnerContainer>
                    <S.MButtonDiv className={isModalOpen ? 'delete' : ''}>
                        <S.MResetBtn>초기화</S.MResetBtn>
                        <S.MCompleteBtn>완성</S.MCompleteBtn>
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
        </>
    );
};

export default MCreateTimeTable;
