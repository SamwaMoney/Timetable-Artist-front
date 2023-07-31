import { S } from './Ranking.style';
import RankUserInfo from './rightSection/RankUserInfo';
import LikeBtn from './rightSection/LikeBtn';
import CommentList from './rightSection/CommentList';
import CmtTag from './rightSection/CmtTag';
import { useEffect, useState } from 'react';
import RankingApis from '../../api/ranking';
import Timetable from '../../assets/scorepage/timetable.png';

const RankDetail = ({ memberId, currentUserId,getRankingList }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async timetableId => {
            const res = await getDetailData(timetableId);
            setCurrentUser(res?.data);
        };
        fetchData(currentUserId);
        console.log('+++++++개별 데이터 불러옴');
        setLoading(false);
    }, [currentUserId]);

    //현재 선택한 유저 api
    const getDetailData = timetableId => {
        return RankingApis.GetOneRankingDetail(timetableId);
    };

    return (
        currentUser && (
            <S.SmallContainer>
                <RankUserInfo data={currentUser} loading={loading}/>
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
                />
            </S.SmallContainer>
        )
    );
};
export default RankDetail;
