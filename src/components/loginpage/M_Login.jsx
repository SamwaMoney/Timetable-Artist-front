import { useState } from "react";

import MSignIn from "./signin/M_SignIn";
import MSignUp from "./signup/M_SignUp";

import { L } from "./M_Login.style";

const MLogin = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleTabClick = (index) => setActiveIndex(index);

    // 로그인 / 회원가입 탭 이름, 내용
    const tabArr = [
        {
            tabTittle: (
                <L.TabItem key="sign-in">
                    <L.TabTittle onClick={() => handleTabClick(0)} className={activeIndex === 0 ? "active" : ""}>
                        로그인
                    </L.TabTittle>
                    <L.ActiveLine className={activeIndex === 0 ? "active" : ""}/>
                </L.TabItem>
            ),
            tabContent: (
                <MSignIn />
            ),
        },
        {
            tabTittle: (
                <L.TabItem key="sign-up">
                    <L.TabTittle onClick={() => handleTabClick(1)} className={activeIndex === 1 ? "active" : ""}>
                        회원가입
                    </L.TabTittle>
                    <L.ActiveLine className={activeIndex === 1 ? "active" : ""}/>
                </L.TabItem>
            ),
            tabContent: (
                <MSignUp />
            ),
        },
    ];

    return (
        <L.Wrapper>
            <L.TabWrapper>
                    <L.Tab>
                        {tabArr.map((section) => {
                            return section.tabTittle;
                        })}
                    </L.Tab>
                    <L.Line />
                    <div>
                        {tabArr[activeIndex].tabContent}
                    </div>
            </L.TabWrapper>
        </L.Wrapper>
    );
}

export default MLogin;