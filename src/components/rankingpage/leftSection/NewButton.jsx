import { S } from '../Ranking.style';
import MyScore from './MyScore';
const NewButton = ({ isMyData, isMobile }) => {
    return (
        <S.Header>
            {isMyData ? (
                <MyScore isMobile={isMobile} />
            ) : (
                <S.NewButton isMobile={isMobile}> 시간표 등록하기</S.NewButton>
            )}
        </S.Header>
    );
};

export default NewButton;
