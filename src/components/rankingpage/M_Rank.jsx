import MHamburger from '../_common/M_Hamburder';
import S from './M_Ranking.style';
import NewButton from './leftSection/Button';
import TabContainer from './leftSection/Tab';
import Toggle from './leftSection/Toggle';
import RankingList from './leftSection/RankingList';
import MyScore from './leftSection/MyScore';

const MobileRank = ({ isMyData }) => {
    return (
        <S.FlexContainer>
            <MHamburger />
            {isMyData ? (
                <div style={{ marginTop: '30%', width: '30%' }}>
                    <NewButton />
                </div>
            ) : (
                <div
                    style={{
                        width: '100%',
                        marginTop: '20%',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <MyScore />
                </div>
            )}
            <TabContainer />
            <RankingList />
        </S.FlexContainer>
    );
};
export default MobileRank;
