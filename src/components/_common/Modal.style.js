import { styled } from 'styled-components';
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

    &.mobile-background {
        background: rgba(0, 0, 0, 0.40);
    }

    .modal {
        width: 17.5%;
        width: 16.5%;
        height: 21.5%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        text-align: center;

        border-radius: 10px;
        border: 0.1rem solid var(--black);
        padding: 0.3vw 0;

        &.mobile-modal {
            width: 69.2%;
            height: 25%;
            border: 0.05rem solid var(--black);
        }
    }
    .emoji,
    .text {
        font-size: 1vw;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        &.mobile-emoji {
            font-size: 5vw;
        }
        &.mobile-text {
            font-size: 4vw;
        }
    }
    .edit-text {
        font-size: 0.85vw;

        &.mobile-edit-text {
            font-size: 3.5vw;
        }
    }
    .btn {
        width: 6vw;
        height: 4.7vh;
        flex-shrink: 0;
        border-radius: 33px;
        border: 0.1rem solid var(--black);
        margin: 0 1vw;
        cursor: pointer;

        color: var(--black);
        text-align: center;
        font-size: 0.85vw;
        font-style: normal;
        font-weight: 600;

        &.mobile-btn {
            width: 22vw;
            height: 5vh;
            font-size: 4vw;
            font-weight: 700;
            margin: 0 4vw;
            border: 0.05rem solid var(--black);
        }
    }
    .big-btn {
        color: var(--black);
        width: 12vw;
        height: 4.7vh;
        border-radius: 33px;
        border: 0.1rem solid var(--black);
        cursor: pointer;

        font-size: 0.85vw;
        font-style: normal;
        font-weight: 600;

        &.mobile-big-btn {
            width: 43.3vw;
            height: 5vh;
            font-size: 4vw;
            font-weight: 700;
            border: 0.05rem solid var(--black);
        }
    }
    .red-background {
        background: linear-gradient(
            180deg,
            #f21f02 0%,
            #ff8372 10.24%,
            #ffebe8 23.78%,
            #fff 30.03%
        );
    }
    .blue-background {
        background: linear-gradient(
            180deg,
            #1962ed 0%,
            #6fa0ff 10.24%,
            #e2ecff 23.78%,
            #fff 30.03%
        );
    }
    .gray-btn {
        background: #eaeaea;
    }
    .red-btn {
        background: #ffa396;
    }
    .blue-btn {
        background: #8fb6ff;
    }
    .error-text {
        font-size: 1.1rem;
        font-weight: 500;
    }
`;
export { M };
