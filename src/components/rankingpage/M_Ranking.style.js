import { styled, css } from 'styled-components';
const S = {};

S.FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width:100%:
    height:100%;
    background: var(--background);
    overflow: scroll;
`;

S.ButtonContainer = styled.div`
    margin-top: 23%;
    width: 100%;
`;
export default S;
