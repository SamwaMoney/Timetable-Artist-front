import Hamburger from '../_common/Hamburger';
import MyScore from './leftSection/MyScore';
import TabContainer from './leftSection/Tab';
import RankingList from './leftSection/RankingList';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import CommentList from './rightSection/CommentList';
import TimeTableImg from '../../assets/scorepage/timetable.png';
import NewComment from './rightSection/NewComment';
import OneRanking from './leftSection/OneRanking';
import NewButton from './leftSection/NewButton';
import CommentButton from './rightSection/CmtButton';
import HeartButton from './rightSection/HeartButton';
import { S } from './Ranking.style';

const Rank = ({ isMyData }) => {
    // const [isMyData, setIsMyData] = useState(true);

    //right secton 로직isMyData={isMyData}
    const [searchParams, setSearchParams] = useSearchParams();
    const rankList = useSelector(state => state.rankReducer);
    const [currentUser, setCurrentUser] = useState();
    const currentId = searchParams.get('id') || rankList[0].id;

    //현재 선택한 유저의 id와 일치하는 데이터를 찾아서 보여주기
    useEffect(() => {
        const result = rankList.find(data => data.id === currentId / 1);
        setCurrentUser(result);
    }, [currentId]);

    return (
        <S.Wrapper>
            <Hamburger />
            {/*랭킹 보여주는 left section*/}
            <S.Container>
                <S.SmallContainer>
                    {isMyData ? <MyScore /> : <NewButton isMyData={isMyData} />}
                    <TabContainer />
                    <RankingList />
                </S.SmallContainer>
                {/*개별 유저 데이터 보여주는 right section*/}
                {currentUser && (
                    <S.SmallContainer>
                        <OneRanking data={currentUser} />
                        <S.TimeTable src={TimeTableImg} alt='사진' />
                        {/*버튼 컨테이너*/}
                        <S.ButtonContainer>
                            <HeartButton />
                            <CommentButton />
                        </S.ButtonContainer>
                        <NewComment />
                        <CommentList />
                    </S.SmallContainer>
                )}
            </S.Container>
        </S.Wrapper>
    );
};

export default Rank;
