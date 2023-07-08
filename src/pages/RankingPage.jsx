import { isMobile } from 'react-device-detect';
import Rank from '../components/rankingpage/Rank';
const RankingPage = () => {
    return isMobile ? null : <Rank />;
};

export default RankingPage;
