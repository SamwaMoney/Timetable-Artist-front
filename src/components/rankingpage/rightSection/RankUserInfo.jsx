import { styled } from 'styled-components';
import { FlexCenter } from '../Ranking.style';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const RankUserInfo = ({ currentUser }) => {
    return (
        currentUser && (
            <Wrapper>
                <RankNum>1</RankNum>
                <UserInfo>
                    <NameContainer>
                        <NameText>{currentUser.name}</NameText>
                        <Score>{currentUser.score}</Score>
                    </NameContainer>
                    <Category>{currentUser.category}</Category>
                </UserInfo>
            </Wrapper>
        )
    );
};
export default RankUserInfo;

const RankNum = styled.div`
    width: 62px;
    height: 62px;
    border-radius: 50%;
    background-color: var(--green);
    border: 0.1rem solid var(--blue);
    ${FlexCenter}
    font-size:36px;
    font-weight: 700;
    font-family: Montserrat;
`;

const UserInfo = styled.div`
    width: 294px;
    height: 60.588px;
    background-color: var(--green);
    border: 0.1rem solid var(--blue);
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
