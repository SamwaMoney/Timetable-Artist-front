import { S, M } from '../Ranking.style';
import Comment from '../../../assets/rankingpage/comment.png';

const CommentButton = ({ isMobile }) => {
    return isMobile ? (
        <M.IconButton>
            <M.Icon src={Comment} alt='하트' />
            <p>11</p>
        </M.IconButton>
    ) : (
        <S.IconButton>
            <S.Icon src={Comment} alt='하트' />
            <p>11</p>
        </S.IconButton>
    );
};

export default CommentButton;
