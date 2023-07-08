import { S } from './Score.style';
import { useState } from 'react';
const Score = () => {
    const [data, setData] = useState([]);
    return (
        <S.Wrapper>
            {/*햄버거*/}
            <S.Hamburger />
            <S.Container>
                {data.length !== 0 ? (
                    <>
                        <S.SmallContainer></S.SmallContainer>
                        <S.SmallContainer></S.SmallContainer>
                    </>
                ) : (
                    <S.NoData>
                        <S.NoDataText>Σ(‘⊙ₒ ⊙’；)</S.NoDataText>
                        <S.NoDataText>아직 시간표가 없어요!</S.NoDataText>
                        <S.Button>
                            <div className='text'>시간표 만들러 가기</div>
                        </S.Button>
                    </S.NoData>
                )}
            </S.Container>
        </S.Wrapper>
    );
};
export default Score;
