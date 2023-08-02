import { S, M } from '../Ranking.style';
import NoLike from '../../../assets/rankingpage/heart1.png';
import YesLike from '../../../assets/rankingpage/heart2.png';
import { useNavigate } from 'react-router-dom';

const LikeTag = ({ number, liked, timetableId, index }) => {
    const navigate = useNavigate();
    return liked ? (
        <M.IconButton
            onClick={() => {
                navigate(`/ranking/detail/${timetableId}?rank=${index + 1}`);
            }}
        >
            <S.NoEventIcon width={2} src={YesLike} alt='하트' />
            <p>{number}</p>
        </M.IconButton>
    ) : (
        <M.IconButton
            onClick={() => {
                navigate(`/ranking/detail/${timetableId}?rank=${index + 1}`);
            }}
        >
            <S.NoEventIcon width={2} src={NoLike} alt='하트' />
            <p>{number}</p>
        </M.IconButton>
    );
};
export default LikeTag;
