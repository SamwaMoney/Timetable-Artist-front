import ChangeLoading from '../components/_common/ChangeLoading';
import { S } from '../components/rankingpage/Ranking.style';
import Hamburger from '../components/_common/Hamburger';
const Loading2Page = () => {
    return (
        <S.Wrapper>
            <Hamburger />
            <ChangeLoading />
        </S.Wrapper>
    );
};

export default Loading2Page;
