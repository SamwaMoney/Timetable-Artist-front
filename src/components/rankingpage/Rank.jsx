import S from './Ranking.style';
import { styled } from 'styled-components';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const Rank = () => {
    return (
        <Wrapper>
            {/*햄버거 메뉴*/}
            <S.Header></S.Header>
            <LeftSection></LeftSection>
            <RightSection></RightSection>
        </Wrapper>
    );
};

export default Rank;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16.5px;
`;
