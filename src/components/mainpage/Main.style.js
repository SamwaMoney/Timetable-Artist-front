import styled from 'styled-components';
import cursor from '../../assets/mainpage/custom_cursor.png';
const S = {};
S.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 15%;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
        180deg,
        var(--green) 0%,
        var(--background) 100%
    );
`;
S.Korean = styled.div`
    font-size: 1vw;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 2.5% 0;
`;
S.LogoContainer = styled.div`
    width: 25vw;
    perspective: 1000px;
    cursor: url(${cursor}), auto;

    &:hover .hover-text {
        visibility: visible;
    }
`;
S.FrontLogo = styled.img`
    position: absolute;
    width: 100%;
    backface-visibility: hidden;
    transition: transform 0.5s;
    &.clicked {
        transform: rotateY(-180deg);
    }
`;
S.BackLogo = styled.img`
    width: 100%;
    backface-visibility: hidden;
    transition: transform 0.5s;
    &.clicked {
        transform: rotateY(180deg);
    }
`;
S.HoverText = styled.div`
    width: max-content;
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;
    font-size: 0.8vw;
    color: var(--white);
    padding: 2% 5%;
    border-radius: 3vw;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    visibility: hidden;
`;
S.LoginBtn = styled.button`
    border-radius: 22px;
    border: 0.1rem solid #000;
    background: var(--green);
    margin-bottom: 2.5%;

    width: 25%;
    height: 8%;

    color: #000;
    text-align: center;
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

    width: 25%;
    height: 8%;

    color: var(--white);
    text-align: center;
    font-size: 1.2vw;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    cursor: pointer;
`;
export { S };
