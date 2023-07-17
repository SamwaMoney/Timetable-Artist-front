import Loading from '../components/_common/Loading';
import { S } from '../components/rankingpage/Ranking.style';
import Hamburger from '../components/_common/Hamburger';
const LoadingPage = () => {
    return (
        <S.Wrapper>
            <Hamburger />
            <Loading />
        </S.Wrapper>
    );
};

export default LoadingPage;
