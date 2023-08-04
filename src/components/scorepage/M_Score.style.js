import { styled } from 'styled-components';
const S = {};
S.BasicContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;
S.BasicFont = styled.div`
    color: var(--black);
    font-size: 4vw;
    font-weight: 600;
`;
S.Wrapper = styled(S.BasicContainer)`
    width: 100vw;
    height: 100vh;
`;
S.ScoreContainer = styled(S.BasicContainer)`
    width: 100%;
    height: fit-content;
    background-color: var(--background);
`;
S.TypeContainer = styled(S.BasicContainer)`
    width: 100%;
    background: linear-gradient(180deg, #e2e2e2 0%, #b0ff00 100%);
`;
S.ShareContainer = styled(S.BasicContainer)`
    width: 100%;
    background: var(--green);
`;
S.Title = styled.div`
    color: var(--black);
    font-size: 5.5vw;
    font-weight: 600;
    text-align: center;
    .score {
        margin: 20% 0% 5% 0%;
    }
    .type {
        margin: 25% 0% 5% 0%;
    }
`;
S.Score = styled.div`
    color: var(--blue);
    font-size: 7.5vw;
    font-weight: 800;
    text-align: center;
    margin-bottom: 8%;
    .type {
        color: var(--black);
        margin-bottom: -10%;
    }
`;
S.TimeTable = styled.div`
    width: 95vw;
`;
S.Save = styled.button`
    margin-top: 8%;
    background-color: rgba(255, 255, 255, 0);
    color: var(--black);
    font-size: 4vw;
    font-weight: 500;
    text-align: center;
`;
S.TypeImg = styled.img`
    background-color: var(--background);
    border-radius: 22px;
    width: 50%;
    margin: 4% 0 7% 0;
`;
S.ResultContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 7%;
`;
S.Part = styled.div`
    white-space: pre-wrap;
    font-size: 4vw;
    font-weight: 500;

    padding-top: 2%;
    margin-left: 15%;
    width: 24%;

    .good {
        background: radial-gradient(
            40% 50% at 50% 50%,
            #a0c1ff 12.33%,
            rgba(217, 217, 217, 0) 100%
        );
    }

    .bad {
        background: radial-gradient(
            40% 50% at 50% 50%,
            #ff8f78 12.33%,
            rgba(217, 217, 217, 0) 100%
        );
    }
`;
S.ResultBox = styled(S.BasicFont)`
    display: flex;
    flex-direction: column;
    justify-content: center;

    border-radius: 13px;
    border: 0.05rem solid var(--black);
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0.2) 100%
    );

    padding: 3% 3% 3% 3%;
    width: 45%;
    margin-left: 5%;

    .text {
        margin: 6.5% 2% 6.5% 2%;
        .plus {
            color: var(--blue);
        }
        .minus {
            color: var(--red);
        }
    }
`;
S.Special = styled.div`
    font-size: 4vw;
    font-weight: 500;
    text-align: center;
    border-radius: 260px;
    background: radial-gradient(
        50% 50% at 50% 50%,
        #fffa8a 34.2%,
        rgba(217, 217, 217, 0) 100%
    );
    width: 80%;
    padding: 5% 0% 5% 0%;
`;
S.SpecialBox = styled(S.BasicFont)`
    display: flex;
    flex-direction: column;
    justify-content: center;

    border-radius: 13px;
    border: 0.05rem solid var(--black);
    background: var(--white);

    padding: 3% 3% 3% 3%;
    width: 80%;
    margin-bottom: 10%;

    .text {
        margin: 5% 0% 5% 0%;
        text-align: center;
    }
`;
S.Hide = styled(S.BasicContainer)`
    flex-direction: row;
    justify-content: center;
    font-size: 3vw;
    font-weight: 500;
    width: 100%;
    margin-bottom: 2%;
    .text {
        margin-left: 2%;
    }
`;
S.Icon = styled.img`
    width: ${props => props.width};
`;
S.UploadBtn = styled.button`
    border-radius: 34px;
    border: 0.05rem solid var(--black);
    background: var(--blue);
    width: 60%;
    padding: 3%;

    color: var(--white);
    font-size: 4vw;
    font-weight: 600;
    margin-bottom: 10%;
`;
S.UploadedBtn = styled.button`
    border-radius: 34px;
    background: var(--white);
    width: 60%;
    padding: 3%;

    color: var(--gray);
    font-size: 3vw;
    font-weight: 400;
    margin-bottom: 10%;
`;
S.IconContainer = styled(S.BasicContainer)`
    flex-direction: row;
    justify-content: center;
    margin: 3% 3% 10% 3%;
    gap: 20%;
`;
S.NoData = styled(S.BasicContainer)`
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: var(
        --hamburger,
        linear-gradient(180deg, #b0ff00 0%, #e2e2e2 100%)
    );
    padding-top: 40vh;
`;
S.NoDataText = styled.div`
    font-size: 4vw;
    font-weight: 500;
    margin-bottom: 8%;
`;
S.Button = styled.button`
    border-radius: 33px;
    border: 0.05rem solid var(--black);
    background: var(--green);
    width: 50%;
    height: 8%;
    font-size: 4vw;
    font-weight: 700;
    text-align: center;
`;
export { S };
