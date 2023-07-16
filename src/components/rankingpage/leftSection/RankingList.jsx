import OneRanking from './OneRanking';
import Toggle from './Toggle';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { S, M } from '../Ranking.style';

const RankingList = ({ isMobile }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const rankList = useSelector(state => state.rankReducer);
    //선택한 정렬방식대로 순위 바꿔줌
    const sort = searchParams.get('sort') || 'worst';

    useEffect(() => {
        dispatch({
            type: sort,
        });
    }, [sort]);

    return isMobile ? (
        <M.List>
            {/*최악, 최고의 시간표일 때만 토글을 보여줌*/}
            {sort === 'popular' ? null : <Toggle isMobile={isMobile} />}
            {rankList.map((user, index) => {
                return (
                    <OneRanking
                        isMobile={isMobile}
                        key={user.id}
                        data={user}
                        index={index}
                    />
                );
            })}
        </M.List>
    ) : (
        <S.List>
            {/*최악, 최고의 시간표일 때만 토글을 보여줌*/}
            {sort === 'popular' ? null : <Toggle />}
            {rankList.map((user, index) => {
                return <OneRanking key={user.id} data={user} index={index} />;
            })}
        </S.List>
    );
};
export default RankingList;
