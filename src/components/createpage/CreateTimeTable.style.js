import styled from 'styled-components';

const S = {};

S.BasicContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
S.BasicFont = styled.div`
    color: var(--black);
    font-size: 1vw;
    font-weight: 600;
`;
S.Wrapper = styled(S.BasicContainer)`
    background-color: var(--background);
    height: 100vh;
    width: 100vw;
`;
S.Hamburger = styled.div`
    width: 13.4%;
    height: 70%;
    border: 0.1rem solid black;
    background: var(
        --hamburger,
        linear-gradient(180deg, #b0ff00 0%, #e2e2e2 100%)
    );
`;
S.Container = styled(S.BasicContainer)`
    margin-left: 1%;
    width: 60%;
    height: 70%;
    border: 0.1rem solid black;
    background: linear-gradient(180deg, #b0ff00 0%, #e2e2e2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
`;

S.SmallContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 49.5%;
    height: 100%;
    overflow-y: scroll;
`;
export { S };
