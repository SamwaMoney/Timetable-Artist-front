import { S, M } from '../Ranking.style';
import Comment from '../../../assets/rankingpage/comment.png';

const CmtTag = ({ isMobile, number }) => {
    return isMobile ? (
        <M.IconButton>
            <M.CommentIcon src={Comment} alt='하트' />
            <p>{number}</p>
        </M.IconButton>
    ) : (
        <S.IconButton>
            <S.Icon src={Comment} alt='하트' />
            <p>{number}</p>
        </S.IconButton>
    );
};

export default CmtTag;
