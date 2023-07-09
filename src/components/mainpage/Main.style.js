import styled from 'styled-components';
const S = {};
S.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 15.25rem;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    align-items: center;
    background: linear-gradient(180deg, var(--green) 0%, var(--background) 100%);
`;
S.Korean = styled.div`
    font-family: var(--korean);
    font-size: 1vw;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 2.5rem 0;
`;
S.Logo = styled.img`
    width: 25.1rem;
    height: 22.8rem;
    margin-top: 9.8rem;
`;
S.LoginBtn = styled.button`
    border-radius: 22px;
    border: 0.1rem solid #000;
    background: var(--green);
    margin-bottom: 2.1rem;

    width: 20.6rem;
    height: 5rem;

    color: #000;
    text-align: center;
    font-family: var(--korean);
    font-size: 1.2vw;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    cursor: pointer;
`;
S.RankingBtn = styled.button`
    border-radius: 22px;
    border: 0.1rem solid #000;
    background: var(--blue);
    margin-bottom: 7.38rem;

    width: 20.6rem;
    height: 5rem;

    color: var(--white);
    text-align: center;
    font-family: var(--korean);
    font-size: 1.2vw;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    cursor: pointer;
`;
export { S };
