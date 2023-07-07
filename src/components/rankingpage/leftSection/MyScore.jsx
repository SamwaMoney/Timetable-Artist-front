import styled from 'styled-components';
import { FlexCenter } from '../Ranking.style';

const MyScore = () => {
    return (
        <Wrapper>
            <TextBox>
                <Text>내 점수</Text>
                <RankText>80점</RankText>
            </TextBox>
            <TextBox>
                <Text>내 랭킹</Text>
                <RankText>258위</RankText>
            </TextBox>
        </Wrapper>
    );
};
export default MyScore;

const Wrapper = styled.div`
    margin-top: 27px;
    width: 322px;
    height: 82px;
    border-radius: 20px;
    border: 0.1rem solid var(--black, #171717);
    background: var(--background-green);
    ${FlexCenter};
`;

const TextBox = styled.div`
    margin: 0 20px;
`;

const Text = styled.div`
    color: var(--blue);
    text-align: center;
    font-family: Gothic A1;
    font-size: 14px;
    font-weight: 600;
`;

const RankText = styled.div`
    color: var(--blue);
    text-align: center;
    font-family: Montserrat;
    font-size: 36px;
    font-weight: 600;
`;
