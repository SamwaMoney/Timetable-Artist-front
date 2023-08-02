import OneComment from './OneComment';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import RankingApis from '../../../api/ranking';
import NewComment from './NewComment';
import CommentSkeleton from '../../../skeleton/CommentSkeleton';
import MCommentSkeleton from '../../../skeleton/MCommentSkeleton';
const CommentList = ({ isMobile, currentUserId, setCommentNum }) => {
    const [isDeleteCmtModalOpen, setIsDeleteCmtModalOpen] = useState(false);
    const memberId = localStorage.getItem('memberId') || -1;
    const [commentData, setCommentData] = useState();
    const [loading, setLoading] = useState(true);

    console.log(isMobile);

    //댓글 가져온 후에 댓글 state에 데이터 추가하는 로직
    const getCommentData = async () => {
        const res = await getComment(currentUserId, memberId);
        setCommentData(res?.data?.replies);
        setLoading(false);
    };

    //처음에 댓글 불러오는 로직
    useEffect(() => {
        setLoading(true); //댓글 불러올떄마다 loading 띄우기
        setCommentData(); //댓글 초기화
        getCommentData();
    }, [currentUserId]);

    //로딩 상태 보여주는 UI
    useEffect(() => {
        if (loading && commentData) {
            setLoading(false);
        }
    }, [loading, commentData]);

    //댓글 개수 업데이트해주는 로직
    useEffect(() => {
        if (commentData) {
        }
        setCommentNum(commentData?.length);
    }, [commentData]);

    //댓글 가져오는 로직
    const getComment = async (timetableId, memberId) => {
        return await RankingApis.GetTimeTableComments(timetableId, memberId);
    };

    //댓글 삭제후 업데이트 로직
    const deleteMyComment = async (memberId, replyId) => {
        console.log('댓글삭제', memberId, replyId);
        await RankingApis.DeleteComment(memberId, replyId);
        await getCommentData();
    };

    //댓글 추가후 업데이트 로직
    const updateComment = async newComment => {
        await RankingApis.PostComment(newComment);
        await getCommentData();
    };

    return isMobile ? (
        <>
            <NewComment
                currentUserId={currentUserId}
                updateComment={updateComment}
                isMobile={true}
            />
            <MCommentContainer>
                {loading ? (
                    <MCommentSkeleton />
                ) : commentData.length > 0 ? (
                    commentData.map(reply => (
                        <OneComment
                            isMobile={true}
                            data={reply}
                            deleteMyComment={deleteMyComment}
                            key={Math.random() * 1000}
                            setIsDeleteCmtModalOpen={setIsDeleteCmtModalOpen}
                            isDeleteCmtModalOpen={isDeleteCmtModalOpen}
                        />
                    ))
                ) : (
                    <MNoComment>댓글이 없습니다.</MNoComment>
                )}
            </MCommentContainer>
        </>
    ) : (
        <>
            <NewComment
                currentUserId={currentUserId}
                updateComment={updateComment}
            />
            <CommentContainer>
                {loading ? (
                    <CommentSkeleton />
                ) : commentData?.length > 0 ? (
                    commentData.map(reply => (
                        <OneComment
                            data={reply}
                            deleteMyComment={deleteMyComment}
                            key={Math.random() * 1000}
                            setIsDeleteCmtModalOpen={setIsDeleteCmtModalOpen}
                            isDeleteCmtModalOpen={isDeleteCmtModalOpen}
                        />
                    ))
                ) : (
                    <SNoComment>댓글이 없습니다.</SNoComment>
                )}
            </CommentContainer>
        </>
    );
};
export default CommentList;

const CommentContainer = styled.div`
    margin-top: 0vw;
    margin-bottom: 1vw;
    width: 85%;
`;

const MCommentContainer = styled.div`
    margin-top: 1vw;
    margin-bottom: 15vw;
    width: 85%;
`;

const MNoComment = styled.div`
    text-align: center;
    margin-top: 10vw;
`;

const SNoComment = styled.div`
    text-align: center;
    margin-top: 1vw;
    margin-bottom: 1vw;
`;
