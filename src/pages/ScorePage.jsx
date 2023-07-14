import { isMobile } from 'react-device-detect';
import Score from '../components/scorepage/Score';
import M_Score from '../components/scorepage/M_Score';
const ScorePage = () => {
    return isMobile ? <M_Score /> : <Score />;
};

export default ScorePage;
