import { styled, css } from 'styled-components';
const M = {};

M.FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width:100%:
    height:100%;
    background: var(--background);
    overflow: scroll;
`;

M.ButtonContainer = styled.div`
    margin-top: 23%;
    width: 100%;
`;
M.RankText = styled.div`
    font-family: Montserrat;
    font-weight: 550;
    font-size: 1.4rem;
`;
M.Text = styled.div`
    font-family: Montserrat;
    font-size: 30px;
    font-weight: 500;
`;
export default M;
