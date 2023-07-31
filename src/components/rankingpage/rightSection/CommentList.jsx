import OneComment from './OneComment';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import RankingApis from '../../../api/ranking';
import NewComment from './NewComment';

const CommentList = ({ isMobile, currentUserId }) => {
    const memberId = localStorage.getItem('memberId') || -1;
    const [CommentData, setCommentData] = useState();

    //댓글 가져온 후에 댓글 state에 데이터 추가하는 로직
    const getCommentData = async () => {
        const res = await getComment(currentUserId, memberId);
        setCommentData(res?.data?.replies);
    };

    //처음에 댓글 불러오는 로직
    useEffect(() => {
        getCommentData();
    }, [currentUserId]);

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

    return isMobile
        ? CommentData && (
              <MCommentContainer>
                  {CommentData.map(reply => {
                      return (
                          <OneComment
                              data={reply}
                              deleteMyComment={deleteMyComment}
                              key={Math.random() * 1000}
                          />
                      );
                  })}
              </MCommentContainer>
          )
        :  (
              <>
                  <NewComment
                      currentUserId={currentUserId}
                      updateComment={updateComment}
                  />
                  {CommentData &&
                  <CommentContainer>
                      {CommentData.map(reply => {
                          return (
                              <OneComment
                                  data={reply}
                                  deleteMyComment={deleteMyComment}
                                  getComment={getComment}
                                  key={Math.random() * 1000}
                              />
                          );
                      })}
                  </CommentContainer>}
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
