import Write from '../../../assets/rankingpage/write.png';
import { S, M } from '../Ranking.style';

const NewComment = ({ isMobile }) => {
    return isMobile ? (
        <M.NewCommentWrapper>
            <M.NewCommentContainer>
                <M.CommentInput placeholder='댓글 쓰기...' />
                <M.UploadImg src={Write} alt='올리기' />
            </M.NewCommentContainer>
        </M.NewCommentWrapper>
    ) : (
        <S.NewCommentWrapper>
            <S.CommentInput placeholder='댓글 쓰기...' />
            <S.UploadImg src={Write} alt='올리기' />
        </S.NewCommentWrapper>
    );
};

export default NewComment;
