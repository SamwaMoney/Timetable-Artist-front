import { isMobile } from 'react-device-detect';
import Main from '../components/mainpage/Main';
import MMain from '../components/mainpage/M_Main';

const MainPage = () => {
    return <>{isMobile ? <MMain /> : <Main />}</>;
};

export default MainPage;
