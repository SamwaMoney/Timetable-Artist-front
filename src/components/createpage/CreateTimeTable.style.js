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
    justify-content: space-evenly;

    overflow-y: scroll;
`;

S.TimeTableDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 35.7%;

    margin-bottom: 4%;
`;

S.ResetDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    margin-bottom: 8%;
`;

S.NoticeText = styled.div`
    font-size: 0.5625vw;
    font-weight: 500;
`;

S.ResetBtn = styled.button`
    width: 4vw;
    height: 4vh;
    /* padding: 5px 9px; */

    border-radius: 1.4rem;
    border: 0.08rem solid var(--black);
    background: var(--red, #f22b02);

    font-size: 0.75vw;
    font-weight: 500;

    /* position: absolute;
    top: -3rem; */
`;
export { S };
