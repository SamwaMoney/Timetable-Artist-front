import { styled } from 'styled-components';
import { FlexCenter } from '../Ranking.style';
import { useSearchParams } from 'react-router-dom';

const OneRanking = ({ data }) => {
    const { id, nickname, score, category, rank } = data ? data : {};
    const [searchParams, setSearchParams] = useSearchParams();
    const currentId = searchParams.get('id') | 1;

    const onMoveDetail = id => {
        searchParams.set('id', id);
        setSearchParams(searchParams);
    };

    return (
        data && (
            <Wrapper>
                <RankNum>{rank}</RankNum>
                <UserInfo
                    onClick={() => {
                        onMoveDetail(id);
                    }}
                >
                    <NameContainer>
                        <NameText>{nickname}</NameText>
                        <Score>{score}</Score>
                    </NameContainer>
                    <Category>{category}</Category>
                </UserInfo>
            </Wrapper>
        )
    );
};
export default OneRanking;

const RankNum = styled.div`
    width: 62px;
    height: 62px;
    border-radius: 50%;
    background-color: white;
    border: 0.1rem solid black;
    ${FlexCenter}
    font-size:36px;
    font-weight: 700;
    font-family: Montserrat;
`;

const UserInfo = styled.div`
    width: 294px;
    height: 60.588px;
    background-color: white;
    border: 0.1rem solid black;
    border-radius: 60px;
    ${FlexCenter}
    position:relative;
`;

const Wrapper = styled.div`
    font-family: Montserrat;
    height: 60.588px;
    ${FlexCenter}
    margin-top:32px;
    width: 361px;
    justify-content: space-between;
`;

const NameContainer = styled.div`
    position: absolute;
    left: 20px;
`;

const Score = styled.div`
    font-size: 17px;
`;

const NameText = styled.div`
    font-size: 12px;
`;

const Category = styled.div`
    width: 180px;

    position: absolute;
    left: 90px;
`;
