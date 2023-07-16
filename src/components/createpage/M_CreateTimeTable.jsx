import { S } from './M_CreateTimeTable.style';
import MHamburgerButton from '../_common/M_HamburgerBtn';
import TimeTable from './TimeTable';
import add_timetable from '../../assets/createpage/add_timetable.png';

const MCreateTimeTable = () => {
    const nickname = '삼와머니';

    return (
        <>
            <S.MWrapper>
                <MHamburgerButton />
                <S.MInnerContainer>
                    <S.MButtonDiv>
                        <S.MResetBtn>초기화</S.MResetBtn>
                        <S.MCompleteBtn>완성</S.MCompleteBtn>
                    </S.MButtonDiv>
                    <S.MTimeTableText>
                        <S.MNicknameText>{nickname}</S.MNicknameText>의 시간표
                    </S.MTimeTableText>

                    <TimeTable />

                    <S.MAddButtonDiv>
                        <S.MAddButton src={add_timetable} alt='+버튼' />
                    </S.MAddButtonDiv>
                </S.MInnerContainer>
            </S.MWrapper>
        </>
    );
};

export default MCreateTimeTable;
