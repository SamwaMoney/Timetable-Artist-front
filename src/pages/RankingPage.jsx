import { isMobile } from 'react-device-detect';
import Rank from '../components/rankingpage/Rank';
import MobileRank from '../components/rankingpage/M_Rank';
import { useState } from 'react';

const RankingPage = () => {
    const [isMyData, setIsMyData] = useState(false);

    return isMobile ? (
        <MobileRank isMyData={isMyData} />
    ) : (
        <Rank isMyData={isMyData} />
    );
};

export default RankingPage;
