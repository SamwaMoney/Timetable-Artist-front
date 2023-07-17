import { styled } from 'styled-components';
import { FlexCenter } from '../rankingpage/Ranking.style';
const MError = () => {
    return (
        <Wrapper>
            <ErrorWrapper>
                <Emoticon>( ŏ̥̥̥̥ ם ŏ̥̥̥̥ )</Emoticon>
                <Text>에러가 발생했습니다!</Text>
            </ErrorWrapper>
        </Wrapper>
    );
};

export default MError;
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;
const ErrorWrapper = styled.div`
    height: 100vh;
    width: 100%;
    background: linear-gradient(to bottom, #e2e2e2, #ffa1a1);
    ${FlexCenter}
    flex-direction: column;
`;
const Emoticon = styled.div`
    font-size: 6vw;
    padding-bottom: 12vw;
`;

const Text = styled.div`
    font-size: 6vw;
    font-weight: 500;
`;
