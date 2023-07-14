import { styled } from "styled-components";
const S = {};
S.Wrapper =styled.div`
    display: flex;
    flex-direction: column;
    padding: auto;
    align-items: center;
    justify-content: center;
    .input {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 45vh;
    }
`;
S.InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    div {
        display: flex;
        height: auto;
        justify-content: space-between;
    }
    .text {
        text-align: center;
        margin: 1vw auto;
        
        color: var(--black);
        font-size: 0.8vw;
        font-style: normal;
        font-weight: 500;
        line-height: 154.953%;
    }
    .text-top {
        margin-bottom: 0;
    }
    .text-bottom {
        margin-top: 0;
    }
    .alert-text { // 로그인 실패 시 뜨는 문구 
        color: var(--red);
        margin-bottom: 0;
    }
    .hidden {
        visibility: hidden;
    }
`;
S.Text = styled.p`
    margin: auto 1vw auto 0;
    color: var(--black);
    font-family: var(--english);
    font-size: 1.2vw;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
S.InputBox = styled.input`
    display: flex;
    width: 10vw;
    padding: 6% 10%;
    align-items: flex-start;
    border-radius: 60px;
    border: 0.1rem solid var(--black);
    background-image: var(--light-gray);

    // placehoder 및 innertext css
    ::placeholder {
        color: var(--gray);
    }
    font-size: 0.8vw;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
S.SubmitBtn = styled.button`
    width: 11vw;
    height: 5vh;
    align-items: flex-start;
    background: var(--blue);
    border-radius: 36px;
    border: 0.1rem solid var(--black);

    color: var(--white, #FFF);
    text-align: center;
    font-family: var(--white);
    font-size: 0.8vw;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    cursor: pointer;
`;
export {S};