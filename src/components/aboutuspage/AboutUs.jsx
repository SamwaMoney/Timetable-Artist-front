import { A } from './AboutUs.style';
import logo from '../../assets/mainpage/시간표아티스트logo.png';
import Hamburger from '../_common/Hamburger';

const AboutUs = () => {
    return (
        <A.Wrapper>
            <Hamburger />
            <A.ContentWrapper>
                <A.Logo src={logo} />
                <A.AboutUsWrapper>
                    <A.TextBox>
                        <p className='title eng'>EFUB</p>
                        <p className='content'>
                            가치를 이상은 대한 앞이 거친 할지라도 싸인 우리는
                            있는가? 옷을 원질이 하였으며, 설레는 있는 너의
                            가지에 천하를 있는가? 무한한 무엇이 반짝이는
                            발휘하기 풀밭에 품으며, 안고, 용감하고 때문이다.
                        </p>
                    </A.TextBox>
                    <A.TextBox>
                        <p className='title'>삼와머니</p>
                        <p className='content'>
                            가치를 이상은 대한 앞이 거친 할지라도 싸인 우리는
                            있는가? 옷을 원질이 하였으며, 설레는 있는 너의
                            가지에 천하를 있는가? 무한한 무엇이 반짝이는
                            발휘하기 풀밭에 품으며, 안고, 용감하고 때문이다.
                        </p>
                    </A.TextBox>
                    <A.TextBox>
                        <p className='title'>시간표 아티스트</p>
                        <p className='content last-content'>
                            가치를 이상은 대한 앞이 거친 할지라도 싸인 우리는
                            있는가? 옷을 원질이 하였으며, 설레는 있는 너의
                            가지에 천하를 있는가? 무한한 무엇이 반짝이는
                            발휘하기 풀밭에 품으며, 안고, 용감하고 때문이다.
                        </p>
                    </A.TextBox>
                </A.AboutUsWrapper>
            </A.ContentWrapper>
        </A.Wrapper>
    );
};

export default AboutUs;
