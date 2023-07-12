import S from '../Ranking.style';

const RankUserInfo = ({ currentUser }) => {
    const isCurrentUser = true;
    return (
        <S.RankUserContainer>
            <S.RankNum isCurrentUser={isCurrentUser}>1</S.RankNum>
            <S.UserInfo isCurrentUser={isCurrentUser}>
                <S.NameContainer>
                    <S.NameText>{currentUser.name}</S.NameText>
                    <S.Score>{currentUser.score}</S.Score>
                </S.NameContainer>
                <S.RankUserName>{currentUser.nickname}</S.RankUserName>
            </S.UserInfo>
        </S.RankUserContainer>
    );
};
export default RankUserInfo;
