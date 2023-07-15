import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { S, M } from '../Ranking.style';
import TimeTableImg from '../../../assets/scorepage/timetable.png';
import HeartButton from '../rightSection/HeartButton';
import CommentButton from '../rightSection/CmtButton';

const OneRanking = ({ data, isMobile }) => {
    const { id, nickname, score, category, rank } = data ? data : {};
    const [searchParams, setSearchParams] = useSearchParams();
    const currentId = searchParams.get('id') | 1;
    const [isCurrentUser, setIsCurrentUser] = useState();
    const onMoveDetail = id => {
        searchParams.set('id', id);
        setSearchParams(searchParams);
    };

    useEffect(() => {
        if (currentId === id) {
            setIsCurrentUser(true);
        } else {
            setIsCurrentUser(false);
        }
    }, [id, currentId, isCurrentUser]);

    return isMobile ? (
        <M.OneRankWrapper>
            <M.RankContainer>
                <M.RankNum isCurrentUser={isCurrentUser}>{rank}</M.RankNum>
                <M.UserInfo
                    isCurrentUser={isCurrentUser}
                    onClick={() => {
                        onMoveDetail(id);
                    }}
                >
                    <M.Score>{score}점</M.Score>
                    <M.CategoryContainer>
                        <M.Category>{category}</M.Category>
                        <M.Nickname>{nickname}</M.Nickname>
                    </M.CategoryContainer>
                </M.UserInfo>
            </M.RankContainer>
            <S.TimeTable src={TimeTableImg} alt='사진' />
            <M.ButtonContainer>
                <HeartButton />
                <CommentButton />
            </M.ButtonContainer>
        </M.OneRankWrapper>
    ) : (
        <>
            <S.RankContainer>
                <S.RankNum isCurrentUser={isCurrentUser}>{rank}</S.RankNum>
                <S.UserInfo
                    isCurrentUser={isCurrentUser}
                    onClick={() => {
                        onMoveDetail(id);
                    }}
                >
                    <S.Score>{score}점</S.Score>
                    <S.CategoryContainer>
                        <S.Category>{category}</S.Category>
                        <S.Nickname>{nickname}</S.Nickname>
                    </S.CategoryContainer>
                </S.UserInfo>
            </S.RankContainer>
            <S.TimeTable src={TimeTableImg} alt='사진' />
        </>
    );
};
export default OneRanking;
