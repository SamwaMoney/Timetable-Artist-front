import styled from 'styled-components';
const S = {};
S.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 13.4%;
    height: 70%;
    flex-shrink: 0;

    border: 0.1rem solid var(--black);
    background: linear-gradient(180deg, var(--green) 0%, var(--background) 100%);
    .login {
        margin-top: auto;
        border-top: 0.1rem solid var(--black);
        border-bottom: none;
    }
`;
S.MenuBtn = styled.div`
    display: flex;
    width: 100%;
    height: 6vh;
    justify-content: center;
    border-bottom: 0.1rem solid var(--black);
    overflow: hidden;
    a {
        color: var(--black);
        text-align: center;
        font-family: var(--korean);
        font-size: 1.2vw;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;

        text-decoration: none;
        width: 100%;
        height: 6vh;
    }
    .aboutus {
        font-size: 1.4vw;
        font-family: var(--english);
    }
`;
S.WithdrawalBtn = styled.div`
    width: 100%;
    height: 6vh;
    border-top: 0.1rem solid var(--black);
    margin-top: auto;
    cursor: pointer;
    overflow: hidden;

    color: var(--black);
    font-family: var(--english);
    font-size: 0.6vw;
    font-style: normal;
    font-weight: 500;
    line-height: 154.953%;
    display: flex;
    align-items: center;

    p {
        margin-left: 0.6rem;
    }
`;
export { S };