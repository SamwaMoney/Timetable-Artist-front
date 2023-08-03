import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { S, M } from '../Ranking.style';
import { useLocation } from 'react-router-dom';

const Toggle = ({ isMobile }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    let sort = params.get('sort') || 'LOWEST';

    const handleChange = () => {
        if (sort === 'HIGHEST') {
            searchParams.set('sort', 'LOWEST');
            searchParams.set('rank', 1);
        } else if (sort === 'LOWEST') {
            searchParams.set('sort', 'HIGHEST');
            searchParams.set('rank', 1);
        }
        setSearchParams(searchParams);
    };

    return isMobile ? (
        <M.ToggleWrapper>
            <S.ToggleContainer>
                <M.ToggleButton onClick={handleChange}>
                    <M.Slider sort={sort} />
                </M.ToggleButton>
            </S.ToggleContainer>
            <M.ToggleText>
                {sort === 'LOWEST'
                    ? '최고의 시간표 보기'
                    : '최악의 시간표 보기'}
            </M.ToggleText>
        </M.ToggleWrapper>
    ) : (
        <S.ToggleWrapper>
            <S.ToggleContainer width={20}>
                <S.ToggleButton onClick={handleChange}>
                    <S.Slider sort={sort} />
                </S.ToggleButton>
                <S.ToggleText>
                    {sort === 'LOWEST'
                        ? '최고의 시간표 보기'
                        : '최악의 시간표 보기'}
                </S.ToggleText>
            </S.ToggleContainer>
        </S.ToggleWrapper>
    );
};
export default Toggle;
