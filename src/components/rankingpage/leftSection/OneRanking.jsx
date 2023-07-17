import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { S, M } from '../Ranking.style';
import HeartButton from '../rightSection/HeartButton';
import CommentButton from '../rightSection/CmtButton';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';

//선택된 user의 id와 일치하면 해당 유저의 랭킹 색을 초록색으로 바꿔줘야 함
const OneRanking = ({ data, isMobile }) => {
    const { id, nickname, score, category, rank, tableImg } = data ? data : {};
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const currentId = searchParams.get('id') | 1;
    const [isCurrentUser, setIsCurrentUser] = useState();
    const [currentSort, setCurrentSort] = useState('worst');
    const [isShowTimeTable, setIsShowTimeTable] = useState(false);

    const sort = searchParams.get('sort');

    //정렬대로 sort를 바꿔줌
    useEffect(() => {
        setCurrentSort(sort);
    }, [sort, currentSort]);

    //디테일 페이지 이동(웹)
    const onMoveMDetail = id => {
        navigate(`/ranking/detail/${id}?rank=${rank}`);
    };

    //디테일 페이지 이동(모바일)
    const onMoveDetail = id => {
        searchParams.set('id', id);
        setSearchParams(searchParams);
    };

    //시간표 보기(모바일)
    const onShowTimeTable = () => {
        setIsShowTimeTable(prev => !prev);
    };

    // useEffect(() => {
    //     if (currentId === id) {
    //         setIsCurrentUser(true);
    //     } else {
    //         setIsCurrentUser(false);
    //     }
    // }, [id, currentId, isCurrentUser]);

    //모바일 페이지 timeTable hover했을 떄 디테일 페이지로 이동 가능
    return isMobile ? (
        <>
            <M.OneRankWrapper>
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
                            <div style={{ position: 'absolute', right: 30 }}>
                                <AiOutlineCaretUp
                                    size={40}
                                    color={`var(--blue)`}
                                />
                            </div>
                        ) : (
                            <div style={{ position: 'absolute', right: 30 }}>
                                <AiOutlineCaretDown
                                    size={40}
                                    color={`var(--blue)`}
                                />
                            </div>
                        )}
                    </M.UserInfo>
                </M.RankContainer>
                {isShowTimeTable ? (
                    <M.TimeTableWrapper>
                        <S.TimeTable
                            src={tableImg}
                            alt='사진'
                            onClick={() => {
                                onMoveMDetail(id);
                            }}
                        />
                        <M.ButtonContainer>
                            <HeartButton isMobile={true} />
                            <CommentButton isMobile={true} />
                        </M.ButtonContainer>
                    </M.TimeTableWrapper>
                ) : null}
            </M.OneRankWrapper>
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
        </>
    );
};

export default OneRanking;
