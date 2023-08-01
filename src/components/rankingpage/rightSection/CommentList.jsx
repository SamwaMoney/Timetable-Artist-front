import OneComment from './OneComment';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import RankingApis from '../../../api/ranking';
import NewComment from './NewComment';
import CommentSkeleton from '../../../skeleton/CommentSkeleton';
import MCommentSkeleton from '../../../skeleton/MCommentSkeleton';
const CommentList = ({ isMobile, currentUserId }) => {
    const memberId = localStorage.getItem('memberId') || -1;
    const [CommentData, setCommentData] = useState();
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
        setCommentData();
        getCommentData();
    }, [currentUserId]);

    //로딩 상태 보여주는 UI
    useEffect(() => {
        if (loading && CommentData) {
            setLoading(false);
        }
    }, [loading, CommentData]);

    //댓글 가져오는 로직
    const getComment = async (timetableId, memberId) => {
        return await RankingApis.GetTimeTableComments(timetableId, memberId);
    };

    //댓글 삭제후 업데이트 로직
    const deleteMyComment = async (memberId, replyId) => {
        await RankingApis.DeleteComment(memberId, replyId);
        await getCommentData();
    };

    //댓글 추가후 업데이트 로직
    const updateComment = async newComment => {
        await RankingApis.PostComment(newComment);
        await getCommentData();
    };

    return isMobile ? (
        <MCommentContainer>
            {loading ? (
                <MCommentSkeleton />
            ) : CommentData.length > 0 ? (
                CommentData.map(reply => (
                    <OneComment
                        data={reply}
                        deleteMyComment={deleteMyComment}
                        key={Math.random() * 1000}
                    />
                ))
            ) : (
                <MNoComment>댓글이 없습니다.</MNoComment>
            )}
        </MCommentContainer>
    ) : (
        <>
            <NewComment
                currentUserId={currentUserId}
                updateComment={updateComment}
            />
            <CommentContainer>
                {loading ? (
                    <CommentSkeleton />
                ) : CommentData?.length > 0 ? (
                    CommentData.map(reply => (
                        <OneComment
                            data={reply}
                            deleteMyComment={deleteMyComment}
                            key={Math.random() * 1000}
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
