import styled from 'styled-components';

const S = {};
S.FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .login {
        width: 100%;
        height: 8vh;
        margin-top: auto;
        border-top: 0.05rem solid var(--black);
        a {
            padding: 0;
            height: 8vh;
        }
    }
`;

S.MenuBtn = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 0.05rem solid var(--black);
    overflow: hidden;
    padding-left: 5%;
    a {
        color: var(--black);
        font-family: var(--korean);
        font-size: 5.8vw;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        display: flex;
        align-items: center;
        padding: 10% 0 10% 0;
        text-decoration: none;
        width: 100%;
        height: 6vh;
    }
    .aboutus {
        font-size: 1.4vw;
        font-family: var(--english);
    }
`;
S.BottomBox = styled.div`
    width: 100%;
    height: 8vh;
    margin-top: auto;
    cursor: pointer;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    border-top: 0.05rem solid var(--black);
    div {
        color: var(--black);
        font-family: var(--english);
        font-size: 4vw;
        font-style: normal;
        font-weight: 500;
    }
`;
S.LogoutBtn = styled.div`
    padding-left: 5%;
    padding-right: 3%;
    border-right: 0.1rem solid var(--black);
`;
S.WithdrawalBtn = styled.div`
    padding: 0 3%;
`;

export default S;
