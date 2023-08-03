import OneRanking from './OneRanking';
import Toggle from './Toggle';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { S, M } from '../Ranking.style';
import RankingListSkeleton from '../../../skeleton/RankingListSkeleton';
import MRankingListSkeleton from '../../../skeleton/MRankingListSkeleton';
const RankingList = ({
    isMobile,
    data,
    setCurrentUserId,
    currentUserId,
    RankLoading,
}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const sort = searchParams.get('sort') || 'LOWEST';
    //선택한 정렬방식대로 순위 바꿔줌

    return (
        <>
            {/* 최악, 최고의 시간표일 때만 토글을 보여줌 */}
            {sort !== 'LIKE' && <Toggle isMobile={isMobile} />}
            {RankLoading || !data ? (
                isMobile ? (
                    <MRankingListSkeleton />
                ) : (
                    <RankingListSkeleton />
                )
            ) : (
                <S.List>
                    {data.map((user, index) => (
                        <OneRanking
                            isMobile={isMobile}
                            key={Math.random() * 10000}
                            index={index}
                            data={user}
                            currentUserId={currentUserId}
                            setCurrentUserId={setCurrentUserId}
                        />
                    ))}
                </S.List>
            )}
        </>
    );
};
export default RankingList;
