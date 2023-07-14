import styled from 'styled-components';

const S = {};
S.FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    width:100%:
    height:100%;
`;

S.MenuBtn = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    border-bottom: 0.1rem solid var(--black);
    overflow: hidden;
    padding-left: 20px;
    a {
        color: var(--black);
        font-family: var(--korean);
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        display: flex;
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
    margin-top: auto;
    cursor: pointer;
    overflow: hidden;
    position: absolute;
    bottom: 0;

    color: var(--black);
    font-family: var(--english);
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 154.953%;
    display: flex;
    align-items: center;

    p {
        margin-left: 0.6rem;
    }
`;

export default S;
