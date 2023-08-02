import Write from '../../../assets/rankingpage/write.png';
import { S, M } from '../Ranking.style';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NewComment = ({ isMobile, currentUserId, updateComment }) => {
    const params = useParams();
    //현재 시간표 id => 모바일일 경우 파람으로, 웹에서는 props로 전달받음
    const tableId = isMobile ? params.id : currentUserId;
    //댓글
    const [newText, setNewText] = useState();
    //익명 체크했는지
    const [isNoName, setIsNoName] = useState(false);
    //내 멤버ID 가져오기 (키값 확인)
    const memberId = localStorage.getItem('memberId') || -1;

    const onChangeText = e => {
        setNewText(e.target.value);
        console.log(newText);
    };

    //새로운 댓글 보내는 로직 (익명 프로퍼티 추가되야 함)
    const onSubmitNewComment = () => {
        const newComment = {
            tableId,
            memberId,
            content: newText,
            nameHide: isNoName,
        };
        updateComment(newComment);
        setNewText('');
        setIsNoName(false);
    };

    //익명 체크 이벤트 함수
    const onChangeChecked = e => {
        console.log(e.target.checked);
        if (e.target.checked) {
            return setIsNoName(true);
        }
        return setIsNoName(false);
    };

    useEffect(() => {
        console.log('memberId', memberId);
    }, []);

    // 엔터 키 입력 시 강의 추가
    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            onSubmitNewComment();
        }
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
                {memberId !== -1 ? (
                    <M.CommentInput
                        placeholder='댓글 쓰기...'
                        onChange={onChangeText}
                        value={newText}
                    />
                ) : (
                    <M.CommentDisabled>
                        로그인 후에 댓글을 쓸 수 있습니다.
                    </M.CommentDisabled>
                )}
                <M.UploadImg
                    src={Write}
                    alt='올리기'
                    onClick={onSubmitNewComment}
                    type='button'
                    disabled={!newText}
                />
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
            {memberId !== -1 ? (
                <S.CommentInput
                    placeholder='댓글 쓰기...'
                    onChange={onChangeText}
                    value={newText}
                    onKeyDown={handleKeyDown}
                />
            ) : (
                <S.CommentDisabled>
                    로그인 후에 댓글을 쓸 수 있습니다.
                </S.CommentDisabled>
            )}
            <S.UploadButton
                onClick={onSubmitNewComment}
                type='button'
                disabled={!newText}
            >
                <img src={Write} alt='올리기' />
            </S.UploadButton>
        </S.NewCommentWrapper>
    );
};

export default NewComment;
