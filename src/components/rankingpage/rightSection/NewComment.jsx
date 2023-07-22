import Write from '../../../assets/rankingpage/write.png';
import { S, M } from '../Ranking.style';
import { useState } from 'react';
const NewComment = ({ isMobile }) => {
    const [newText, setNewText] = useState();

    const onChangeText = e => {
        setNewText(e.target.value);
        console.log(newText);
    };

    const onSubmitNewComment = () => {
        //새로운 댓글 보내는 로직
    };
    return isMobile ? (
        <M.NewCommentWrapper>
            <M.NewCommentContainer>
                <M.CommentInput
                    placeholder='댓글 쓰기...'
                    onChange={onChangeText}
                />
                <M.UploadImg src={Write} alt='올리기' />
            </M.NewCommentContainer>
        </M.NewCommentWrapper>
    ) : (
        <S.NewCommentWrapper>
            <S.CommentInput
                placeholder='댓글 쓰기...'
                onChange={onChangeText}
            />
            <S.UploadImg src={Write} alt='올리기' />
        </S.NewCommentWrapper>
    );
};

export default NewComment;
