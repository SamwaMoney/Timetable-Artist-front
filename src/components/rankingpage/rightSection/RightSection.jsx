import S from '../Ranking.style';
import OneRanking from '../leftSection/OneRanking';
import { mockData } from '../../../assets/rankingpage/rankMock';
import ButtonContainer from './ButtonContainer';
import CommentList from './CommentList';
import styled from 'styled-components';
import Like from '../../../assets/rankingpage/like.png';

const RightSection = () => {
    return (
        <S.Section>
            <OneRanking data={mockData[0]} index={0} />
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
