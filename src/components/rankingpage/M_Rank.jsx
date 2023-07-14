import MHamburgerButton from '../_common/M_HamburgerBtn';
import NewButton from './leftSection/Button';
import TabContainer from './leftSection/Tab';
import RankingList from './leftSection/RankingList';
import MyScore from './leftSection/MyScore';
import { useState } from 'react';
import M from './M_Ranking.style';

const MobileRank = ({ isMyData }) => {
    const isMobile = true;
    return (
        <M.FlexContainer>
            <MHamburgerButton />
            {isMyData ? (
                <div
                    style={{
                        width: '100%',
                        marginTop: '20%',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <MyScore isMobile={isMobile} />
                </div>
            ) : (
                <div style={{ marginTop: '30%', width: '30%' }}>
                    <NewButton isMobile={isMobile} />
                </div>
            )}
            <TabContainer isMobile={isMobile} />
            <RankingList isMobile={isMobile} />
        </M.FlexContainer>
    );
};
export default MobileRank;
