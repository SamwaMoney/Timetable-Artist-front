import { M, S } from '../components/rankingpage/Ranking.style';
import { SK } from './skeleton.style';
import { styled } from 'styled-components';
const RankingListSkeleton = () => {
    return (
        <SK.List margin={0.1}>
            {Array(6)
                .fill()
                .map(el => {
                    return (
                        <S.RankContainer top={1}>
                            <div
                                style={{
                                    display: 'flex',
                                    width: '100%',
                                    paddingTop: '1vw',
                                }}
                            >
                                <SK.RankNum height={4} width={5} />
                                <SK.UserInfo height={4} />
                            </div>
                        </S.RankContainer>
                    );
                })}
        </SK.List>
    );
};
export default RankingListSkeleton;
