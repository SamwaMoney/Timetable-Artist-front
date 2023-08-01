import { M, S } from '../components/rankingpage/Ranking.style';
import { SK } from './skeleton.style';

const MRankingListSkeleton = () => {
    return (
        <SK.List>
            {Array(6)
                .fill()
                .map(el => {
                    return (
                        <M.OneRankWrapper>
                            <M.RankContainer>
                                <SK.RankNum />
                                <SK.UserInfo />
                            </M.RankContainer>
                        </M.OneRankWrapper>
                    );
                })}
        </SK.List>
    );
};
export default MRankingListSkeleton;
