import { S } from './Ranking.style';
import RankUserInfo from './rightSection/RankUserInfo';
import LikeBtn from './rightSection/LikeBtn';
import CommentList from './rightSection/CommentList';
import CmtTag from './rightSection/CmtTag';
import Timetable from '../../assets/scorepage/timetable.png';
import RightSectionSkeleton from '../../skeleton/RightSectionSkeleton';
import { useState } from 'react';
const RankDetail = ({
    memberId,
    currentUserId,
    getRankingList,
    currentUser,
    loading,
    rankLoading,
    getDetailData,
}) => {
    const [commentNum, setCommentNum] = useState();
    console.log('imgUrl', currentUser?.photo);
    return loading || rankLoading ? (
        <RightSectionSkeleton />
    ) : (
        <S.SmallContainer>
            <RankUserInfo data={currentUser} loading={loading} />
            <S.TimeTable src={Timetable} />
            {/* <S.TimeTable src={currentUser?.photo} alt='사진' /> */}
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
