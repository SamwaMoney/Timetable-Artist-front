import { S, M } from '../Ranking.style';
import { TiDelete } from 'react-icons/ti';
import CmtLikeBtn from './CmtLikeBtn';
import { timeHelper } from '../../../utils/time-helper';
import DeleteCmtConfirmModal from '../../_common/DeleteCmtConfirmModal';

//자신 댓글인지 확인해서 맞으면 삭제 버튼 & 색상 다르게 보여주기
//현재 시간을 0시간전으로 계산해서 보여주기
const OneComment = ({
    isMobile,
    data,
    deleteMyComment,
    setIsDeleteCmtModalOpen,
    isDeleteCmtModalOpen,
}) => {
    const {
        replyId,
        memberId,
        content,
        createdAt,
        heart,
        replyName,
        replyLikeCount,
    } = data;

    const myMemberId = localStorage.getItem('memberId') || -1;

    return isMobile ? (
        <M.OneCommentContainer>
            <M.CommentInfo>
                <M.IconContainer>
                    <M.CommentUserName>{replyName}</M.CommentUserName>
                    <M.CommentDate>{timeHelper(createdAt)}</M.CommentDate>
                </M.IconContainer>
                <M.IconContainer>
                    {memberId === myMemberId ? (
                        <TiDelete
                            size='8vw'
                            color='var(--background)'
                            onClick={() => {
                                setIsDeleteCmtModalOpen(true);
                            }}
                        />
                    ) : null}
                    <CmtLikeBtn
                        isMobile={true}
                        heart={heart}
                        replyLikeCount={replyLikeCount}
                    />
                </M.IconContainer>
            </M.CommentInfo>
            <M.CommentText>{content}</M.CommentText>
            {isDeleteCmtModalOpen && (
                <DeleteCmtConfirmModal
                    setIsDeleteCmtModalOpen={setIsDeleteCmtModalOpen}
                    deleteMyComment={deleteMyComment}
                    replyId={replyId}
                    memberId={myMemberId}
                />
            )}
        </M.OneCommentContainer>
    ) : (
        data && (
            <S.OneCommentContainer>
                <S.CommentInfo>
                    <S.CommentTextWrapper>
                        <S.CommentUserName>{replyName}</S.CommentUserName>
                        <S.CommentDate>{timeHelper(createdAt)}</S.CommentDate>
                    </S.CommentTextWrapper>
                </S.CommentInfo>
                <S.CommentText>{content}</S.CommentText>
                {/*내 댓글일떄만 삭제 버튼*/}
                {memberId == myMemberId ? (
                    <div
                        style={{
                            position: 'absolute',
                            right: '3rem',
                            top: '0.4rem',
                            cursor: 'pointer',
                        }}
                    >
                        <TiDelete
                            size='2rem'
                            color='var(--background)'
                            onClick={() => {
                                setIsDeleteCmtModalOpen(true);
                            }}
                        />
                    </div>
                ) : null}
                <div
                    style={{
                        position: 'absolute',
                        right: '0.5rem',
                        top: '0.4rem',
                    }}
                >
                    <CmtLikeBtn
                        isMobile={false}
                        heart={heart}
                        replyId={replyId}
                        replyLikeCount={replyLikeCount}
                    />
                </div>
                {isDeleteCmtModalOpen && (
                    <DeleteCmtConfirmModal
                        setIsDeleteCmtModalOpen={setIsDeleteCmtModalOpen}
                        deleteMyComment={deleteMyComment}
                        replyId={replyId}
                        memberId={myMemberId}
                    />
                )}
            </S.OneCommentContainer>
        )
    );
};

export default OneComment;
