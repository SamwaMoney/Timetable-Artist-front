import { S } from './Main.style';
import logo from "../../assets/mainpage/시간표아티스트logo.png";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();
    return (
        <S.Wrapper>
            <S.Logo src={logo}/>
            <S.Korean>회원가입하고 내 시간표 점수 확인하기!</S.Korean>
            <S.LoginBtn onClick={() => navigate('/login')}>로그인/회원가입</S.LoginBtn>
            <S.RankingBtn onClick={() => navigate('/ranking')}>랭킹보드 보기</S.RankingBtn>
        </S.Wrapper>
    );
};
export default Main;
