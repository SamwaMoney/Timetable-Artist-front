import OneRanking from './OneRanking';
import Toggle from './Toggle';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const RankingList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const rankList = useSelector(state => state.rankReducer);

    //선택한 정렬방식대로 순위 바꿔줌
    const sort = searchParams.get('sort') || 'worst';
    console.log('sort', sort);

    useEffect(() => {
        dispatch({
            type: sort,
        });
    }, [sort]);

    return (
        <>
            {/*최악, 최고의 시간표일 때만 토글을 보여줌*/}
            {sort === 'popular' ? null : <Toggle />}
            {rankList.map((user, index) => {
                return <OneRanking data={user} index={index} />;
            })}
        </>
    );
};
export default RankingList;
