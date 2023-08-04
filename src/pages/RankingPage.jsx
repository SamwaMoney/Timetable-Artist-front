import { isMobile } from 'react-device-detect';
import Rank from '../components/rankingpage/Rank';
import MobileRank from '../components/rankingpage/M_Rank';
import { useEffect, useState } from 'react';

const RankingPage = () => {
    const [isLogin, setIsLogin] = useState(false);
    const memberId = localStorage.getItem('memberId') || -1;

    useEffect(() => {
        if (memberId > -1) {
            return setIsLogin(true);
        }
        return setIsLogin(false);
    }, [memberId]);

    return isMobile ? (
        <MobileRank isLogin={isLogin} />
    ) : (
        <Rank isLogin={isLogin} />
    );
};

export default RankingPage;
