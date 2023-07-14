import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import S from '../Ranking.style';

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
            <S.RankContainer>
                <S.RankNum isCurrentUser={isCurrentUser}>{rank}</S.RankNum>
                <S.UserInfo
                    isCurrentUser={isCurrentUser}
                    onClick={() => {
                        onMoveDetail(id);
                    }}
                >
                    <S.NameContainer isCurrentUser={isCurrentUser}>
                        <S.NameText>{nickname}</S.NameText>
                        <S.Score>{score}</S.Score>
                    </S.NameContainer>
                    <S.Category>{category}</S.Category>
                </S.UserInfo>
            </S.RankContainer>
        )
    );
};
export default OneRanking;
