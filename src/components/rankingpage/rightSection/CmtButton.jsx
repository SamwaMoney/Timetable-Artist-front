import S from '../Ranking.style';
import Comment from '../../../assets/rankingpage/comment.png';

const CommentButton = () => {
    return (
        <S.IconButton>
            <S.Icon src={Comment} alt='댓글' />
            11
        </S.IconButton>
    );
};
export default CommentButton;
