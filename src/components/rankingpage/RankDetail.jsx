import { S } from './Ranking.style';
import RankUserInfo from './rightSection/RankUserInfo';
import LikeBtn from './rightSection/LikeBtn';
import CommentList from './rightSection/CommentList';
import CmtTag from './rightSection/CmtTag';
import Timetable from '../../assets/scorepage/timetable.png';
import RightSectionSkeleton from '../../skeleton/RightSectionSkeleton';

const RankDetail = ({
    memberId,
    currentUserId,
    getRankingList,
    currentUser,
    loading,
    rankLoading,
}) => {
    return loading || rankLoading ? (
        <RightSectionSkeleton />
    ) : (
        <S.SmallContainer>
            <RankUserInfo data={currentUser} loading={loading} />
            <S.TimeTable src={Timetable} />
            {/* <S.TimeTable src={currentUser?.tableImg} alt='사진' /> */}
            {/*버튼 컨테이너*/}
            <S.ButtonContainer>
                <LikeBtn
                    currentUser={currentUser}
                    timetableId={currentUserId}
                    getRankingList={getRankingList}
                />
                <CmtTag number={currentUser?.replyCount} />
            </S.ButtonContainer>
            <CommentList
                memberId={memberId}
                currentUserId={currentUserId}
                isMobile={false}
            />
        </S.SmallContainer>
    );
};
export default RankDetail;
