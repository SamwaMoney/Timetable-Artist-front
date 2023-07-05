import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import Main from '../components/mainpage/Main';

const MainPage = () => {
  return <>{isMobile ? <></> : <Main />}</>;
};

export default MainPage;
