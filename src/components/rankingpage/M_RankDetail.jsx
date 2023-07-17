import { S, M } from './Ranking.style';
import { useSearchParams } from 'react-router-dom';
import HeartButton from './rightSection/HeartButton';
import CommentButton from './rightSection/CmtButton';
import CommentList from './rightSection/CommentList';
import { AiOutlineLeft } from 'react-icons/ai';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import NewComment from './rightSection/NewComment';

const MRankDetail = () => {
    const rankList = useSelector(state => state.rankReducer);
    const [searchParams, setSearchParams] = useSearchParams();
    const rank = searchParams.get('rank');
    const navigate = useNavigate();

    const { id, nickname, score, category, tableImg } = rankList
        ? rankList[0]
        : null;

    const handleMoveBack = () => {
        navigate(-1);
    };

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
                            <M.Category>{category}</M.Category>
                            <M.Nickname>{nickname}</M.Nickname>
                        </M.CategoryContainer>
                    </M.UserInfo>
                </M.RankContainer>
                <S.TimeTable src={tableImg} alt='사진' />
                <M.DetailBtnContainer>
                    <HeartButton />
                    <CommentButton />
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
