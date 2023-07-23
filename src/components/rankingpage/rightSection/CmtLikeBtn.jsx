import { useState } from 'react';
import NoLike from '../../../assets/rankingpage/heart1.png';
import GetLike from '../../../assets/rankingpage/heart2.png';
import { M, S } from '../Ranking.style';

const CmtLikeBtn = ({ isMobile }) => {
    const [isLike, setIsLike] = useState(false);

    //낙관적 업데이트 => 서버 실패 요청시 원래 하트로 롤백
    //좋아요 누르기
    const onGiveLike = () => {
        setIsLike(true);
        //좋아요 누르는 api 로직
    };

    //좋아요 취소
    const onCancelLike = () => {
        setIsLike(false);
        //좋아요 취소하는 api 로직
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
                <div>0</div>
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
                <div>0</div>
            </S.CommentLikeWrapper>
        );
    }
};

export default CmtLikeBtn;
