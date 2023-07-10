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
        width: 21rem;
        height: 13.1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        text-align: center;

        border-radius: 0.6rem;
        border: 0.1rem solid var(--black);
    }
    .emoji, .text {
        font-family: var(--korean);
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    .edit-text {
        font-size: 1rem;
    }
    .btn {
        width: 7.6rem;
        height: 2.8rem;
        flex-shrink: 0;
        border-radius: 33px;
        border: 0.1rem solid var(--black);
        margin: 0.6rem 1.2rem;
        margin-top: 0;
        cursor: pointer;

        color: var(--black);
        text-align: center;
        font-family: var(--korean);
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: 2.5rem;
    }
    .big-btn {
        width: 15.1rem;
        height: 2.8rem;
        border-radius: 33px;
        border: 0.1rem solid var(--black);
        margin-bottom: 0.6rem;
        cursor: pointer;

        font-family: var(--korean);
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: 2.5rem;
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