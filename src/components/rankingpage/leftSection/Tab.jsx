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

    /*정렬 기준대로 쿼리스트링을 바꿔줌*/
    const onMoveSortPage = e => {
        const { innerText } = e.target;
        if (innerText === '최악의 시간표') {
            searchParams.set('sort', 'LOWEST');
            searchParams.set('rank', 1);
        } else if (innerText === '최고의 시간표') {
            searchParams.set('sort', 'HIGHEST');
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
                onClick={e => {
                    onMoveSortPage(e);
                }}
            >
                {sort !== 'HIGHEST' ? '최악의 시간표' : '최고의 시간표'}
            </M.Tab>
            <M.LikeTab
                currentSort={sort}
                onClick={e => {
                    onMoveSortPage(e);
                }}
            >
                인기 시간표
            </M.LikeTab>
        </M.TabContainer>
    ) : (
        <S.TabContainer>
            <S.Tab
                onClick={e => {
                    onMoveSortPage(e);
                }}
                currentSort={sort}
            >
                {sort !== 'HIGHEST' ? '최악의 시간표' : '최고의 시간표'}
            </S.Tab>
            <S.LikeTab
                onClick={e => {
                    onMoveSortPage(e);
                }}
                currentSort={sort}
            >
                인기 시간표
            </S.LikeTab>
        </S.TabContainer>
    );
};
export default TabContainer;
