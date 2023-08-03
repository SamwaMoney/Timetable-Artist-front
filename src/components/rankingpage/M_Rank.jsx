import MHamburgerButton from '../_common/M_HamburgerBtn';
import TabContainer from './leftSection/Tab';
import RankingList from './leftSection/RankingList';
import MyScore from './leftSection/MyScore';
import { M } from './Ranking.style';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RankingApis from '../../api/ranking';
import { useLocation } from 'react-router-dom';
import MLoading from '../_common/M_Loading';
const MobileRank = ({ isMyData }) => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const sort = params.get('sort') || 'LOWEST';
    const [rankingData, setRankingData] = useState();
    const [isLogin, setIsLogin] = useState(false);
    const memberId = localStorage.getItem('memberId') || -1;
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    //sort에 따라 랭킹 정보 불러오기
    useEffect(() => {
        setRankingData('');
        setLoading(true);
        const fetchData = async sort => {
            const res = await getRankingList(sort, memberId);
            console.log('받아온 랭킹정보', sort, res);
            setRankingData(res?.data);
        };
        fetchData(sort);
        setLoading(false);
    }, [sort]);

    const getRankingList = (sort, memberId) => {
        return RankingApis.GetRanking(sort, memberId);
    };

    useEffect(() => {
        if (loading && rankingData) {
            setLoading(false);
        }
    }, [loading, rankingData]);

    return (
        <M.FlexContainer>
            <MHamburgerButton />
            {isMyData ? (
                <MyScore isMobile={true} datas={rankingData} />
            ) : isLogin ? (
                <M.NewButton
                    isMobile={true}
                    onClick={() => {
                        navigate('/create');
                    }}
                >
                    시간표 등록하기
                </M.NewButton>
            ) : (
                <M.NewButton
                    isMobile={true}
                    onClick={() => {
                        navigate('/login');
                    }}
                >
                    시간표 등록하기
                </M.NewButton>
            )}
            <TabContainer isMobile={true} />
            <RankingList isMobile={true} data={rankingData} loading={loading} />
        </M.FlexContainer>
    );
};

export default MobileRank;
