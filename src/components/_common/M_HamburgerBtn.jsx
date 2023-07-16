import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const MHamburgerButton = () => {
    const navigate = useNavigate();

    const onMoveMenuPage = () => {
        navigate('/menu');
    };
    return (
        <Wrapper>
            <HamburgerButton onClick={onMoveMenuPage}>
                <Line1 />
                <Line2 />
                <Line3 />
            </HamburgerButton>
        </Wrapper>
    );
};

export default MHamburgerButton;

const Wrapper = styled.div`
    z-index: 100;
    width: 100%;
    height: 20vw;
    background-color: var(--background);
    border-bottom: 0.3rem solid var(--green);
    display: flex;
    align-items: center;
    padding-top: 5vw;
    position: fixed;
    top: 0;
`;
const HamburgerButton = styled.div`
    position: relative;
    left: 7%;
    width: 65px;
    height: 80px;
    span {
        background-color: black;
        position: absolute;
        width: 100%;
        height: 1vw;
        font-weight: 500;
        border-radius: 3px;
    }
`;

const Line1 = styled.span`
    top: 0px;
`;

const Line2 = styled.span`
    top: 2.5vw;
`;

const Line3 = styled.span`
    top: 5vw;
`;
