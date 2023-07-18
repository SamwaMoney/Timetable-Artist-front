import OneRanking from './OneRanking';
import Toggle from './Toggle';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { S, M } from '../Ranking.style';
// import { mock_ranking } from '../../../_mock/ranking'; //목데이터
// data={data}
// currentUser={currentUser}
// setCurrentUser={setCurrentUser}
const RankingList = ({ isMobile, data, currentUser, setCurrentUser }) => {
    console.log('datatata', data);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    //선택한 정렬방식대로 순위 바꿔줌
    const sort = searchParams.get('sort') || 'lowest';

    return isMobile ? (
        <M.List>
            {/*최악, 최고의 시간표일 때만 토글을 보여줌*/}
            {sort === 'like' ? null : <Toggle isMobile={isMobile} />}
            {data &&
                data.map((user, index) => {
                    return (
                        <OneRanking
                            isMobile={isMobile}
                            key={user.id}
                            data={user}
                            index={index}
                            setCurrentUser={setCurrentUser}
                        />
                    );
                })}
        </M.List>
    ) : (
        <S.List>
            {/*최악, 최고의 시간표일 때만 토글을 보여줌*/}
            {sort === 'like' ? null : <Toggle />}
            {data.map((user, index) => {
                return (
                    <OneRanking
                        key={user.id}
                        data={user}
                        index={index}
                        setCurrentUser={setCurrentUser}
                    />
                );
            })}
        </S.List>
    );
};
export default RankingList;
