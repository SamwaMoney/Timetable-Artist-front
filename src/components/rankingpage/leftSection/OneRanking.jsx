import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { S, M } from '../Ranking.style';
import HeartButton from '../rightSection/HeartButton';
import CommentButton from '../rightSection/CmtButton';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';

//선택된 user의 id와 일치하면 해당 유저의 랭킹 색을 초록색으로 바꿔줘야 함
//받아온 data의 첫번쨰 유저가 default => 클릭할떄마다 바뀜
const OneRanking = ({ data, isMobile, setCurrentUser }) => {
    const navigate = useNavigate();

    //받아온 데이터에 해당 프로퍼티를 꺼내줌
    const { timetableId, owner, score, tableType, ranking, tableImg } = data;

    const [searchParams, setSearchParams] = useSearchParams();
    const [isShowTimeTable, setIsShowTimeTable] = useState(false);

    const sort = searchParams.get('sort') || 'lowest';

    //디테일 페이지 이동(웹)
    const onMoveDetail = id => {
        setCurrentUser(data);
    };

    //디테일 페이지 이동(모바일)
    const onMoveMDetail = timetableId => {
        navigate(`/ranking/detail/${timetableId}?rank=${ranking}`);
    };

    //시간표 보기(모바일)
    const onShowTimeTable = () => {
        setIsShowTimeTable(prev => !prev);
    };

    return isMobile ? (
        <>
            <M.OneRankWrapper>
                <M.RankContainer>
                    <M.RankNum>{ranking}</M.RankNum>
                    <M.UserInfo
                        onClick={() => {
                            onShowTimeTable();
                        }}
                    >
                        <M.Score>{score}점</M.Score>
                        <M.CategoryContainer>
                            <M.Category>{tableType}</M.Category>
                            <M.Nickname>{owner}</M.Nickname>
                        </M.CategoryContainer>
                        {isShowTimeTable ? (
                            <div style={{ position: 'absolute', right: 12 }}>
                                <AiOutlineCaretUp
                                    size={10}
                                    color={`var(--blue)`}
                                />
                            </div>
                        ) : (
                            <div style={{ position: 'absolute', right: 12 }}>
                                <AiOutlineCaretDown
                                    size={15}
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
                                onMoveMDetail(timetableId);
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
                <S.RankNum>{ranking}</S.RankNum>
                <S.UserInfo
                    onClick={() => {
                        onMoveDetail(timetableId);
                    }}
                >
                    <S.Score>{score}점</S.Score>
                    <S.CategoryContainer>
                        <S.Category>{tableType}</S.Category>
                        <S.Nickname>{owner}</S.Nickname>
                    </S.CategoryContainer>
                </S.UserInfo>
            </S.RankContainer>
        </>
    );
};

export default OneRanking;
