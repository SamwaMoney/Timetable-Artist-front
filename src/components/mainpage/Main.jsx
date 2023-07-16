import { S } from "./Main.style";
import frontLogo from "../../assets/mainpage/시간표아티스트logo.png";
import backLogo from "../../assets/mainpage/flipped_logo.png";

import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Main = () => {
    const navigate = useNavigate();
    const [isClicked, setIsClicked] = useState(false);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
  
    const handleMouseMove = (e) => {
        // LogoContainer의 경계정보를 받아와서 저장한 변수
        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = ((e.clientX - rect.left) / rect.width) * 100;
        const offsetY = ((e.clientY - rect.top + 50) / rect.height) * 100;
        setMouseX(offsetX);
        setMouseY(offsetY);
    };

    return (
        <S.Wrapper>
            <S.LogoContainer onClick={() => setIsClicked(!isClicked)} onMouseMove={(e) => handleMouseMove(e)} >
                <S.FrontLogo src={frontLogo} className={isClicked ? "clicked" : ""} />
                <S.BackLogo src={backLogo} className={isClicked ? "" : "clicked"} />
                <S.HoverText className="hover-text" style={{ top: `${mouseY}%`, left: `${mouseX}%` }}>클릭해 보세요!</S.HoverText>
            </S.LogoContainer>
            <S.Korean>회원가입하고 내 시간표 점수 확인하기!</S.Korean>
            <S.LoginBtn onClick={() => navigate('/login')}>로그인/회원가입</S.LoginBtn>
            <S.RankingBtn onClick={() => navigate('/ranking')}>랭킹보드 보기</S.RankingBtn>
        </S.Wrapper>
    );
};
export default Main;
