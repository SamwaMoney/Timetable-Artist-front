import Write from '../../../assets/rankingpage/write.png';
import { S } from '../Ranking.style';

const NewComment = () => {
    return (
        <>
            <S.NewCommentWrapper>
                <S.CommentInput placeholder='댓글 쓰기...' />
                <S.UploadImg src={Write} alt='올리기' />
            </S.NewCommentWrapper>
        </>
    );
};

export default NewComment;
