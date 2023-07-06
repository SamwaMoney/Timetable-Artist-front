import OneRanking from './OneRanking';
import Toggle from './Toggle';
import { useSearchParams } from 'react-router-dom';
import { mockData } from '../../../assets/rankingpage/rankMock';

const RankingList = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const sort = searchParams.get('sort');
    console.log(sort);

    return (
        <>
            {sort === 'popular' ? null : <Toggle />}
            {mockData.map((data, index) => {
                console.log('aa', data);
                return <OneRanking data={data} index={index} />;
            })}
        </>
    );
};
export default RankingList;
