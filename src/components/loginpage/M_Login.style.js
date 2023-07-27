import { styled } from 'styled-components';
const L = {};
L.Wrapper = styled.div`
    background: var(--background);
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    overflow: hidden;
`;
L.TabWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80%;
    align-items: center;
    text-align: center;
`;
L.Tab = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 0;
    margin-bottom: 0;
    height: 5vh;
`;
L.TabTittle = styled.li`
    display: flex;
    flex-direction: column;
    margin: auto;
    cursor: pointer;

    color: var(--black);
    text-align: center;
    font-size: 4.3vw;
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
    width: 80vw;
    height: 0.3vh;
    background: var(--black);
`;
L.ActiveLine = styled.div`
    width: 40vw;
    height: 0.2vh;
    margin-top: auto;
    &.active {
        background: var(--black);
    }
`;
export { L };
