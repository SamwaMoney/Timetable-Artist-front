import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { S, M } from '../Ranking.style';
import LikeBtn from '../rightSection/LikeBtn';
import CmtTag from '../rightSection/CmtTag';

//선택된 user의 id와 일치하면 해당 유저의 랭킹 색을 초록색으로 바꿔줘야 함
//받아온 data의 첫번쨰 유저가 default => 클릭할떄마다 바뀜
const OneRanking = ({ data, isMobile, currentUser, setCurrentUser, index }) => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    //현재 정렬 방식
    const sort = searchParams.get('sort') || 'lowest';

    //현재 선택된 유저인지(웹)
    const [iscurrentuser, setIsCurrentUser] = useState(false);

    //현재 시간표를 보여주고 있는지(모바일)
    const [isshowtimetable, setIsShowTimeTable] = useState(
        index === 0 ? true : false,
    );

    //받아온 데이터에 해당 프로퍼티를 꺼내줌
    const {
        timetableId,
        owner,
        score,
        tableType,
        ranking,
        tableImg,
        likeCount,
        replyCount,
    } = data;

    useEffect(() => {
        if (currentUser?.timetableId === timetableId) {
            setIsCurrentUser(true);
            console.log(iscurrentuser);
        } else {
            setIsCurrentUser(false);
            console.log(iscurrentuser);
        }
    }, [iscurrentuser, currentUser, timetableId]);

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
                    <M.RankNum isshowtimetable={isshowtimetable.toString()}>
                        {ranking}
                    </M.RankNum>
                    <M.UserInfo
                        onClick={() => {
                            onShowTimeTable();
                        }}
                        isshowtimetable={isshowtimetable.toString()}
                    >
                        <M.Score>{score}점</M.Score>
                        <M.CategoryContainer>
                            <M.Category>{tableType}</M.Category>
                            <M.Nickname>{owner}</M.Nickname>
                        </M.CategoryContainer>
                    </M.UserInfo>
                </M.RankContainer>
                {isshowtimetable ? (
                    <>
                        <M.TimeTableWrapper>
                            <S.TimeTable
                                src={tableImg}
                                alt='사진'
                                onClick={() => {
                                    onMoveMDetail(timetableId);
                                }}
                            />
                        </M.TimeTableWrapper>
                        <M.ButtonContainer>
                            <LikeBtn number={likeCount} isMobile={true} />
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
                    {ranking}
                </S.RankNum>
                <S.UserInfo
                    iscurrentuser={iscurrentuser.toString()}
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
//
export default OneRanking;
