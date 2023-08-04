import { S } from './Ranking.style';
import RankUserInfo from './rightSection/RankUserInfo';
import LikeBtn from './rightSection/LikeBtn';
import CommentList from './rightSection/CommentList';
import CmtTag from './rightSection/CmtTag';
import Timetable from '../../assets/scorepage/timetable.png';
import RightSectionSkeleton from '../../skeleton/RightSectionSkeleton';
import { useState, useEffect } from 'react';
const RankDetail = ({
    memberId,
    currentUserId,
    getRankingList,
    setLoading,
    // currentUser,
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

    useEffect(() => {
        console.log('currentUserId', currentUserId);
        setLoading(false);
    }, [currentUser]);

    console.log('imgUrl', currentUser?.photo);
    return loading || rankLoading ? (
        <RightSectionSkeleton />
    ) : (
        <S.SmallContainer>
            <RankUserInfo data={currentUser} loading={loading} />
            {/* <S.TimeTable src={Timetable} /> */}
            <S.TimeTable src={currentUser?.imgUrl} alt='사진' />
            {/*버튼 컨테이너*/}
            <S.ButtonContainer>
                <LikeBtn
                    currentUser={currentUser}
                    timetableId={currentUserId}
                    getRankingList={getRankingList}
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
