import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const S = {};
S.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 204px;
    height: 588px;
    flex-shrink: 0;

    border: 0.1rem solid var(--black);
    background: linear-gradient(180deg, var(--green) 0%, var(--background) 100%);
`;
S.MenuWrapper = styled.div`
    height: auto;
`;
S.MenuBtn = styled.div`
    display: flex;
    width: 204px;
    height: 52px;
    justify-content: center;
    flex-shrink: 0;
    border-bottom: 0.1rem solid var(--black);
    a {
        color: var(--black);
        text-align: center;
        font-family: var(--english);
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
    }
    .aboutus {
        font-size: 24px;
    }
`;
S.WithdrawalBtn = styled.div`
    bottom: 0;
    width: 204px;
    height: 52px;
    border-top: 0.1rem solid var(--black);
    margin-top: auto;

    color: var(--black);
    font-family: var(--english);
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 154.953%;
    display: flex;
    align-items: center;

    p {
        margin-left: 11px;
    }
`;
S.NavLink = styled(NavLink)`
    text-decoration: none;
    width: 204px;
    height: 52px;
`;
export { S };