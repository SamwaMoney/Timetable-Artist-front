import { styled, css } from 'styled-components';

export const FlexCenter = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FlexMiddle = css`
    display: flex;
    justify-content: center;
`;

const Section = styled.div`
    overflow: scroll;
    border: 0.1rem solid black;
    width: 534px;
    height: 588px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--background);
    /* display: block; */
`;

const Header = styled.div`
    width: 204px;
    height: 588px;
    background-color: grey;
`;

const S = { Section, Header, FlexCenter };

export default S;
