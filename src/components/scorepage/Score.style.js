import { styled } from 'styled-components';
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
    width: ${props => props.width};
    border: 0.1rem solid black;
    background: var(
        --hamburger,
        linear-gradient(180deg, #b0ff00 0%, #e2e2e2 100%)
    );
`;
S.Container = styled(S.BasicContainer)`
    margin-left: 1%;
    width: 60%;
    height: ${props => props.height || '70%'};
    border: 0.1rem solid black;
    background: linear-gradient(180deg, #e2e2e2 0%, #b0ff00 100%);
`;
S.SmallContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 100%;
    overflow-y: scroll;
`;
S.Title = styled.div`
    color: var(--black);
    font-size: 1.3vw;
    font-weight: 600;
    text-align: center;
    margin: 7% 0% 2% 0%;
`;
S.Score = styled.div`
    color: var(--blue);
    font-size: 1.6vw;
    font-weight: 800;
    text-align: center;
    margin-bottom: 3%;
    .type {
        color: var(--black);
    }
`;
S.Img = styled.img`
    width: 45vh;
`;
S.Save = styled.button`
    margin-top: 4%;
    background-color: rgba(255, 255, 255, 0);
    color: var(--black);
    font-size: 0.9vw;
    font-weight: 500;
    text-align: center;
`;
S.TypeImg = styled.img`
    background-color: var(--background);
    border-radius: 22px;
    width: 40%;
    margin-bottom: 7%;
`;
S.ResultContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 7%;
`;
S.Part = styled.div`
    white-space: pre-wrap;
    font-size: 1vw;
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
    border: 0.1rem solid var(--black);
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
    font-size: 1vw;
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
    border: 0.1rem solid var(--black);
    background: var(--white);

    padding: 3% 3% 3% 3%;
    width: 60%;
    margin-bottom: 10%;

    .text {
        margin: 5% 0% 5% 0%;
        text-align: center;
    }
`;
S.Hide = styled(S.BasicContainer)`
    font-size: 0.9vw;
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
    border: 0.1rem solid var(--black);
    background: var(--blue);
    width: 50%;
    padding: 3%;

    color: var(--white);
    font-size: 1vw;
    font-weight: 600;
    margin-bottom: 10%;
`;
S.UploadedBtn = styled.button`
    border-radius: 34px;
    background: var(--white);
    width: 50%;
    padding: 3%;

    color: var(--gray);
    font-size: 0.75vw;
    font-weight: 400;
    margin-bottom: 10%;
`;
S.IconContainer = styled(S.BasicContainer)`
    margin: 3% 3% 10% 3%;
    gap: 0% 20%;
`;
S.NoData = styled(S.BasicContainer)`
    flex-direction: column;
    width: 100%;
    height: 100%;
`;
S.NoDataText = styled.div`
    font-size: 1.2vw;
    font-weight: 500;
    margin-bottom: 3%;
`;
S.Button = styled.button`
    border-radius: 33px;
    border: 0.1rem solid var(--black);
    background: var(--green);
    width: 25%;
    height: 10%;
    font-size: 1vw;
    font-weight: 600;
    text-align: center;
`;
export { S };
