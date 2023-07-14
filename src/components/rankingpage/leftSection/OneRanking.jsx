import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import S from '../Ranking.style';
import TimeTableImg from '../../../assets/scorepage/timetable.png';

const OneRanking = ({ data }) => {
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

    return (
        data && (
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
        )
    );
};
export default OneRanking;
