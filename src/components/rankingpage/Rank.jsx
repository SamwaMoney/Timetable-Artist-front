import S from './Ranking.style';
import Hamburger from '../_common/Hamburger';
import { useState } from 'react';
import MyScore from './leftSection/MyScore';
import TabContainer from './leftSection/Tab';
import RankingList from './leftSection/RankingList';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import RankUserInfo from './rightSection/RankUserInfo';
import CommentList from './rightSection/CommentList';
import TimeTableImg from '../../assets/scorepage/timetable.png';
import Like from '../../assets/rankingpage/like.png';
import Comment from '../../assets/rankingpage/comment.png';

const Rank = () => {
    const [isMyData, setIsMyData] = useState(true);

    //right secton 로직
    const [searchParams, setSearchParams] = useSearchParams();
    const rankList = useSelector(state => state.rankReducer);
    const [currentUser, setCurrentUser] = useState();
    const currentId = searchParams.get('id') || 1;

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
                    <S.Header>
                        {isMyData ? (
                            <MyScore />
                        ) : (
                            <S.NewButton>시간표 등록하기</S.NewButton>
                        )}
                    </S.Header>
                    <TabContainer />
                    <RankingList></RankingList>
                </S.SmallContainer>
                {/*개별 유저 데이터 보여주는 right section*/}
                <S.SmallContainer>
                    <RankUserInfo currentUser={currentUser} />
                    <S.TimeTable src={TimeTableImg} alt='사진' />
                    {/*버튼 컨테이너*/}
                    <S.ButtonContainer>
                        <S.IconButton>
                            <img src={Like} alt='하트' />
                            11
                        </S.IconButton>
                        <S.IconButton>
                            <img src={Comment} alt='댓글' />
                            11
                        </S.IconButton>
                    </S.ButtonContainer>
                    <CommentList />
                </S.SmallContainer>
            </S.Container>
        </S.Wrapper>
    );
};

export default Rank;
