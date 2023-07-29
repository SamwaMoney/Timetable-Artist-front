import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import hamburgerIcon from '../../assets/_common/hamburger.svg';
const M_ScoreHamburgerBtn = () => {
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

export default M_ScoreHamburgerBtn;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 6vh;
    padding-left: 5vw;
    background: var(--background);
`;
const HamburgerButton = styled.img`
    position: relative;
    width: 10vw;
    background: transparent;
`;
