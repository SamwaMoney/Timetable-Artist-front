import MHamburgerButton from '../_common/M_HamburgerBtn';
import TabContainer from './leftSection/Tab';
import RankingList from './leftSection/RankingList';
import MyScore from './leftSection/MyScore';
import { M } from './Ranking.style';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import RankingApis from '../../api/ranking';
import { useLocation } from 'react-router-dom';
import MLoading from '../_common/M_Loading';

const MobileRank = ({ isLogin }) => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const sort = params.get('sort') || 'LOWEST';
    const [rankingData, setRankingData] = useState();
    const memberId = localStorage.getItem('memberId') || -1;
    const [loading, setLoading] = useState(true);
    const [rankLoading, setRankLoading] = useState(true);
    const timetableId = localStorage.getItem('tableId');

    const navigate = useNavigate();

    //sort에 따라 랭킹 정보 불러오기
    useEffect(() => {
        setRankingData('');
        setRankLoading(true);
        const fetchData = async sort => {
            const res = await getRankingList(sort, memberId);
            console.log('받아온 랭킹정보', sort, res);
            setRankingData(res?.data);
        };
        fetchData(sort);
    }, [sort, memberId]);

    const getRankingList = (sort, memberId) => {
        return RankingApis.GetRanking(sort, memberId);
    };

    useEffect(() => {
        if (rankLoading && rankingData) {
            setRankLoading(false);
        }
        if (loading && rankingData) {
            setLoading(false);
        }
    }, [rankingData, sort]);

    const memoizedRankingData = useMemo(() => rankingData, [rankingData]);

    return loading ? (
        <MLoading title='랭킹보드' />
    ) : (
        <M.FlexContainer>
            <MHamburgerButton />
            {!isLogin ? (
                <M.NewButton
                    onClick={() => {
                        navigate('/login');
                    }}
                    isMobile={true}
                >
                    시간표 등록하기
                </M.NewButton>
            ) : timetableId === 'null' ? (
                <M.NewButton
                    onClick={() => {
                        navigate('/create');
                    }}
                    isMobile={true}
                >
                    시간표 등록하기
                </M.NewButton>
            ) : (
                <MyScore isMobile={true} datas={memoizedRankingData} />
            )}
            <TabContainer isMobile={true} />
            <RankingList
                isMobile={true}
                // data={rankingData}
                data={memoizedRankingData}
                RankLoading={rankLoading}
            />
        </M.FlexContainer>
    );
};

export default MobileRank;
