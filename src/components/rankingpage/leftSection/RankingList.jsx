import OneRanking from './OneRanking';
import Toggle from './Toggle';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { S, M } from '../Ranking.style';

const RankingList = ({ isMobile, data, setCurrentUserId, currentUserId }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const sort = searchParams.get('sort') || 'LOWEST';
    //선택한 정렬방식대로 순위 바꿔줌

    return (
        <S.List>
            {/*최악, 최고의 시간표일 때만 토글을 보여줌*/}
            {sort === 'LIKE' ? null : <Toggle isMobile={isMobile} />}
            {data &&
                data.map((user, index) => {
                    return (
                        <OneRanking
                            isMobile={isMobile}
                            key={Math.random() * 10000}
                            data={user}
                            index={index}
                            currentUserId={currentUserId}
                            setCurrentUserId={setCurrentUserId}
                        />
                    );
                })}
        </S.List>
    );
};
export default RankingList;
