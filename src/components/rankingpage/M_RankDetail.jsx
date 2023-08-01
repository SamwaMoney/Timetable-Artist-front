import { S, M } from './Ranking.style';
import { useSearchParams } from 'react-router-dom';
import LikeBtn from './rightSection/LikeBtn';
import CmtTag from './rightSection/CmtTag';
import CommentList from './rightSection/CommentList';
import { AiOutlineLeft } from 'react-icons/ai';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import NewComment from './rightSection/NewComment';
import { useEffect, useState } from 'react';
import RankingApis from '../../api/ranking';
import { useParams } from 'react-router-dom';
import Timetable from '../../assets/scorepage/timetable.png';
import MRankingLoading from '../_common/M_RankingLoading';

//해당 유저의 아이디를 params로 가져오고, rank의 경우는 쿼리스트링으로 가져옴
//시간표 채점 결과 조회 api를 사용함.
const MRankDetail = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    //유저의 랭크
    const rank = searchParams.get('rank');
    const navigate = useNavigate();
    const handleMoveBack = () => {
        navigate(-1);
    };
    const params = useParams();
    const timetableId = params.id;
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //timetableId로 해당 유저의 정보 검색
        //comment는 따로 검색
        setLoading(true);
        const fetch = async () => {
            const res = await getDetailData(timetableId);
            setCurrentUser(res?.data);
        };
        fetch();
    }, []);

    //로딩 상태 보여주는 UI
    useEffect(() => {
        console.log('로딩상태', loading);
        if (loading && currentUser) {
            setLoading(false);
        }
    }, [loading, currentUser]);

    const getDetailData = timetableId => {
        return RankingApis.GetOneRankingDetail(timetableId);
    };

    return loading ? (
        <MRankingLoading />
    ) : (
        currentUser && (
            <Wrapper>
                <Header>
                    <div style={{ marginTop: '7vw', marginLeft: '4vw' }}>
                        <AiOutlineLeft size='10vw' onClick={handleMoveBack} />
                    </div>
                </Header>
                <M.DetailWrapper>
                    <M.RankContainer>
                        <M.RankNum>{rank}</M.RankNum>
                        <M.UserInfo>
                            <M.Score>{currentUser?.score}점</M.Score>

                            <M.CategoryContainer>
                                <M.Category>
                                    {currentUser?.tableTypeContent ||
                                        '유형 정보 없음'}
                                </M.Category>
                                <M.Nickname>{currentUser?.owner}</M.Nickname>
                            </M.CategoryContainer>
                        </M.UserInfo>
                    </M.RankContainer>
                    {/* <S.TimeTable src={currentUser?.tableImg} alt='사진' /> */}
                    <M.TimeTable src={Timetable} alt='사진' />
                    <M.DetailBtnContainer>
                        <LikeBtn
                            isMobile={true}
                            timetableId={timetableId}
                            currentUser={currentUser}
                            getDetailData={getDetailData}
                        />
                        <CmtTag
                            isMobile={true}
                            number={currentUser?.replyCount}
                        />
                    </M.DetailBtnContainer>
                    {/*뎃글 적는 인풋창 */}
                    <NewComment isMobile={true} />
                    <CommentList isMobile={true} currentUserId={timetableId} />
                </M.DetailWrapper>
            </Wrapper>
        )
    );
};
export default MRankDetail;

const Wrapper = styled.div`
    min-height: 100vh;
    background-color: var(--background);
    z-index: -10;
`;
const Header = styled.div`
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 10%;
    background-color: var(--background);
`;
