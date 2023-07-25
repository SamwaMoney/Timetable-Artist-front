import Write from '../../../assets/rankingpage/write.png';
import { S, M } from '../Ranking.style';
import { useEffect, useState } from 'react';
const NewComment = ({ isMobile }) => {
    const [newText, setNewText] = useState();
    //익명 체크했는지
    const [isNoName, setIsNoName] = useState(false);

    const onChangeText = e => {
        setNewText(e.target.value);
        console.log(newText);
    };

    const onSubmitNewComment = () => {
        //새로운 댓글 보내는 로직
    };

    //익명 체크 이벤트 함수
    const onChangeChecked = e => {
        console.log(e.target.checked);
        if (e.target.checked) {
            return setIsNoName(true);
        }
        return setIsNoName(false);
    };

    return isMobile ? (
        <M.NewCommentWrapper>
            <M.NewCommentContainer>
                <M.checkBoxNoName>
                    <input
                        type='checkbox'
                        onChange={e => {
                            onChangeChecked(e);
                        }}
                    />
                    <M.NoNameText>익명</M.NoNameText>
                </M.checkBoxNoName>
                <M.CommentInput
                    placeholder='댓글 쓰기...'
                    onChange={onChangeText}
                />
                <M.UploadImg src={Write} alt='올리기' />
            </M.NewCommentContainer>
        </M.NewCommentWrapper>
    ) : (
        <S.NewCommentWrapper>
            <S.checkBoxNoName>
                <input
                    type='checkbox'
                    onChange={e => {
                        onChangeChecked(e);
                    }}
                />
                <S.NoNameText>익명</S.NoNameText>
            </S.checkBoxNoName>
            <S.CommentInput
                placeholder='댓글 쓰기...'
                onChange={onChangeText}
            />
            <S.UploadImg src={Write} alt='올리기' />
        </S.NewCommentWrapper>
    );
};

export default NewComment;
