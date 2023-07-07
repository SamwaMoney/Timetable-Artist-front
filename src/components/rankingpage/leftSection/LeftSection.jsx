import { FlexCenter } from '../Ranking.style';
import S from '../Ranking.style';
import { styled } from 'styled-components';
import TabContainer from './Tab';
import RankingList from './RankingList';
import { useState } from 'react';
import MyScore from './MyScore';

const LeftSection = () => {
    //false일 때 시간표 등록하기 버튼, true일 떄는 내 점수 나옴.
    const [isMyData, setIsMyData] = useState(true);
    return (
        <S.Section>
            <Header>
                {isMyData ? (
                    <MyScore />
                ) : (
                    <NewButton>시간표 등록하기</NewButton>
                )}
            </Header>
            <TabContainer />
            <RankingList></RankingList>
        </S.Section>
    );
};
export default LeftSection;

const Header = styled.div`
    ${FlexCenter}
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
