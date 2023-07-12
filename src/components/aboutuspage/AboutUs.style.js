import { styled } from "styled-components";
const A = {};
A.Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    background: var(--background);
`;
A.ContentWrapper = styled.div`
    width: 60%;
    height: 70%;
    border: 0.1rem solid var(--black);
    background: linear-gradient(180deg, var(--green) 0%, var(--background) 100%);
    margin-left: 1%;
    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
`;
A.Logo = styled.img`
    width: 18vw;
    margin: 0 5.5vw;
`;
A.AboutUsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: auto;
    padding: 0 3vw;
    flex-grow: 1;
`;
A.TextBox = styled.div`
    .title {
        color: #000;
        text-align: center;
        font-size: 1.6vw;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-bottom: 2vw;
    }
    .eng {
        font-family: var(--english);
    }
    .content {
        color: #000;
        text-align: center;
        font-size: 0.8vw;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-bottom: 3vw;
    }
    .last-content {
        margin-bottom: 0;
    }
`;
export { A };