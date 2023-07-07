import { styled } from "styled-components";
const A = {};
A.Wrapper = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background: var(--background);
`;
A.ContentWrapper = styled.div`
    width: 1084px;
    height: 588px;
    border: 0.1rem solid #000;
    background: linear-gradient(180deg, var(--green) 0%, var(--background) 100%);
    margin-left: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    .div {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
A.Logo = styled.img`
    width: 330px;
    margin: 0 90px;
`;
A.AboutUsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: auto;
    padding: 0px 90px;
    flex-grow: 1;
`;
A.TextBox = styled.div`
    .title {
        color: #000;
        text-align: center;
        font-family: var(--english);
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-bottom: 30px;
    }
    .kor {
        font-family: var(--korean);
    }

    .content {
        color: #000;
        text-align: center;
        font-family: var(--korean);
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-bottom: 30px;
    }
`;
export { A };