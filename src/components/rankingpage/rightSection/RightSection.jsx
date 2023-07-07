import S from '../Ranking.style';
import OneRanking from '../leftSection/OneRanking';
import { mockData } from '../../../assets/rankingpage/rankMock';
import ButtonContainer from './ButtonContainer';
import CommentList from './CommentList';
import styled from 'styled-components';
import Like from '../../../assets/rankingpage/like.png';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const RightSection = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentUser, setCurrentUser] = useState();
    const currentId = searchParams.get('id');
    const rankList = useSelector(state => state.rankReducer);

    //현재 선택한 유저의 id와 일치하는 데이터를 찾아서 보여주기
    useEffect(() => {
        const result = rankList.find(data => data.id === currentId / 1);
        console.log(result);
        setCurrentUser(result);
    }, [currentId]);

    return (
        <S.Section>
            <OneRanking data={currentUser} index={0} />
            <TimeTable src={Like} alt='사진' />
            <ButtonContainer />
            <CommentList />
        </S.Section>
    );
};

export default RightSection;

const TimeTable = styled.img`
    width: 358px;
    height: 385px;
    background-color: #888;
    border: 1px solid black;
    margin-top: 26px;
`;
