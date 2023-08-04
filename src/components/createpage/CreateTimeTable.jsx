import { S } from './CreateTimeTable.style';
import Hamburger from '../_common/Hamburger';
import TimeTable from '../createpage/TimeTable';
import TimeTableInput from '../createpage/TimeTableInput';
import { useState } from 'react';
import ResetModal from '../_common/ResetModal';

const CreateTimeTable = () => {
    // 초기화 모달 open 여부
    const [isResetModalOpen, setIsResetModalOpen] = useState(false);
    // 초기화 모달 open 관련 함수
    const handleResetModal = () => {
        setIsResetModalOpen(true);
    };
    return (
        <>
            <S.Wrapper>
                <Hamburger />
                <S.Container>
                    <S.TimeTableDiv>
                        <S.ResetDiv>
                            <S.ResetBtn onClick={handleResetModal}>
                                초기화
                            </S.ResetBtn>
                            <S.NoticeText>
                                *강의 블록을 클릭하면 하나씩 삭제할 수 있어요.
                            </S.NoticeText>
                        </S.ResetDiv>
                        <TimeTable
                            isScorePage={false}
                            isHidden={false}
                            classList={null}
                        />
                    </S.TimeTableDiv>

                    <TimeTableInput />
                </S.Container>
            </S.Wrapper>
            {isResetModalOpen && (
                <ResetModal setIsResetModalOpen={setIsResetModalOpen} />
            )}
        </>
    );
};

export default CreateTimeTable;
