import { isMobile } from "react-device-detect";
import Login from "../components/loginpage/Login";
import MLogin from "../components/loginpage/M_Login";

const LoginPage = () => {
    return <>{isMobile ? <MLogin /> : <Login />}</>;
};

export default LoginPage;
