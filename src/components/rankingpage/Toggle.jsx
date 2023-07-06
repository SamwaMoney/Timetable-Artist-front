import { styled } from 'styled-components';
import { useState } from 'react';
import { FlexCenter } from './Ranking.style';
import { useSearchParams } from 'react-router-dom';

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
        <Wrapper>
            <ToggleContainer onClick={handleChange}>
                <Slider sort={sort} />
            </ToggleContainer>
            <Text>
                {sort === 'worst' ? '최고의 시간표 보기' : '최악의 시간표 보기'}
            </Text>
        </Wrapper>
    );
};
export default Toggle;

const Wrapper = styled.div`
    ${FlexCenter}
    width: 100%;
    height: 19px;
    margin-top: 32px;
    margin-left: -200px;
`;

const ToggleContainer = styled.div`
    position: relative;
    width: 34px;
    height: 19px;
    background-color: white;
    border: 1.3px solid black;
    border-radius: 19px;
    cursor: pointer;
`;
const Slider = styled.div`
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: ${props =>
        props.sort === 'worst' ? '#f22b02' : '#1962ed'};
    border: 1.3px solid black;
    border-radius: 50%;
    top: 50%;
    left: ${props => (props.sort === 'worst' ? '16px' : '1px')};
    transform: translate(0, -50%);
    transition: left 0.2s ease;
`;

const Text = styled.div`
    font-size: 10px;
    margin-left: 6px;
`;
