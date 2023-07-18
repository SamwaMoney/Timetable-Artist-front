import { styled } from "styled-components";
const M = {};
M.Wrapper = styled.div`
    background: linear-gradient(180deg, var(--green) 0%, var(--background) 100%);
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10% 0;
    position: fixed;
    overflow: hidden;
`;
M.LogoContainer = styled.div`
    width: 78%;
    perspective: 1000px;
    cursor: pointer;
`;
M.FrontLogo = styled.img`
    position: absolute;
    width: 100%;
    backface-visibility: hidden;
    transition: transform 0.5s;
    &.clicked {
        transform: rotateY(-180deg);
    }
`;
M.BackLogo = styled.img`
    width: 100%;
    backface-visibility: hidden;
    transition: transform 0.5s;
    &.clicked {
        transform: rotateY(180deg);
    }
`;
M.Text = styled.p`
    position: relative;
    font-size: 4vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
M.BtnContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 24vh;
`;
M.Btn = styled.button`
    width: 80vw;
    height: 10vh;
    text-align: center;
    border-radius: 22px;
    border: 0.05rem solid var(--black);
    
    font-size: 5.5vw;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    &.login {
        background: var(--green);
        color: var(--black);
    }
    &.ranking {
        background: var(--blue);
        color: var(--white);
    }
`;
export { M };