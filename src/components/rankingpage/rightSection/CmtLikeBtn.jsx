import { useState } from 'react';
import NoLike from '../../../assets/rankingpage/heart1.png';
import GetLike from '../../../assets/rankingpage/heart2.png';
import { M, S } from '../Ranking.style';
import RankingApis from '../../../api/ranking';

const CmtLikeBtn = ({ isMobile, heart, replyLikeCount, replyId }) => {
    const [isLike, setIsLike] = useState(heart);
    const [likeCount, setLikeCount] = useState(replyLikeCount);

    const memberId = localStorage.getItem('memberId') || -1;

    //좋아요 누르기
    const onGiveLike = async () => {
        if(memberId === -1){
           return alert('로그인이 필요한 서비스입니다!')
        }
        setIsLike(true);
        setLikeCount(prev => prev + 1);
        const res = await RankingApis.PostCommentLike(replyId, memberId);
        console.log('댓글 좋아요 결과', res);
        //서버 요청 실패시 롤백
        if (res.status !== 201) {
            setIsLike(false);
            setLikeCount(prev => prev - 1);
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
        const res = await RankingApis.DeleteCommentLike(replyId, memberId);
        console.log('댓글 좋아요 취소 결과', res);
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
