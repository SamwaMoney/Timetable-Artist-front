import styled from 'styled-components';
import { M, S } from '../components/rankingpage/Ranking.style';
import Error from '../components/_common/Error';
import Hamburger from '../components/_common/Hamburger';

const ErrorPage = () => {
    return (
        <S.Wrapper>
            <Hamburger />
            <Error />
        </S.Wrapper>
    );
};

export default ErrorPage;
