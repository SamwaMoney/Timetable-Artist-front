import S from '../Ranking.style';

const MyScore = () => {
    return (
        <S.MyScoreContainer>
            <S.TextBox>
                <S.Text>내 점수</S.Text>
                <S.RankText>80점</S.RankText>
            </S.TextBox>
            <S.TextBox>
                <S.Text>내 랭킹</S.Text>
                <S.RankText>258위</S.RankText>
            </S.TextBox>
        </S.MyScoreContainer>
    );
};
export default MyScore;
