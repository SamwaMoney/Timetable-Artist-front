import MHamburgerButton from '../_common/M_HamburgerBtn';
import TabContainer from './leftSection/Tab';
import RankingList from './leftSection/RankingList';
import MyScore from './leftSection/MyScore';
import { M } from './Ranking.style';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { mock_ranking } from '../../_mock/ranking';

//전역 변수 => 현재 시간표가 있는가?
//로그인 상태 => 시간표 있으면 내 점수, 내 랭킹 보여주기
//로그인 상태 => 시간표 없으켠 새 시간표 만들기 클릭시 시간표 페이지로 이동
//로그인 안된 상태 => 새 시간표 만들기 클릭시 로그인페이지 이동

const MobileRank = ({ isMyData }) => {
    const [data, setData] = useState(mock_ranking);
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();
    return (
        <M.FlexContainer>
            <MHamburgerButton />
            {isMyData ? (
                <MyScore isMobile={true} />
            ) : isLogin ? (
                <M.NewButton
                    isMobile={true}
                    onClick={() => {
                        navigate('/create');
                    }}
                >
                    시간표 등록하기
                </M.NewButton>
            ) : (
                <M.NewButton
                    isMobile={true}
                    onClick={() => {
                        navigate('/login');
                    }}
                >
                    시간표 등록하기
                </M.NewButton>
            )}
            <TabContainer isMobile={true} />
            <RankingList isMobile={true} data={data} />
        </M.FlexContainer>
    );
};

export default MobileRank;
