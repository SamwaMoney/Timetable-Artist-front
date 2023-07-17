import { styled } from 'styled-components';
import { FlexCenter } from '../rankingpage/Ranking.style';
import { S } from '../rankingpage/Ranking.style';
const Error = () => {
    return (
        <S.Container>
            <LoadingWrapper>
                <Emoticon> ( ŏ̥̥̥̥ ם ŏ̥̥̥̥ ) </Emoticon>
                <Text>에러가 발생했습니다!</Text>
            </LoadingWrapper>
        </S.Container>
    );
};
export default Error;

const LoadingWrapper = styled.div`
    width: 100%;
    height: 100%;
    border: 0.1rem solid black;
    background: linear-gradient(to bottom, #e2e2e2, #ffa1a1);
    ${FlexCenter}
    flex-direction:column;
`;

const Emoticon = styled.div`
    font-size: 2vw;
    padding-bottom: 4vw;
`;

const Text = styled.div`
    font-size: 2vw;
`;
