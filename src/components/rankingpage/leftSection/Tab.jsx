import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { S } from '../Ranking.style';
import { M } from '../Ranking.style';
import { useLocation } from 'react-router-dom';

const TabContainer = ({ isMobile }) => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const currentSort = params.get('sort');
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {}, [currentSort]);

    /*정렬 기준대로 쿼리스트링을 바꿔줌*/
    const onMoveSortPage = e => {
        const { innerText } = e.target;
        /*변경될 url*/
        const newSearchParams = new URLSearchParams(searchParams);
        if (innerText === '최악의 시간표') {
            newSearchParams.set('sort', 'lowest');
        } else if (innerText === '최고의 시간표') {
            newSearchParams.set('sort', 'highest');
        } else {
            newSearchParams.set('sort', 'like');
        }
        setSearchParams(newSearchParams, toString());
    };

    return isMobile ? (
        <M.TabContainer>
            <M.Tab
                onClick={e => {
                    onMoveSortPage(e);
                }}
                active={currentSort !== 'like' ? true : false}
            >
                {currentSort !== 'highest' ? '최악의 시간표' : '최고의 시간표'}
            </M.Tab>
            <M.Tab
                onClick={e => {
                    onMoveSortPage(e);
                }}
                active={currentSort === 'like'}
            >
                인기 시간표
            </M.Tab>
        </M.TabContainer>
    ) : (
        <S.TabContainer>
            <S.Tab
                onClick={e => {
                    onMoveSortPage(e);
                }}
                active={currentSort !== 'like' ? true : false}
            >
                {currentSort !== 'highest' ? '최악의 시간표' : '최고의 시간표'}
            </S.Tab>
            <S.Tab
                onClick={e => {
                    onMoveSortPage(e);
                }}
                active={currentSort === 'like'}
            >
                인기 시간표
            </S.Tab>
        </S.TabContainer>
    );
};
export default TabContainer;
