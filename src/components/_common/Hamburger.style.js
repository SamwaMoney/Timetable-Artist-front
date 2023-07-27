import styled from 'styled-components';
const S = {};
S.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 13.4%;
    height: 70%;
    flex-shrink: 0;

    border: 0.1rem solid var(--black);
    background: linear-gradient(
        180deg,
        var(--green) 0%,
        var(--background) 100%
    );
    .login {
        margin-top: auto;
        border-top: 0.1rem solid var(--black);
        border-bottom: none;
        height: 5.5vh;
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
        height: 100%;
    }
    .aboutus {
        font-size: 1.4vw;
        font-family: var(--english);
    }
`;
S.BottomBox = styled.div`
    width: 100%;
    height: 5.5vh;
    border-top: 0.1rem solid var(--black);
    margin-top: auto;
    overflow: hidden;

    display: flex;
    align-items: center;

    div {
        cursor: pointer;
        color: var(--black);
        font-family: var(--english);
        font-size: 0.6vw;
        font-style: normal;
        font-weight: 500;
    }
`;
S.LogoutBtn = styled.div`
    border-right: 0.1rem solid var(--black);
    margin-left: 1vw;
    padding-right: 0.5vw;
`;
S.WithdrawalBtn = styled.div`
    padding-left: 0.5vw;
`;
export { S };
