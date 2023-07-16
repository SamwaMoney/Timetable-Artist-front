import { useSearchParams } from 'react-router-dom';
import { S, M } from './Ranking.style';
import { useSelector } from 'react-redux';
import CommentList from './rightSection/CommentList';
import BackBtn from '../_common/BackBtn';
import HeartButton from './rightSection/HeartButton';
import CommentButton from './rightSection/CmtButton';
const MRankDetail = () => {
    //랭크를 params으로 전달받아 렌더링함.
    const rankList = useSelector(state => state.rankReducer);
    const [searchParams, setSearchParams] = useSearchParams();
    const rank = searchParams.get('rank');

    // 목데이터
    const { id, nickname, score, category, tableImg } = rankList
        ? rankList[0]
        : null;

    console.log('params', id);
    return (
        <>
            <BackBtn />
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
                {/* <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                > */}
                <M.CommentWrapper>
                    <CommentList isMobile={true} />
                </M.CommentWrapper>
            </M.DetailWrapper>
        </>
    );
};
export default MRankDetail;
