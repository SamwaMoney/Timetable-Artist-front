import { isMobile } from 'react-device-detect';
import Score from '../components/scorepage/Score';
const ScorePage = () => {
    return isMobile ? null : <Score />;
};

export default ScorePage;
