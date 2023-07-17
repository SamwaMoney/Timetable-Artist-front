import { isMobile } from 'react-device-detect';
import AboutUs from '../components/aboutuspage/AboutUs';
import MAboutUs from '../components/aboutuspage/M_AboutUs';

const AboutUsPage = () => {
    return <>{isMobile ? <MAboutUs /> : <AboutUs />}</>;
};

export default AboutUsPage;
