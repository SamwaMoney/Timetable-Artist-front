import { styled } from 'styled-components';
import { FlexCenter } from '../Ranking.style';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const TabContainer = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentSort, setCurrentSort] = useState('worst');

    const sort = searchParams.get('sort');

    useEffect(() => {
        setCurrentSort(sort);
    }, [sort]);

    /*정렬 기준대로 쿼리스트링을 바꿔줌*/
    const onMoveSortPage = e => {
        const { innerText } = e.target;
        /*변경될 url*/
        const newSearchParams = new URLSearchParams(searchParams);
        if (innerText === '최악의 시간표') {
            newSearchParams.set('sort', 'worst');
            setCurrentSort('worst');
        } else if (innerText === '최고의 시간표') {
            newSearchParams.set('sort', 'best');
            setCurrentSort('best');
        } else {
            newSearchParams.set('sort', 'popular');
            setCurrentSort('popular');
        }
        setSearchParams(newSearchParams, toString());
    };

    return (
        <Wrapper>
            <Tab
                onClick={e => {
                    onMoveSortPage(e);
                }}
                active={currentSort !== 'popular' ? true : false}
            >
                {currentSort === 'worst' ? '최악의 시간표' : '최고의 시간표'}
            </Tab>
            <Tab
                onClick={e => {
                    onMoveSortPage(e);
                }}
                active={currentSort === 'popular'}
            >
                인기 시간표
            </Tab>
        </Wrapper>
    );
};
export default TabContainer;

const Wrapper = styled.div`
    width: 394px;
    height: 37px;
    width: 100%;
    margin-top: 32px;
    ${FlexCenter};
`;

const Tab = styled.div`
    width: 152px;
    height: 32px;
    font-size: 14px;
    font-weight: 500;
    ${FlexCenter};
    border-bottom: ${({ active }) =>
        active ? '5px solid black' : '3px solid black'};
    cursor: pointer;
`;
