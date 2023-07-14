import { styled } from 'styled-components';
import MHamburger from '../components/_common/M_Hamburger';
const MenuPage = () => {
    return (
        <Wrapper>
            <MHamburger />
        </Wrapper>
    );
};
export default MenuPage;

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        var(--green) 0%,
        var(--background) 100%
    );
`;
