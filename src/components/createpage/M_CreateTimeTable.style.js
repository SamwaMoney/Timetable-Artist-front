import styled from 'styled-components';

const S = {};

S.BasicContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

S.MWrapper = styled.div`
    background-color: var(--background);
    width: 100%;
    height: 100%;
`;

S.MInnerContainer = styled(S.BasicContainer)`
    padding-top: 25%;
`;

S.MButtonDiv = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    margin-bottom: 4.3vh;
`;

S.MResetBtn = styled.button`
    width: 13.84vw;
    height: 3vh;

    border-radius: 72px;
    border: 3px solid var(--black);
    background: var(--red, #f22b02);

    font-size: 3vw;
    font-weight: 500;
`;

S.MCompleteBtn = styled.button`
    font-size: 4vw;
    font-weight: 700;

    width: 29.38vw;
    height: 5vh;
    border-radius: 72px;
    border: 3px solid var(--black, #171717);
    background: var(--green, #b0ff00);
`;

S.MTimeTableText = styled.div`
    width: 80%;
    font-size: 5.5vw;
    font-weight: 700;

    margin-bottom: 10%;
`;

S.MNicknameText = styled.span`
    font-size: 5.5vw;
    font-weight: 700;
    border-bottom: 3px solid black;
    padding-bottom: 4px;
`;

S.MAddButtonDiv = styled.div`
    width: 80%;
    margin-top: 6%;
    margin-bottom: 35%;

    display: flex;
    justify-content: flex-end;
`;

S.MAddButton = styled.img`
    width: 20.5%;
    cursor: pointer;
`;

export { S };
