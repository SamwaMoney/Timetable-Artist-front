import Hamburger from '../_common/Hamburger';
import MyScore from './leftSection/MyScore';
import TabContainer from './leftSection/Tab';
import RankingList from './leftSection/RankingList';
import { useSearchParams } from 'react-router-dom';
import CommentList from './rightSection/CommentList';
import NewComment from './rightSection/NewComment';
import LikeBtn from './rightSection/LikeBtn';
import CmtTag from './rightSection/CmtTag';
import { S } from './Ranking.style';
import RankUserInfo from './rightSection/RankUserInfo';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RankingApis from '../../api/ranking';
import Loading from '../_common/Loading';
//여기서 mock_ranking을 보여줌
//여기서 랭킹 api를 요청후 뿌려줌
const Rank = ({ isMyData }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const sort = searchParams.get('sort') || 'lowest';
    const navigate = useNavigate();
    //api로 받아온 데이터 관리하는 곳
    const [isLogin, setIsLogin] = useState(false);
    const [rankingData, setRankingData] = useState();
    const [currentUser, setCurrentUser] = useState();
    const memberId = localStorage.getItem('memberId');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setRankingData();
        setLoading(true);
        const fetchData = async sort => {
            const res = await getRankingList(sort, memberId);
            console.log('받아온 랭킹정보', sort, res);
            setRankingData(res?.data);
            setCurrentUser(res?.data[0]);
        };
        fetchData(sort);
        setLoading(false);
    }, [sort]);

    const getRankingList = (sort, memberId) => {
        return RankingApis.GetRanking(sort, memberId);
    };
    return (
        <S.Wrapper>
            <Hamburger />
            {/*랭킹 보여주는 left section*/}
            {loading || !currentUser || !rankingData ? (
                <Loading />
            ) : (
                <S.Container>
                    <S.SmallContainer>
                        {isMyData ? (
                            <MyScore isMobile={false} />
                        ) : isLogin ? (
                            <S.NewButton
                                onClick={() => {
                                    navigate('/create');
                                }}
                                isMobile={false}
                            >
                                시간표 등록하기
                            </S.NewButton>
                        ) : (
                            <S.NewButton
                                isMobile={false}
                                onClick={() => {
                                    navigate('/login');
                                }}
                            >
                                시간표 등록하기
                            </S.NewButton>
                        )}
                        <TabContainer setLoading={setLoading} />
                        <RankingList
                            data={rankingData}
                            currentUser={currentUser}
                            setCurrentUser={setCurrentUser}
                        />
                    </S.SmallContainer>
                    {/*개별 유저 데이터 보여주는 right section*/}
                    <S.SmallContainer>
                        <RankUserInfo data={currentUser} />
                        <S.TimeTable src={currentUser?.tableImg} alt='사진' />
                        {/*버튼 컨테이너*/}
                        <S.ButtonContainer>
                            <LikeBtn
                                number={currentUser?.likeCount}
                                timetableId={currentUser?.timetableId}
                            />
                            <CmtTag number={currentUser?.replyCount} />
                        </S.ButtonContainer>
                        <NewComment currentTableId={currentUser?.timetableId} />
                        <CommentList timetableId={currentUser?.timetableId} />
                    </S.SmallContainer>
                </S.Container>
            )}
        </S.Wrapper>
    );
};

export default Rank;
