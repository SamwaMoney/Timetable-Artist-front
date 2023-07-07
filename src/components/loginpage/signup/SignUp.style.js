import { styled } from "styled-components";
const S = {};
S.Wrapper =styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    padding: auto;
    align-items: center;
    .input {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 50px;
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
    .id-input {
        gap: 34px;
    }
    .pw-input {
        gap: 20px;
    }
    .pw-check-input {
        gap: 54px;
    }

    .text {
        text-align: center;
        margin: 20px auto;
        
        color: var(--black);
        font-family: var(--korean);
        font-size: 14px;
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
    margin: auto;
    margin-right: 20px;
    color: var(--black);
    font-family: var(--english);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
S.InputBox = styled.input`
    display: flex;
    width: 200px;
    padding: 16px 28px;
    align-items: flex-start;
    gap: 8px;
    border-radius: 60px;
    border: 0.1rem solid var(--black);
    background-image: var(--light-grey);
    margin: auto;

    // placehoder 및 innertext css
    ::placeholder {
        color: var(--grey);
    }
    font-family: var(--korean);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
S.SubmitBtn = styled.button`
    width: 194px;
    height: 44px;
    align-items: flex-start;
    gap: 16px;
    background: var(--blue);
    border-radius: 38px;
    border: 1px solid var(--black);

    color: var(--white, #FFF);
    text-align: center;
    font-family: var(--white);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    cursor: pointer;
`;
export {S};