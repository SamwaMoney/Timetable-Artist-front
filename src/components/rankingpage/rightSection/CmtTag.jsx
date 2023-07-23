import { S, M } from '../Ranking.style';
import Comment from '../../../assets/rankingpage/comment.png';

const CmtTag = ({ isMobile, number }) => {
    return isMobile ? (
        <M.IconButton>
            <S.NoEventIcon width={2} src={Comment} alt='댓글' />
            <p>{number}</p>
        </M.IconButton>
    ) : (
        <S.IconButton>
            <S.NoEventIcon width={2} src={Comment} alt='댓글' />
            <p>{number}</p>
        </S.IconButton>
    );
};

export default CmtTag;
