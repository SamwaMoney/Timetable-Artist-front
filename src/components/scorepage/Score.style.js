import { styled } from 'styled-components';
const S = {};
S.BasicContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
S.Wrapper = styled(S.BasicContainer)`
    background-color: var(--background);
    height: 100vh;
    width: 100vw;
`;
S.Hamburger = styled.div`
    width: 13.4%;
    height: 60%;
    border: 0.1rem solid black;
    background: var(
        --hamburger,
        linear-gradient(180deg, #b0ff00 0%, #e2e2e2 100%)
    );
`;
S.Container = styled(S.BasicContainer)`
    margin-left: 1%;
    width: 60%;
    height: 60%;
    border: 0.1rem solid black;
    background: linear-gradient(180deg, #e2e2e2 0%, #b0ff00 100%);
`;
S.SmallContainer = styled(S.BasicContainer)`
    flex-direction: column;
    width: 50%;
`;
S.S.NoData = styled(S.BasicContainer)`
    flex-direction: column;
    width: 100%;
`;
S.NoDataText = styled.div`
    font-family: var(--korean);
    font-size: 1.3vw;
    font-weight: 500;
    margin-bottom: 3%;
`;
S.Button = styled.button`
    border-radius: 33px;
    border: 0.1rem solid var(--black);
    background: var(--green);
    width: 25%;
    height: 10%;
    .text {
        font-family: var(--korean);
        font-size: 1vw;
        font-weight: 600;
        text-align: center;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
`;
export { S };
