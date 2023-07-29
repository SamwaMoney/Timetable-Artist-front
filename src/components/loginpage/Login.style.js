import { styled } from 'styled-components';
const L = {};
L.Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    background: var(--background);
`;
L.ContentWrapper = styled.div`
    width: 60%;
    height: 70%;
    border: 0.1rem solid var(--black);
    background: linear-gradient(
        180deg,
        var(--green) 0%,
        var(--background) 100%
    );
    margin-left: 1%;
    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    .div {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
L.Logo = styled.img`
    width: 18vw;
    margin: 0 9%;
`;
L.Tab = styled.ul`
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 0;
    margin-bottom: 0;
    height: 5vh;
`;
L.TabWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80%;
    align-items: center;
    text-align: center;
    flex-grow: 1;
`;
L.TabTittle = styled.li`
    display: flex;
    flex-direction: column;
    margin: auto;
    cursor: pointer;

    color: var(--black);
    text-align: center;
    font-size: 1.2vw;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    &.active {
        font-weight: 700;
    }
`;
L.TabItem = styled.div`
    display: flex;
    flex-direction: column;
`;
L.Line = styled.div`
    width: 20vw;
    height: 0.3vh;
    background: var(--black);
`;
L.ActiveLine = styled.div`
    width: 10vw;
    height: 0.2vh;
    margin-top: auto;
    &.active {
        background: var(--black);
    }
`;

export { L };
