import S from '../Ranking.style';
import MyScore from './MyScore';
const NewButton = ({ isMyData }) => {
    return (
        <S.Header>
            {isMyData ? (
                <MyScore />
            ) : (
                <S.NewButton>시간표 등록하기</S.NewButton>
            )}
        </S.Header>
    );
};

export default NewButton;
