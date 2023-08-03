import { M, S } from '../components/rankingpage/Ranking.style';
import { SK } from './skeleton.style';

const MRankingListSkeleton = () => {
    return (
        <SK.List>
            {Array(7)
                .fill()
                .map(el => {
                    return (
                        <M.OneRankWrapper
                            key={Math.floor(Math.random() * 10000)}
                        >
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
