import MHamburgerButton from '../_common/M_HamburgerBtn';
import TabContainer from './leftSection/Tab';
import RankingList from './leftSection/RankingList';
import MyScore from './leftSection/MyScore';
import { M } from './Ranking.style';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RankingApis from '../../api/ranking';
import { useLocation } from 'react-router-dom';
import MRankingListSkeleton from '../../skeleton/MRankingListSkeleton';

//전역 변수 => 현재 시간표가 있는가?
//로그인 상태 => 시간표 있으면 내 점수, 내 랭킹 보여주기
//로그인 상태 => 시간표 없으켠 새 시간표 만들기 클릭시 시간표 페이지로 이동
//로그인 안된 상태 => 새 시간표 만들기 클릭시 로그인페이지 이동

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
        console.log('sort바뀜', sort);
        setRankingData('');
        setLoading(true);
        const fetchData = async sort => {
            const res = await getRankingList(sort, memberId);
            console.log('받아온 랭킹정보', sort, res);
            setRankingData(res?.data);
        };
        fetchData(sort);
    }, [sort]);

    const getRankingList = (sort, memberId) => {
        return RankingApis.GetRanking(sort, memberId);
    };

    useEffect(() => {
        console.log('로딩상태', loading);
        if (loading && rankingData) {
            setLoading(false);
        }
    }, [loading, rankingData]);

    return (
        <M.FlexContainer>
            <MHamburgerButton />
            {isMyData ? (
                <MyScore isMobile={true} />
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
            {/* {loading ? (
                <MRankingListSkeleton />
            ) : ( */}
            <RankingList isMobile={true} data={rankingData} loading={loading} />
            {/* )} */}
        </M.FlexContainer>
    );
};

export default MobileRank;
