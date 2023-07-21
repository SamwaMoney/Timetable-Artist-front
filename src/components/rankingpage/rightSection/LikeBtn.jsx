import NoLike from '../../../assets/rankingpage/heart1.png';
import GetLike from '../../../assets/rankingpage/heart2.png';
import { M } from '../Ranking.style';
const HeartBtn = ({ isLike }) => {
    return isLike ? (
        <M.HeartContainer>
            <M.Icon src={GetLike} />
            <div>0</div>
        </M.HeartContainer>
    ) : (
        <M.HeartContainer>
            <M.Icon src={NoLike} />
            <div>0</div>
        </M.HeartContainer>
    );
};
export default HeartBtn;
