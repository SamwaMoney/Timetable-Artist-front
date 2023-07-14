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
                    <TimeTable />
                    <TimeTableInput />
                </S.Container>
            </S.Wrapper>
        </>
    );
};

export default CreateTimeTable;
