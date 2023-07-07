import { styled } from "styled-components";
const L = {};
L.Wrapper = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background: var(--background);
`;
L.ContentWrapper = styled.div`
    width: 1084px;
    height: 588px;
    border: 0.1rem solid var(--black);
    background: linear-gradient(180deg, var(--green) 0%, var(--background) 100%);
    margin-left: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    .div {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
L.Logo = styled.img`
    width: 330px;
`;
L.Tab = styled.ul`
    display: flex;
    justify-content: space-around;
    margin: auto;
    margin-top: 48px;
    margin-bottom: 0;
    width: 394px;
    height: 37px;
`;
L.TabWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex-grow: 1;
`;
L.TabTittle = styled.li`
    display: flex;
    flex-direction: column;
    width: 197px;
    cursor: pointer;

    color: var(--black);
    text-align: center;
    font-family: var(--korean);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
L.TabItem = styled.div`
    display: flex;
    flex-direction: column;
`;
L.Line = styled.div`
    width: 394px;
    height: 4px;
    background: var(--black);
`;
L.ActiveLine = styled.div`
    height: 2px;
    width: 197px;
    margin-top: auto;
    &.active {
        background: var(--black);
    }
`;

export { L };