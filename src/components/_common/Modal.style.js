import { styled } from "styled-components";
const M = {};
M.Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;

    .modal {
        width: 17.5%;
        height: 21.5%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        text-align: center;

        border-radius: 10px;
        border: 0.1rem solid var(--black);
    }
    .emoji, .text {
        font-size: 1vw;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    .edit-text {
        font-size: 0.85vw;
    }
    .btn {
        width: 6.4vw;
        height: 4.6vh;
        flex-shrink: 0;
        border-radius: 33px;
        border: 0.1rem solid var(--black);
        margin: 0.5vw 1vw;
        margin-top: 0;
        cursor: pointer;

        color: var(--black);
        text-align: center;
        font-size: 0.85vw;
        font-style: normal;
        font-weight: 600;
    }
    .big-btn {
        width: 12.6vw;
        height: 4.6vh;
        border-radius: 33px;
        border: 0.1rem solid var(--black);
        margin-bottom: 0.5vw;
        cursor: pointer;

        font-size: 0.85vw;
        font-style: normal;
        font-weight: 600;
    }
    .red-background {
        background: linear-gradient(180deg, #F21F02 0%, #FF8372 10.24%, #FFEBE8 23.78%, #FFF 30.03%);
    }
    .blue-background {
        background: linear-gradient(180deg, #1962ED 0%, #6FA0FF 10.24%, #E2ECFF 23.78%, #FFF 30.03%);
    }
    .gray-btn {
        background: #EAEAEA;
    }
    .red-btn {
        background: #FFA396;
    }
    .blue-btn {
        background: #8FB6FF;
    }
`;
export { M };