import styled from 'styled-components';

// props로 초기화 버튼 null 처리하기
const TimeTable = () => {
    return (
        <div style={{ position: 'relative' }}>
            <ResetBtn>초기화</ResetBtn>
            <TimeTableContainer>시간표 부분임</TimeTableContainer>
        </div>
    );
};

export default TimeTable;

const TimeTableContainer = styled.div`
    width: 20.54rem;
    height: 22.1575rem;

    border-radius: 0.4rem;
    border: 0.08rem solid var(--black);
    background: var(--background, #e2e2e2);
`;

const ResetBtn = styled.button`
    width: 52px;
    height: 25px;
    padding: 5px 9px;

    border-radius: 1.5rem;
    border: 0.08rem solid var(--black);
    background: var(--red, #f22b02);

    font-size: 11px;
    font-weight: 500;

    position: absolute;
    top: -3rem;
`;
