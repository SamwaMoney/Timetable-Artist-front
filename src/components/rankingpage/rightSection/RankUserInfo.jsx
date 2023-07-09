import { styled } from 'styled-components';
import { FlexCenter } from '../Ranking.style';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import S from '../Ranking.style';

const RankUserInfo = ({ currentUser }) => {
    return (
        currentUser && (
            <S.RankUserContainer>
                <S.RankNum>1</S.RankNum>
                <S.UserInfo>
                    <S.NameContainer>
                        <S.NameText>{currentUser.name}</S.NameText>
                        <S.Score>{currentUser.score}</S.Score>
                    </S.NameContainer>
                    <S.Category>{currentUser.category}</S.Category>
                </S.UserInfo>
            </S.RankUserContainer>
        )
    );
};
export default RankUserInfo;
