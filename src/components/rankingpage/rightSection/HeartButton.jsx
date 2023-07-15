import { S } from '../Ranking.style';
import NoLike from '../../../assets/rankingpage/heart1.png';

const HeartButton = () => {
    return (
        <S.IconButton>
            <S.Icon src={NoLike} alt='하트' />
            <p>11</p>
        </S.IconButton>
    );
};
export default HeartButton;
