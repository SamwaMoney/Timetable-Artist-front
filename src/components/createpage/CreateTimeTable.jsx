import { S } from './CreateTimeTable.style';
import TimeTable from '../createpage/TimeTable';
import TimeTableInput from '../createpage/TimeTableInput';

const CreateTimeTable = () => {
    return (
        <>
            <S.Wrapper>
                <S.Hamburger />
                <S.Container>
                    <TimeTable />
                    <TimeTableInput />
                </S.Container>
            </S.Wrapper>
        </>
    );
};

export default CreateTimeTable;
