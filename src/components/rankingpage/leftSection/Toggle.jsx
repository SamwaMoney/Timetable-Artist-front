import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { S, M } from '../Ranking.style';

const Toggle = ({ isMobile }) => {
    //최악의 시간표가 false, 최고의 시간표가 true
    const [sort, setSort] = useState('worst');
    const [searchParams, setSearchParams] = useSearchParams();

    const handleChange = () => {
        if (sort === 'best') {
            setSort('worst');
            searchParams.set('sort', 'worst');
        } else if (sort === 'worst') {
            setSort('best');
            searchParams.set('sort', 'best');
        }
        setSearchParams(searchParams);
    };

    return isMobile ? (
        <M.ToggleWrapper>
            <M.ToggleContainer>
                <M.ToggleButton onClick={handleChange}>
                    <M.Slider sort={sort} />
                </M.ToggleButton>
            </M.ToggleContainer>
            <M.ToggleText>
                {sort === 'worst' ? '최고의 시간표 보기' : '최악의 시간표 보기'}
            </M.ToggleText>
        </M.ToggleWrapper>
    ) : (
        <S.ToggleContainer>
            <S.ToggleButton onClick={handleChange}>
                <S.Slider sort={sort} />
            </S.ToggleButton>
            <S.ToggleText>
                {sort === 'worst' ? '최고의 시간표 보기' : '최악의 시간표 보기'}
            </S.ToggleText>
        </S.ToggleContainer>
    );
};
export default Toggle;
