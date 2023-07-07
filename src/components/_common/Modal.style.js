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
        width: 340px;
        height: 210px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        text-align: center;

        border-radius: 10px;
        border: 0.1rem solid var(--black);
    }
    .withdrawal, .edit {
        background: linear-gradient(180deg, #F21F02 0%, #FF8372 10.24%, #FFEBE8 23.78%, #FFF 30.03%);
    }
    .emoji, .text {
        font-family: var(--korean);
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    .edit-text {
        font-size: 16px;
    }
    .btn {
        width: 122px;
        height: 46px;
        flex-shrink: 0;
        border-radius: 33px;
        border: 1px solid #000;
        margin: 10px 20px;
        margin-top: 0;

        color: #000;
        text-align: center;
        font-family: var(--korean);
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 40px;
    }
    .gray-btn {
        background: #EAEAEA;
    }
    .red-btn {
        background: #FFA396;
    }
    .big-btn {
        width: 242px;
        height: 46px;
        border-radius: 33px;
        border: 1px solid #000;
        background: #FFA396;
        margin-bottom: 10px;

        font-family: var(--korean);
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 40px;
    }
`;
export { M };