import { S } from './CreateTimeTable.style';
import Hamburger from '../_common/Hamburger';
import TimeTable from '../createpage/TimeTable';
import TimeTableInput from '../createpage/TimeTableInput';

//페이지
const CreateTimeTable = () => {
    return (
        <S.Wrapper>
            <Hamburger />
            <S.Container>
                <S.SmallContainer>
                    <TimeTable />
                </S.SmallContainer>
                <S.SmallContainer>
                    <TimeTableInput />
                </S.SmallContainer>
            </S.Container>
        </S.Wrapper>
    );
};

export default CreateTimeTable;
