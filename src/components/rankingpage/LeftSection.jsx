import S, { FlexCenter } from './Ranking.style';
import { styled } from 'styled-components';
import TabContainer from './Tab';
import RankingList from './RankingList';

const LeftSection = () => {
    return (
        <S.LeftSection>
            <Header>
                <NewButton>시간표 등록하기</NewButton>
            </Header>
            <TabContainer />
            <RankingList></RankingList>
        </S.LeftSection>
    );
};
export default LeftSection;

const Header = styled.div`
    width: 194px;
`;
const NewButton = styled.div`
    margin-top: 46px;
    width: 194px;
    height: 44px;
    border: 0.1rem solid black;
    font-weight: 500;
    ${FlexCenter}
    color: var(--blue);
    border-radius: 44px;
    background-color: var(--green);
    text-align: center;
    font-size: 14px;
`;
