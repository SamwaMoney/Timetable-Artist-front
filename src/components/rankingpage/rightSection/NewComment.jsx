import Write from '../../../assets/rankingpage/write.png';
import { S, M } from '../Ranking.style';
import { useState } from 'react';
import RankingApis from '../../../api/ranking';
import { useParams } from 'react-router-dom';

const NewComment = ({ isMobile, currentTableId }) => {
    const params = useParams();
    //현재 시간표 id => 모바일일 경우 파람으로, 웹에서는 props로 전달받음
    const tableId = isMobile ? params.id : currentTableId;
    //댓글
    const [newText, setNewText] = useState();
    //익명 체크했는지
    const [isNoName, setIsNoName] = useState(false);
    //내 멤버ID 가져오기 (키값 확인)
    const memberId = localStorage.getItem('myId') | 1;

    const onChangeText = e => {
        setNewText(e.target.value);
        console.log(newText);
    };

    //새로운 댓글 보내는 로직 (익명 프로퍼티 추가되야 함)
    const onSubmitNewComment = async () => {
        // const res = await RankingApis.PostComment({
        //     tableId,
        //     memberId,
        //     content: newText,
        // });
        // console.log(res);
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
            <S.UploadImg
                onClick={onSubmitNewComment}
                src={Write}
                alt='올리기'
            />
        </S.NewCommentWrapper>
    );
};

export default NewComment;
