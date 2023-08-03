import { S, M } from '../Ranking.style';
import NoLike from '../../../assets/rankingpage/heart1.png';
import YesLike from '../../../assets/rankingpage/heart2.png';
import { useState, useEffect } from 'react';
import RankingApis from '../../../api/ranking';
import { useLocation } from 'react-router-dom';
//내가 하트를 누른 상태이면 해당 isLike가 true여야 함.
//시간표
const LikeBtn = ({ isMobile, timetableId, currentUser, getRankingList }) => {
    const [isLike, setIsLike] = useState(currentUser?.liked);
    const [likeNum, setLikeNum] = useState(currentUser?.likeCount);

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const sort = params.get('sort') || 'LOWEST';

    const memberId = localStorage.getItem('memberId') || -1;

    useEffect(() => {
        console.log('좋아요 여부', isLike);
        console.log('좋아요 여부 바뀜', likeNum);
    }, [currentUser]);

    //좋아요 누르기 (낙관적 업데이트)
    const onGiveLike = async () => {
        if (memberId === -1) {
            return alert('로그인이 필요한 기능입니다.');
        }
        setIsLike(true);
        setLikeNum(prev => prev + 1);
        const res = await RankingApis.PostTimeTableLike(timetableId, memberId);
        console.log('좋아요 기능', res);
        //서버 요청 실패시 롤백
        if (res?.status !== 201) {
            setIsLike(false);
            setLikeNum(prev => prev - 1);
        } else {
            setIsLike(true);
            if (sort === 'LIKE') {
                getRankingList(sort, memberId);
            }
        }
    };

    //좋아요 취소
    const onCancelLike = async () => {
        setIsLike(false);
        setLikeNum(prev => prev - 1);
        const res = await RankingApis.DeleteTimeTableLike(
            timetableId,
            memberId,
        );
        console.log('좋아요 취소 결과', res?.status);
        //서버 요청 실패시 롤백
        if (res?.status !== 200) {
            setIsLike(true);
            setLikeNum(prev => prev + 1);
        } else {
            setIsLike(false);
            if (sort === 'LIKE') {
                getRankingList(sort, memberId);
            }
        }
    };

    return isMobile ? (
        <M.IconButton>
            {isLike ? (
                <S.EventIcon
                    width={2}
                    src={YesLike}
                    alt='하트'
                    onClick={onCancelLike}
                />
            ) : (
                <S.EventIcon
                    width={2}
                    src={NoLike}
                    alt='하트'
                    onClick={onGiveLike}
                />
            )}
            <p>{likeNum}</p>
        </M.IconButton>
    ) : (
        currentUser && (
            <S.IconButton>
                {isLike ? (
                    <S.EventIcon
                        width={2}
                        src={YesLike}
                        alt='하트'
                        onClick={onCancelLike}
                    />
                ) : (
                    <>
                        <S.EventIcon
                            width={2}
                            src={NoLike}
                            alt='하트'
                            onClick={onGiveLike}
                        />
                    </>
                )}
                <p>{likeNum}</p>
            </S.IconButton>
        )
    );
};
export default LikeBtn;
