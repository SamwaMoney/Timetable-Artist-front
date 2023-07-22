import { S, M } from '../Ranking.style';
import NoLike from '../../../assets/rankingpage/heart1.png';
import BlueLike from '../../../assets/rankingpage/heart2.png';
import { useState } from 'react';

//내가 하트를 누른 상태이면 해당 isLike가 true여야 함.
//시간표
const LikeBtn = ({ isMobile, number }) => {
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

    return isMobile ? (
        <M.IconButton>
            {isLike ? (
                <M.CommentIcon
                    src={BlueLike}
                    alt='하트'
                    onClick={onCancelLike}
                />
            ) : (
                <M.CommentIcon src={NoLike} alt='하트' onClick={onGiveLike} />
            )}
            <p>{number}</p>
        </M.IconButton>
    ) : (
        <S.IconButton>
            <S.Icon src={NoLike} alt='하트' />
            <p>{number}</p>
        </S.IconButton>
    );
};
export default LikeBtn;
