import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { S } from '../Ranking.style';
import { M } from '../Ranking.style';
import { useLocation } from 'react-router-dom';

const TabContainer = ({ isMobile }) => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const sort = params.get('sort');
    const [searchParams, setSearchParams] = useSearchParams();

    const onMoveSortPage = sortValue => {
        console.log(sortValue);
        if (sortValue === 'HIGHEST') {
            searchParams.set('sort', 'HIGHEST');
            searchParams.set('rank', 1);
        } else if (sortValue === 'LOWEST') {
            searchParams.set('sort', 'LOWEST');
            searchParams.set('rank', 1);
        } else {
            searchParams.set('sort', 'LIKE');
            searchParams.set('rank', 1);
        }
        setSearchParams(searchParams);
    };

    return isMobile ? (
        <M.TabContainer>
            <M.Tab
                currentSort={sort}
                onClick={() =>
                    onMoveSortPage(sort !== 'HIGHEST' ? 'LOWEST' : 'HIGHEST')
                }
            >
                {sort !== 'HIGHEST' ? (
                    <span style={{ color: 'var(--red)' }}>최악</span>
                ) : (
                    <span style={{ color: 'var(--blue)' }}>최고</span>
                )}
                <span>의 시간표</span>
            </M.Tab>
            <M.LikeTab
                currentSort={sort}
                onClick={() => onMoveSortPage('LIKE')}
            >
                인기 시간표
            </M.LikeTab>
        </M.TabContainer>
    ) : (
        <S.TabContainer>
            <S.Tab
                onClick={() =>
                    onMoveSortPage(sort !== 'HIGHEST' ? 'LOWEST' : 'HIGHEST')
                }
                currentSort={sort}
            >
                {sort !== 'HIGHEST' ? (
                    <span style={{ color: 'var(--red)', fontSize: '1vw' }}>
                        최악
                    </span>
                ) : (
                    <span style={{ color: 'var(--blue)', fontSize: '1vw' }}>
                        최고
                    </span>
                )}
                <span style={{ fontSize: '1vw' }}>의 시간표</span>
            </S.Tab>
            <S.LikeTab
                onClick={() => onMoveSortPage('LIKE')}
                currentSort={sort}
            >
                인기 시간표
            </S.LikeTab>
        </S.TabContainer>
    );
};
export default TabContainer;
