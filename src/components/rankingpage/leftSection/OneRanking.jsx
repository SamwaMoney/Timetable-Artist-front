import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { S, M } from '../Ranking.style';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';

const OneRanking = ({ data, isMobile }) => {
    const { id, nickname, score, category, rank, tableImg } = data ? data : {};
    const [searchParams, setSearchParams] = useSearchParams();
    const currentId = searchParams.get('id') | 1;
    const [isCurrentUser, setIsCurrentUser] = useState();
    const [isShowTimeTable, setIsShowTimeTable] = useState(false);

    //디테일 페이지 이동(웹)
    const onMoveDetail = id => {
        searchParams.set('id', id);
        setSearchParams(searchParams);
    };

    //시간표 보기(모바일)
    const onShowTimeTable = () => {
        setIsShowTimeTable(prev => !prev);
    };

    useEffect(() => {
        if (currentId === id) {
            setIsCurrentUser(true);
        } else {
            setIsCurrentUser(false);
        }
    }, [id, currentId, isCurrentUser]);

    return isMobile ? (
        <>
            <M.RankContainer>
                <M.RankNum isCurrentUser={isCurrentUser}>{rank}</M.RankNum>
                <M.UserInfo
                    isCurrentUser={isCurrentUser}
                    onClick={() => {
                        onShowTimeTable();
                    }}
                >
                    <M.Score>{score}점</M.Score>
                    <M.CategoryContainer>
                        <M.Category>{category}</M.Category>
                        <M.Nickname>{nickname}</M.Nickname>
                    </M.CategoryContainer>
                    {isShowTimeTable ? (
                        <div style={{ position: 'absolute', right: 40 }}>
                            <AiOutlineCaretUp size={40} color={`var(--blue)`} />
                        </div>
                    ) : (
                        <div style={{ position: 'absolute', right: 40 }}>
                            <AiOutlineCaretDown
                                size={40}
                                color={`var(--blue)`}
                            />
                        </div>
                    )}
                </M.UserInfo>
            </M.RankContainer>
            {isShowTimeTable ? <S.TimeTable src={tableImg} alt='사진' /> : null}
        </>
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
            <S.TimeTable src={tableImg} alt='사진' />
        </>
    );
};
export default OneRanking;
