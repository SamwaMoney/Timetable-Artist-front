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
    width: 3.9rem;
    height: 3.9rem;
    border-radius: 50%;
    background-color: white;
    border: 0.1rem solid black;
    ${FlexCenter}
    font-size:36px;
    font-weight: 700;
    font-family: Montserrat;
`;

const UserInfo = styled.div`
    width: 18.4rem;
    height: 3.8rem;
    background-color: white;
    border: 0.1rem solid black;
    border-radius: 60px;
    ${FlexCenter}
    position:relative;
`;

const Wrapper = styled.div`
    font-family: Montserrat;
    width: 33.38rem;
    margin-top: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
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
