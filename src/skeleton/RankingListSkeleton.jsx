import { M, S } from '../components/rankingpage/Ranking.style';
import { SK } from './skeleton.style';
import { styled } from 'styled-components';
const RankingListSkeleton = () => {
    return (
        <SK.List margin={1}>
            {Array(6)
                .fill()
                .map(el => {
                    return (
                        <S.RankContainer>
                            <div
                                style={{
                                    display: 'flex',
                                    width: '100%',
                                    paddingTop: '1vw',
                                }}
                            >
                                <SK.RankNum height={3.6} width={4.2} />
                                <SK.UserInfo height={3.6} />
                            </div>
                        </S.RankContainer>
                    );
                })}
        </SK.List>
    );
};
export default RankingListSkeleton;
