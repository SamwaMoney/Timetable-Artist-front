import { useState } from 'react';
import NoLike from '../../../assets/rankingpage/heart1.png';
import GetLike from '../../../assets/rankingpage/heart2.png';
import { M, S } from '../Ranking.style';
import RankingApis from '../../../api/ranking';
import { useParams } from 'react-router-dom';
const CmtLikeBtn = ({
    isMobile,
    heart,
    replyLikeCount,
    replyId,
    getCommentData,
    timetableId,
}) => {
    const [isLike, setIsLike] = useState(heart);
    const [likeCount, setLikeCount] = useState(replyLikeCount);

    const memberId = localStorage.getItem('memberId') || -1;
    const params = useParams();
    const tableId = params.id;
    console.log('timetime', timetableId);
    //좋아요 누르기
    const onGiveLike = async () => {
        if (memberId === -1) {
            return alert('로그인이 필요한 기능입니다.');
        }
        setIsLike(true);
        setLikeCount(prev => prev + 1);
        const res = await RankingApis.PostCommentLike(replyId, memberId);
        //서버 요청 실패시 롤백
        if (res?.status !== 201) {
            setIsLike(false);
            setLikeCount(prev => prev - 1);
        }
        if (isMobile) {
            getCommentData(tableId, memberId);
        } else {
            getCommentData(timetableId, memberId);
        }
    };

    //좋아요 취소
    const onCancelLike = async () => {
        setIsLike(false);
        setLikeCount(prev => {
            if (prev === 0) {
                return prev;
            }
            return prev - 1;
        });
        //좋아요 취소하는 api 로직
        await RankingApis.DeleteCommentLike(replyId, memberId);
        if (isMobile) {
            await getCommentData(tableId, memberId);
        } else {
            await getCommentData(timetableId, memberId);
        }
    };

    if (isMobile) {
        return (
            <M.HeartContainer>
                {isLike ? (
                    <S.EventIcon
                        width={2}
                        src={GetLike}
                        onClick={onCancelLike}
                    />
                ) : (
                    <S.EventIcon width={2} src={NoLike} onClick={onGiveLike} />
                )}
                <div>{likeCount}</div>
            </M.HeartContainer>
        );
    } else {
        return (
            <S.CommentLikeWrapper>
                {isLike ? (
                    <S.EventIcon
                        width={1.8}
                        src={GetLike}
                        onClick={onCancelLike}
                    />
                ) : (
                    <S.EventIcon
                        width={1.8}
                        src={NoLike}
                        onClick={onGiveLike}
                    />
                )}
                <div>{likeCount}</div>
            </S.CommentLikeWrapper>
        );
    }
};

export default CmtLikeBtn;
