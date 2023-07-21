import { S, M } from './Ranking.style';
import { useSearchParams } from 'react-router-dom';
import HeartTag from './rightSection/HeartTag';
import CmtTag from './rightSection/CmtTag';
import CommentList from './rightSection/CommentList';
import { AiOutlineLeft } from 'react-icons/ai';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import NewComment from './rightSection/NewComment';
import { useEffect } from 'react';
import { mock_ranking } from '../../_mock/ranking';

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
    const { timetableId, owner, score, tableType, tableImg } = mock_ranking[0];

    useEffect(() => {
        //timetableId로 해당 유저의 정보 검색
        //comment는 따로 검색
    }, []);

    return (
        <div>
            <Wrapper>
                <div style={{ marginTop: '7vw', marginLeft: '4vw' }}>
                    <AiOutlineLeft size='10vw' onClick={handleMoveBack} />
                </div>
            </Wrapper>
            <M.DetailWrapper>
                <M.RankContainer>
                    <M.RankNum>{rank}</M.RankNum>
                    <M.UserInfo>
                        <M.Score>{score}</M.Score>

                        <M.CategoryContainer>
                            <M.Category>{tableType}</M.Category>
                            <M.Nickname>{owner}</M.Nickname>
                        </M.CategoryContainer>
                    </M.UserInfo>
                </M.RankContainer>
                <S.TimeTable src={tableImg} alt='사진' />
                <M.DetailBtnContainer>
                    <HeartTag isMobile={true} />
                    <CmtTag isMobile={true} />
                </M.DetailBtnContainer>
                <M.CommentWrapper></M.CommentWrapper>
                {/*뎃글 적는 인풋창*/}
                <NewComment isMobile={true} />
                <CommentList isMobile={true} />
            </M.DetailWrapper>
        </div>
    );
};
export default MRankDetail;

const Wrapper = styled.div`
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 10%;
    background-color: var(--background);
`;
