import frontLogo from "../../assets/mainpage/시간표아티스트logo.png";
import backLogo from "../../assets/mainpage/flipped_logo.png";
import { M } from "./M_Main.style";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MMain = () => {
    const navigate = useNavigate();
    const [isClicked, setIsClicked] = useState(false); 

    return (
        <M.Wrapper>
            <M.LogoContainer onClick={() => setIsClicked(!isClicked)} >
                <M.FrontLogo src={frontLogo} className={isClicked ? "clicked" : ""} />
                <M.BackLogo src={backLogo} className={isClicked ? "" : "clicked"} />
            </M.LogoContainer>
            <M.Text>회원가입하고 내 시간표 점수 확인하기!</M.Text>
            <M.BtnContainer>
                <M.Btn className="login" onClick={() => navigate("/login")}>로그인/회원가입</M.Btn>
                <M.Btn className="ranking" onClick={() => navigate("/ranking")}>랭킹보드 보기</M.Btn>
            </M.BtnContainer>
        </M.Wrapper>
    )
}

export default MMain;