import { S, M } from '../Ranking.style';
import NoLike from '../../../assets/rankingpage/heart1.png';

const HeartButton = ({ isMobile }) => {
    return isMobile ? (
        <M.IconButton>
            <M.Icon src={NoLike} alt='하트' />
            <p>11</p>
        </M.IconButton>
    ) : (
        <S.IconButton>
            <S.Icon src={NoLike} alt='하트' />
            <p>11</p>
        </S.IconButton>
    );
};
export default HeartButton;
