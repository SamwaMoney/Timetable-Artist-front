import { styled } from 'styled-components';
import { useState } from 'react';
import { FlexCenter } from '../Ranking.style';
import { useSearchParams } from 'react-router-dom';
import S from '../Ranking.style';
const Toggle = () => {
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

    return (
        <S.ToggleContainer>
            <S.ToggleButton onClick={handleChange}>
                <S.Slider sort={sort} />
            </S.ToggleButton>
            <S.Text>
                {sort === 'worst' ? '최고의 시간표 보기' : '최악의 시간표 보기'}
            </S.Text>
        </S.ToggleContainer>
    );
};
export default Toggle;
