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

const LeftSection = styled.div`
    border: 1px solid black;
    width: 534px;
    height: 588px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: scroll;
    background-color: var(--background);
`;

const RightSection = styled.div`
    background-color: pink;
    width: 534px;
    height: 588px;
`;

const Header = styled.div`
    width: 204px;
    height: 588px;
    background-color: grey;
`;

const S = { LeftSection, RightSection, Header, FlexCenter };

export default S;
