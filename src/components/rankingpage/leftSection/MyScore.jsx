import { S, M } from '../Ranking.style';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

//로그인 + 시간표 채점 정보가 있을때 생김
//점수 랭킹 조회 => 내 id와 일치하는 객체의 ranking을 가져와서 보여주기

const MyScore = ({ isMobile }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const sort = searchParams.get('sort') || 'lowest';

    useEffect(() => {
        //내 순위 검색하는 api 로직 => sort가 바뀌면 실행
    }, [sort]);

    //내 점수는 전역 상태로 관리해서 가져오기 => redux
    return isMobile ? (
        <M.MyScoreWrapper>
            <M.MyScoreContainer>
                <M.FlexBox>
                    <M.Text>내 점수</M.Text>
                    <M.RankText>80점</M.RankText>
                </M.FlexBox>
                <M.FlexBox>
                    <M.Text>내 랭킹</M.Text>
                    <M.RankText>258위</M.RankText>
                </M.FlexBox>
            </M.MyScoreContainer>
        </M.MyScoreWrapper>
    ) : (
        <S.MyScoreContainer>
            <S.FlexBox>
                <S.Text>내 점수</S.Text>
                <S.RankText>80점</S.RankText>
            </S.FlexBox>
            <S.FlexBox>
                <S.Text>내 랭킹</S.Text>
                <S.RankText>258위</S.RankText>
            </S.FlexBox>
        </S.MyScoreContainer>
    );
};
export default MyScore;
