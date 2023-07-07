import S from '../Ranking.style';
import OneRanking from '../leftSection/OneRanking';
import { mockData } from '../../../assets/rankingpage/rankMock';
import ButtonContainer from './ButtonContainer';
import CommentList from './CommentList';
import styled from 'styled-components';
import Like from '../../../assets/rankingpage/like.png';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const RightSection = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentUser, setCurrentUser] = useState();
    const currentId = searchParams.get('id');
    //id로 데이터 파싱
    useEffect(() => {
        console.log(currentId);
        const result = mockData.find(data => data.id === currentId / 1);
        console.log('gggg', result);
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
