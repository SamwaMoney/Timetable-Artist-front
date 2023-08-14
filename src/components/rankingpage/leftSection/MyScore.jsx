import { S, M } from '../Ranking.style';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const MyScore = ({ isMobile, datas }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const sort = searchParams.get('sort') || 'LOWEST';
    const [myScore, setMyScore] = useState();
    const [myRanking, setMyRanking] = useState();
    const timetableId = localStorage.getItem('tableId') || -1;

    const score = useSelector(state => state.myInfoReducer);

    //내 점수랑 랭킹 업데이트
    useEffect(() => {
        setMyRanking('-');
        setMyScore('-');
        if (datas) {
            datas.forEach((data, index) => {
                if (data.timetableId / 1 === timetableId / 1) {
                    setMyScore(data.score);
                    return setMyRanking(index + 1);
                }
            });
        }
    }, [sort, datas, timetableId]);

    return isMobile ? (
        <M.MyScoreWrapper>
            <M.MyScoreContainer>
                <S.FlexBox>
                    <M.Text>내 점수</M.Text>
                    {myScore && (
                        <M.RankText>{score?.myScore || myScore}점</M.RankText>
                    )}
                </S.FlexBox>
                <S.FlexBox>
                    <M.Text>내 랭킹</M.Text>
                    <M.RankText>{myRanking}위</M.RankText>
                </S.FlexBox>
            </M.MyScoreContainer>
        </M.MyScoreWrapper>
    ) : (
        <S.MyScoreContainer>
            <S.FlexBox>
                <S.Text>내 점수</S.Text>
                {myScore && (
                    <S.RankText>{score.myScore || myScore}점</S.RankText>
                )}
            </S.FlexBox>
            <S.FlexBox>
                <S.Text>내 랭킹</S.Text>
                <S.RankText>{myRanking}위</S.RankText>
            </S.FlexBox>
        </S.MyScoreContainer>
    );
};
export default MyScore;
