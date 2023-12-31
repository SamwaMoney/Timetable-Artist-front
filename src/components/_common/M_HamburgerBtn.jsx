import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import hamburgerIcon from '../../assets/_common/hamburger.svg';
const MHamburgerButton = () => {
    const navigate = useNavigate();

    const onMoveMenuPage = () => {
        navigate('/menu');
    };
    return (
        <Wrapper>
            <HamburgerButton onClick={onMoveMenuPage} src={hamburgerIcon} />
        </Wrapper>
    );
};

export default MHamburgerButton;

const Wrapper = styled.div`
    z-index: 100;
    width: 100%;
    height: 20vw;
    display: flex;
    align-items: center;
    padding-top: 6vh;
    padding-left: 5vw;
    position: fixed;
    top: 0;
    background-color: var(--background);
`;
const HamburgerButton = styled.img`
    position: relative;
    width: 10vw;
`;
