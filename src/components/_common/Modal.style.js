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
        height: 21.5%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        text-align: center;

        border-radius: 30px;
        border: 0.1rem solid var(--black);

        &.mobile-modal {
            width: 69.2%;
            height: 25%;
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
        width: 6.4vw;
        height: 4.6vh;
        flex-shrink: 0;
        border-radius: 90px;
        border: 0.1rem solid var(--black);
        margin: 0.5vw 1vw;
        margin-top: 0;
        cursor: pointer;

        color: var(--black);
        text-align: center;
        font-size: 0.85vw;
        font-style: normal;
        font-weight: 600;

        &.mobile-btn {
            width: 22vw;
            height: 5vh;
            font-size: 3.5vw;
            font-weight: 700;
            margin: 2vw 4vw;
        }
    }
    .big-btn {
        color: var(--black);
        width: 12.6vw;
        height: 4.6vh;
        border-radius: 90px;
        border: 0.1rem solid var(--black);
        margin: 0.5vw 0;
        cursor: pointer;

        font-size: 0.85vw;
        font-style: normal;
        font-weight: 600;

        &.mobile-big-btn {
            width: 43.3vw;
            height: 5vh;
            font-size: 3.5vw;
            font-weight: 700;
            margin: 2vw 0;
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
