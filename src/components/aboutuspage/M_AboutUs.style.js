import { styled } from 'styled-components';
const A = {};
A.Wrapper = styled.div`
    background: linear-gradient(
        180deg,
        var(--green) 0%,
        var(--background) 100%
    );
    width: 100%;
    height: 100%;
`;
A.ContentWrapper = styled.div`
    padding-top: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
A.Logo = styled.img`
    width: 50vw;
`;
A.TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10%;
`;
A.Tittle = styled.p`
    color: var(--black);
    font-size: 6vw;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 8%;
`;
A.Text = styled.p`
    text-align: center;
    color: var(--black);
    font-size: 3.5vw;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 13%;
`;
A.TeamBox = styled.div`
    display: flex;
    flex-direction: column;
    p {
        margin: 1vw 0;
        color: var(--black);
        text-align: center;
        font-size: 3.5vw;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    .team {
        font-size: 5vw;
        margin-bottom: 2vw;
        margin-top: 7vw;
    }
    .top {
        margin-top: 0;
    }
`;
export { A };
