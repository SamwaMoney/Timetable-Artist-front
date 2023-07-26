import { styled } from 'styled-components';
const A = {};
A.Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    background: var(--background);
`;
A.ContentWrapper = styled.div`
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
`;
A.Logo = styled.img`
    width: 18vw;
    margin: 0 9.15%;
`;
A.AboutUsWrapper = styled.div`
    height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2vh 3vw;
    flex-grow: 1;
`;
A.TextBox = styled.div`
    .title {
        color: var(--black);
        text-align: center;
        font-size: 1.6vw;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-bottom: 2vw;
    }
    .eng {
        font-family: var(--english);
    }
    .content {
        color: var(--black);
        text-align: center;
        font-size: 0.8vw;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-bottom: 3vw;
    }
    .last-content {
        margin-bottom: 0;
    }
    .team {
        color: var(--black);
        text-align: center;
        font-size: 1.2vw;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin: 1vw;
    }
`;
A.TeamBox = styled.div`
    display: flex;
    flex-direction: column;
    p {
        margin: 0.3vw;
        color: #000;
        text-align: center;
        font-size: 0.8vw;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
`;
export { A };
