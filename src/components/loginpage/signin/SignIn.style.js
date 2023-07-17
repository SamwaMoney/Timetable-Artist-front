import { styled } from "styled-components";
const S = {};
S.Wrapper =styled.div`
    display: flex;
    flex-direction: column;
    padding: auto;
    align-items: center;
    .input {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 45vh;
    }
    .mobile-input {
        height: 55vh;
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
        &.mobile-div {
            width: 75vw;
        }
    }
    .id-input {
        padding-bottom: 3vw;
    }
    .alert-text { // 로그인 실패 시 뜨는 문구
        text-align: center;
        margin: 1vw auto;
        
        color: var(--red);
        font-size: 0.8vw;
        font-style: normal;
        font-weight: 500;
        line-height: 154.953%;
    }
    .mobile-text {
        margin: 4vw auto;
        font-size: 3vw;
    }
    .hidden {
        //visibility: hidden;
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
    &.mobile-Text {
        font-size: 5vw;
    }
`;
S.InputBox = styled.input`
    display: flex;
    width: 10vw;
    padding: 6% 10%;
    align-items: flex-start;
    border-radius: 60px;
    border: 0.1rem solid var(--black);
    background: var(--light-gray);

    // placehoder 및 innertext css
    ::placeholder {
        color: var(--gray);
    }
    font-size: 0.8vw;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    &.mobile-inputbox {
        width: 60vw;
        height: 6.7vh;
        font-size: 4.3vw;
    }
`;
S.SubmitBtn = styled.button`
    width: 11vw;
    height: 5vh;
    align-items: flex-start;
    background: var(--blue);
    border-radius: 5rem;
    border: 0.1rem solid var(--black);

    color: var(--white, #FFF);
    text-align: center;
    font-family: var(--white);
    font-size: 0.8vw;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    cursor: pointer;
    &.mobile-btn {
        width: 53.3vw;
        height: 7.3vh;
        font-size: 5vw;
    }
`;
export {S};