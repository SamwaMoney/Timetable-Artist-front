import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { S, M } from '../Ranking.style';
import CmtTag from '../rightSection/CmtTag';
import LikeTag from '../rightSection/LikeTag';
import AltTableImg from '../../../assets/_common/altTable.png';

const OneRanking = ({
    data,
    isMobile,
    index,
    currentUserId,
    setCurrentUserId,
}) => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    //현재 선택된 유저인지(웹)
    const [iscurrentuser, setIsCurrentUser] = useState(false);

    //현재 시간표를 보여주고 있는지(모바일)
    const [isshowtimetable, setIsShowTimeTable] = useState(
        index === 0 ? true : false,
    );

    const [commentCount, setCommentCount] = useState(0);

    //받아온 데이터에 해당 프로퍼티를 꺼내줌
    const {
        timetableId,
        username,
        score,
        tableTypeContent,
        imgUrl,
        likeCount,
        liked,
    } = data ? data : null;

    useEffect(() => {
        if (currentUserId === timetableId) {
            setIsCurrentUser(true);
        } else {
            setIsCurrentUser(false);
        }
    }, [iscurrentuser, currentUserId, timetableId]);

    useEffect(() => {
        setCommentCount(data?.replyCount);
    }, [data]);

    //디테일 페이지 이동(웹)
    const onMoveDetail = () => {
        setCurrentUserId(data.timetableId);
        searchParams.set('rank', index + 1);
        setSearchParams(searchParams);
    };

    //디테일 페이지 이동(모바일)
    const onMoveMDetail = (timetableId, index) => {
        navigate(`/ranking/detail/${timetableId}?rank=${index + 1}`);
    };

    //시간표 보기(모바일)
    const onShowTimeTable = () => {
        setIsShowTimeTable(prev => !prev);
    };

    return isMobile ? (
        <>
            <M.OneRankWrapper>
                <M.RankContainer>
                    <M.RankNum isshowtimetable={isshowtimetable.toString()}>
                        {index + 1}
                    </M.RankNum>
                    <M.UserInfo
                        onClick={() => {
                            onShowTimeTable();
                        }}
                        isshowtimetable={isshowtimetable.toString()}
                    >
                        <M.Score>{score}점</M.Score>
                        <M.CategoryContainer>
                            <M.Category>
                                {tableTypeContent || '유형 정보 없음'}
                            </M.Category>
                            <M.Nickname>{username}</M.Nickname>
                        </M.CategoryContainer>
                    </M.UserInfo>
                </M.RankContainer>
                {isshowtimetable ? (
                    <>
                        <M.TimeTableWrapper>
                            <S.TimeTable
                                src={imgUrl || AltTableImg}
                                alt='사진'
                                onClick={() => {
                                    onMoveMDetail(timetableId, index);
                                }}
                            />
                        </M.TimeTableWrapper>
                        <M.ButtonContainer>
                            <LikeTag
                                number={likeCount}
                                liked={liked}
                                timetableId={timetableId}
                                index={index}
                            />
                            <CmtTag
                                number={commentCount}
                                isMobile={true}
                                timetableId={timetableId}
                                index={index}
                            />
                        </M.ButtonContainer>
                    </>
                ) : null}
            </M.OneRankWrapper>
        </>
    ) : (
        <>
            <S.RankContainer top={2}>
                <S.RankNum iscurrentuser={iscurrentuser.toString()}>
                    {index + 1}
                </S.RankNum>
                <S.UserInfo
                    iscurrentuser={iscurrentuser.toString()}
                    onClick={() => {
                        onMoveDetail(timetableId);
                    }}
                >
                    <S.Score>{score}점</S.Score>
                    <S.CategoryContainer>
                        <S.Category>
                            {tableTypeContent || '유형 정보 없음'}
                        </S.Category>
                        <S.Nickname>{username}</S.Nickname>
                    </S.CategoryContainer>
                </S.UserInfo>
            </S.RankContainer>
        </>
    );
};
//
export default OneRanking;
