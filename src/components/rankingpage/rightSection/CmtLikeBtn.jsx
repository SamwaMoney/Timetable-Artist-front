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
                    <M.Icon src={GetLike} onClick={onCancelLike} />
                ) : (
                    <M.Icon src={NoLike} onClick={onGiveLike} />
                )}
                <div>0</div>
            </M.HeartContainer>
        );
    } else {
        return (
            <S.CommentLikeWrapper>
                {isLike ? (
                    <S.Icon src={GetLike} onClick={onCancelLike} />
                ) : (
                    <S.Icon src={NoLike} onClick={onGiveLike} />
                )}
                <div>0</div>
            </S.CommentLikeWrapper>
        );
    }
};

export default CmtLikeBtn;
