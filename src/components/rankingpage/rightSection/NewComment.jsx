import Write from '../../../assets/rankingpage/write.png';
import { S, M } from '../Ranking.style';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

const NewComment = ({
    isMobile,
    currentUserId,
    updateComment,
    isSubmitting,
}) => {
    const params = useParams();
    //현재 시간표 id => 모바일일 경우 파람으로, 웹에서는 props로 전달받음
    const tableId = isMobile ? params.id : currentUserId;
    //댓글
    const [newText, setNewText] = useState('');
    //익명 체크했는지
    const [isNoName, setIsNoName] = useState(false);
    //내 멤버ID 가져오기 (키값 확인)
    const memberId = localStorage.getItem('memberId') || -1;
    const noNameBox = useRef();

    const onChangeText = e => {
        console.log(e.target.value);
        setNewText(e.target.value);
    };

    //새로운 댓글 보내는 로직 (익명 프로퍼티 추가되야 함)
    const onSubmitNewComment = () => {
        if (!isSubmitting) {
            const newComment = {
                tableId,
                memberId,
                content: newText,
                nameHide: isNoName,
            };
            updateComment(newComment).then(() => {
                setIsNoName(false);
                noNameBox.current.checked = false;
            });
            setNewText('');
        } else {
            alert('잠시만 기다려주세요!');
        }
    };

    //익명 체크 이벤트 함수
    const onChangeChecked = e => {
        if (e.target.checked) {
            return setIsNoName(true);
        }
    };

    return isMobile ? (
        <M.NewCommentWrapper>
            <M.NewCommentContainer>
                <M.checkBoxNoName>
                    <input
                        type='checkbox'
                        checked={isNoName}
                        onChange={e => {
                            onChangeChecked(e);
                        }}
                        ref={noNameBox}
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
                <M.UploadButton
                    onClick={onSubmitNewComment}
                    type='button'
                    disabled={!newText}
                >
                    <img src={Write} alt='올리기' />
                </M.UploadButton>
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
                    ref={noNameBox}
                />
                <S.NoNameText>익명</S.NoNameText>
            </S.checkBoxNoName>
            {memberId !== -1 ? (
                <S.CommentInput
                    placeholder='댓글 쓰기...'
                    onChange={onChangeText}
                    value={newText}
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
