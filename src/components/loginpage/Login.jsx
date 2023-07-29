import Hamburger from '../_common/Hamburger';
import { L } from './Login.style';
import logo from '../../assets/mainpage/시간표아티스트logo.png';

import { useState } from 'react';
import SignIn from './signin/SignIn';
import SignUp from './signup/SignUp';

const Login = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleTabClick = index => setActiveIndex(index);

    // 로그인 / 회원가입 탭 이름, 내용
    const tabArr = [
        {
            tabTittle: (
                <L.TabItem key='sign-in'>
                    <L.TabTittle
                        onClick={() => handleTabClick(0)}
                        className={activeIndex === 0 ? 'active' : ''}
                    >
                        로그인
                    </L.TabTittle>
                    <L.ActiveLine
                        className={activeIndex === 0 ? 'active' : ''}
                    />
                </L.TabItem>
            ),
            tabContent: <SignIn />,
        },
        {
            tabTittle: (
                <L.TabItem key='sign-up'>
                    <L.TabTittle
                        onClick={() => handleTabClick(1)}
                        className={activeIndex === 1 ? 'active' : ''}
                    >
                        회원가입
                    </L.TabTittle>
                    <L.ActiveLine
                        className={activeIndex === 1 ? 'active' : ''}
                    />
                </L.TabItem>
            ),
            tabContent: <SignUp />,
        },
    ];

    return (
        <L.Wrapper>
            <Hamburger />
            <L.ContentWrapper>
                <div className='div'>
                    <L.Logo src={logo} />
                </div>
                <L.TabWrapper>
                    <L.Tab>
                        {tabArr.map(section => {
                            return section.tabTittle;
                        })}
                    </L.Tab>
                    <L.Line />
                    <div>{tabArr[activeIndex].tabContent}</div>
                </L.TabWrapper>
            </L.ContentWrapper>
        </L.Wrapper>
    );
};

export default Login;
