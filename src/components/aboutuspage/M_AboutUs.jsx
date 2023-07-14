import { A } from "./M_AboutUs.style";
import logo from "../../assets/mainpage/시간표아티스트logo.png";
import { AiOutlineLeft } from 'react-icons/ai';

import { useNavigate } from "react-router-dom";

const MAboutUs = () => {
    const navigate = useNavigate();
    const handleMoveBack = () => {
        navigate(-1);
    };

    return (
        <A.Wrapper>
            <A.MoveBackBtn>
                <AiOutlineLeft size='2rem' onClick={handleMoveBack} />
            </A.MoveBackBtn>
            <A.ContentWrapper>
                <A.Logo src={logo} />
                <A.TextWrapper>
                    <A.Tittle>EFUB</A.Tittle>
                    <A.Text>가치를 이상은 대한 앞이 거친 할지라도 싸인 우리는 있는가? 옷을 원질이 하였으며, 설레는 있는 너의 가지에 천하를 있는가? 무한한 무엇이 반짝이는 발휘하기 풀밭에 품으며, 안고.</A.Text>
                    <A.Tittle>삼와머니</A.Tittle>
                    <A.Text>가치를 이상은 대한 앞이 거친 할지라도 싸인 우리는 있는가? 옷을 원질이 하였으며, 설레는 있는 너의 가지에 천하를 있는가? 무한한 무엇이 반짝이는 발휘하기 풀밭에 품으며, 안고.</A.Text>
                    <A.Tittle>시간표 아티스트</A.Tittle>
                    <A.Text>가치를 이상은 대한 앞이 거친 할지라도 싸인 우리는 있는가? 옷을 원질이 하였으며, 설레는 있는 너의 가지에 천하를 있는가? 무한한 무엇이 반짝이는 발휘하기 풀밭에 품으며, 안고.</A.Text>
                </A.TextWrapper>
            </A.ContentWrapper>
        </A.Wrapper>
    )
}

export default MAboutUs;