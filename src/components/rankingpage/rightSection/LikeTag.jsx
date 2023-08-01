import { S, M } from '../Ranking.style';
import NoLike from '../../../assets/rankingpage/heart1.png';
import YesLike from '../../../assets/rankingpage/heart2.png';

const LikeTag = ({ number, liked }) => {
    return liked ? (
        <M.IconButton>
            <S.NoEventIcon width={2} src={YesLike} alt='하트' />
            <p>{number}</p>
        </M.IconButton>
    ) : (
        <M.IconButton>
            <S.NoEventIcon width={2} src={NoLike} alt='하트' />
            <p>{number}</p>
        </M.IconButton>
    );
};
export default LikeTag;
