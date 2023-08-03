import { S } from './CreateTimeTable.style';
import Hamburger from '../_common/Hamburger';
import TimeTable from '../createpage/TimeTable';
import TimeTableInput from '../createpage/TimeTableInput';

const CreateTimeTable = () => {
    return (
        <>
            <S.Wrapper>
                <Hamburger />
                <S.Container>
                    <S.TimeTableDiv>
                        <S.ResetDiv>
                            <S.ResetBtn>초기화</S.ResetBtn>
                            <S.NoticeText>
                                *강의 블록을 클릭하면 하나씩 삭제할 수 있어요.
                            </S.NoticeText>
                        </S.ResetDiv>
                        <TimeTable isScorePage={false} isHidden={false} />
                    </S.TimeTableDiv>

                    <TimeTableInput />
                </S.Container>
            </S.Wrapper>
        </>
    );
};

export default CreateTimeTable;
