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
import { mock_ranking } from '../../_mock/ranking';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//여기서 mock_ranking을 보여줌
//여기서 랭킹 api를 요청후 뿌려줌
const Rank = ({ isMyData }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const sort = searchParams.get('sort') || 'lowest';
    const navigate = useNavigate();
    //api로 받아온 데이터 관리하는 곳
    const [data, setData] = useState(mock_ranking);
    const [isLogin, setIsLogin] = useState(false);
    const [currentUser, setCurrentUser] = useState(mock_ranking[0]);

    useEffect(() => {
        //랭킹보드 불러오는 로직 (sort에 따라 바뀜)
    }, [sort]);

    return (
        <S.Wrapper>
            <Hamburger />
            {/*랭킹 보여주는 left section*/}
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
                    <TabContainer />
                    <RankingList
                        data={data}
                        currentUser={currentUser}
                        setCurrentUser={setCurrentUser}
                    />
                </S.SmallContainer>
                {/*개별 유저 데이터 보여주는 right section*/}
                <S.SmallContainer>
                    <RankUserInfo data={currentUser} />
                    <S.TimeTable src={currentUser.tableImg} alt='사진' />
                    {/*버튼 컨테이너*/}
                    <S.ButtonContainer>
                        <LikeBtn number={currentUser.likeCount} />
                        <CmtTag number={currentUser.replyCount} />
                    </S.ButtonContainer>
                    <NewComment />
                    <CommentList timetableId={currentUser.timetableId} />
                </S.SmallContainer>
            </S.Container>
        </S.Wrapper>
    );
};

export default Rank;
