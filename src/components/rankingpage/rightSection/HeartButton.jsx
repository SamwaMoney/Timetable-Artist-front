import { S, M } from '../Ranking.style';
import NoLike from '../../../assets/rankingpage/heart1.png';

const HeartButton = ({ isMobile, number }) => {
    return isMobile ? (
        <M.IconButton>
            <M.CommentIcon src={NoLike} alt='하트' />
            <p>10</p>
        </M.IconButton>
    ) : (
        <S.IconButton>
            <S.Icon src={NoLike} alt='하트' />
            <p>{number}</p>
        </S.IconButton>
    );
};
export default HeartButton;
