import styled from 'styled-components';
const S = {};
S.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 244px;
    //padding-bottom: 110px;
    //height: 100%;
    height: 100vh;
    align-items: center;
    background: linear-gradient(180deg, var(--green) 0%, var(--background) 100%);
`;
S.Korean = styled.div`
    font-family: var(--korean);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 41px 0;
`;
S.Logo = styled.img`
    width: 403px;
    height: 365px;
    margin-top: 157px;
`;
S.LoginBtn = styled.button`
    border-radius: 22px;
    border: 1px solid #000;
    background: var(--green);
    margin-bottom: 34px;

    width: 330px;
    height: 80px;
    flex-shrink: 0;

    color: #000;
    text-align: center;
    font-family: var(--korean);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    cursor: pointer;
`;
S.RankingBtn = styled.button`
    border-radius: 22px;
    border: 1px solid #000;
    background: var(--blue);
    margin-bottom: 118px;

    width: 330px;
    height: 80px;
    flex-shrink: 0;

    color: var(--white);
    text-align: center;
    font-family: var(--korean);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    cursor: pointer;
`;
export { S };
