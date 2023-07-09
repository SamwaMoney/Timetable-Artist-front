import { styled } from "styled-components";
const S = {};
S.Wrapper =styled.div`
    display: flex;
    flex-direction: column;
    height: 31.2rem;
    padding: auto;
    align-items: center;
    .input {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 3.1rem;
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
        margin: 1.2rem auto;
        
        color: var(--black);
        font-family: var(--korean);
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
    }
    .hidden {
        visibility: hidden;
    }
`;
S.Text = styled.p`
    margin: auto 1.2rem auto 0;
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
    padding: 1rem 1.7rem;
    align-items: flex-start;
    gap: 0.5rem;
    border-radius: 60px;
    border: 0.1rem solid var(--black);
    background-image: var(--light-gray);

    // placehoder 및 innertext css
    ::placeholder {
        color: var(--gray);
    }
    font-family: var(--korean);
    font-size: 0.8vw;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
S.SubmitBtn = styled.button`
    width: 11vw;
    height: 2.75rem;
    align-items: flex-start;
    gap: 1rem;
    background: var(--blue);
    border-radius: 2.3rem;
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