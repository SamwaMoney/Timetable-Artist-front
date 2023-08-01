import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { S, M } from '../Ranking.style';
import CmtTag from '../rightSection/CmtTag';
import Timetable from '../../../assets/scorepage/timetable.png';
import LikeTag from '../rightSection/LikeTag';
//선택된 user의 id와 일치하면 해당 유저의 랭킹 색을 초록색으로 바꿔줘야 함
//받아온 data의 첫번쨰 유저가 default => 클릭할떄마다 바뀜
const OneRanking = ({
    data,
    isMobile,
    index,
    currentUserId,
    setCurrentUserId,
}) => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    //현재 정렬 방식
    const sort = searchParams.get('sort') || 'LOWEST';

    //현재 선택된 유저인지(웹)
    const [iscurrentuser, setIsCurrentUser] = useState(false);

    //현재 시간표를 보여주고 있는지(모바일)
    const [isshowtimetable, setIsShowTimeTable] = useState(
        index === 0 ? true : false,
    );

    const [loading, setLoading] = useState(true);

    //받아온 데이터에 해당 프로퍼티를 꺼내줌
    const {
        timetableId,
        username,
        score,
        tableTypeContent,
        tableImg,
        likeCount,
        replyCount,
        liked,
    } = data;

    useEffect(() => {
        if (currentUserId === timetableId) {
            setIsCurrentUser(true);
        } else {
            setIsCurrentUser(false);
        }
    }, [iscurrentuser, currentUserId, timetableId]);

    //디테일 페이지 이동(웹)
    const onMoveDetail = () => {
        setCurrentUserId(data.timetableId);
        searchParams.set('rank', index + 1);
        setSearchParams(searchParams);
    };

    //디테일 페이지 이동(모바일)
    const onMoveMDetail = timetableId => {
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
                                src={Timetable}
                                alt='사진'
                                onClick={() => {
                                    onMoveMDetail(timetableId);
                                }}
                            />
                        </M.TimeTableWrapper>
                        <M.ButtonContainer>
                            <LikeTag number={likeCount} liked={liked} />
                            <CmtTag number={replyCount} isMobile={true} />
                        </M.ButtonContainer>
                    </>
                ) : null}
            </M.OneRankWrapper>
        </>
    ) : (
        <>
            <S.RankContainer>
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
