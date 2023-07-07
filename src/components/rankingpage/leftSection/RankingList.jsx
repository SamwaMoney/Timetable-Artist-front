import OneRanking from './OneRanking';
import Toggle from './Toggle';
import { useSearchParams } from 'react-router-dom';
import { mockData } from '../../../assets/rankingpage/rankMock';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const RankingList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const rankList = useSelector(state => state.rankReducer);

    const sort = searchParams.get('sort');
    useEffect(() => {
        dispatch({
            type: sort,
        });
    }, [sort]);

    return (
        <>
            {sort === 'popular' ? null : <Toggle />}
            {rankList.map((user, index) => {
                return <OneRanking data={user} index={index} />;
            })}
        </>
    );
};
export default RankingList;
