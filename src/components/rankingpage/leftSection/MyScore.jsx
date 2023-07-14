import { S } from '../Ranking.style';
import { M } from '../Ranking.style';
const MyScore = ({ isMobile }) => {
    console.log('isMobile', isMobile);
    return isMobile ? (
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
