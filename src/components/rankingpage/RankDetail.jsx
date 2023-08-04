import { S } from './Ranking.style';
import RankUserInfo from './rightSection/RankUserInfo';
import LikeBtn from './rightSection/LikeBtn';
import CommentList from './rightSection/CommentList';
import CmtTag from './rightSection/CmtTag';
import RightSectionSkeleton from '../../skeleton/RightSectionSkeleton';
import { useState, useEffect } from 'react';
import AltTableImg from '../../assets/_common/altTable.png';

const RankDetail = ({
    memberId,
    currentUserId,
    getRankingList,
    setLoading,
    setRankingData,
    loading,
    rankLoading,
    getDetailData,
}) => {
    const [currentUser, setCurrentUser] = useState();
    const [commentNum, setCommentNum] = useState();

    useEffect(() => {
        setCommentNum();
        setCurrentUser();
        const fetchDetailData = async timetableId => {
            const res = await getDetailData(timetableId, memberId);
            setCurrentUser(res?.data);
        };
        fetchDetailData(currentUserId);
        setLoading(false);
    }, [currentUserId]);

    return loading || rankLoading ? (
        <RightSectionSkeleton />
    ) : (
        <S.SmallContainer>
            <RankUserInfo data={currentUser} loading={loading} />
            <S.TimeTable src={currentUser?.imgUrl || AltTableImg} />
            <S.ButtonContainer>
                <LikeBtn
                    currentUser={currentUser}
                    timetableId={currentUserId}
                    getRankingList={getRankingList}
                    setRankingData={setRankingData}
                />
                <CmtTag number={commentNum} />
            </S.ButtonContainer>
            <CommentList
                memberId={memberId}
                currentUserId={currentUserId}
                isMobile={false}
                setCommentNum={setCommentNum}
                getDetailData={getDetailData}
            />
        </S.SmallContainer>
    );
};
export default RankDetail;
