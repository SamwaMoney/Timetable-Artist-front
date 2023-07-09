import { BrowserView, MobileView, isMobile } from "react-device-detect";
import Login from "../components/loginpage/Login";

const LoginPage = () => {
    return <>{isMobile ? <></> : <Login />}</>;
};

export default LoginPage;
