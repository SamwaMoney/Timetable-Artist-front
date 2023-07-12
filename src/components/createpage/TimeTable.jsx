import styled from 'styled-components';
// props로 초기화 버튼 null 처리하기
const TimeTable = () => {
    const startHour = 8;
    const endHour = 21.5;
    const timeInterval = 0.5;
    const numberOfSlots = (endHour - startHour) / timeInterval + 1;

    const timeSlots = Array.from({ length: numberOfSlots }, (_, index) => {
        // 시간 계산 (정각인 경우 출력, 30분인 경우 출력하지 않음)
        const hour = Math.floor(index * timeInterval) + startHour;
        return index % 2 === 0 ? hour : '.';
    });

    console.log(timeSlots);

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

    return (
        <div style={{ position: 'relative' }}>
            <TimeTableContainer>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            {days.map(day => (
                                <DayCell key={day}>{day}</DayCell>
                            ))}
                        </tr>
                    </thead>
                    <tbody style={{ backgroundColor: 'white' }}>
                        {timeSlots.map((timeSlot, index) => (
                            <tr key={timeSlot}>
                                <TimeCell>{timeSlot}</TimeCell>
                                {days.map(day => (
                                    <TableCell
                                        key={`${day}-${timeSlot}`}
                                        isFirst={index === 0}
                                        isLast={index === numberOfSlots - 1}
                                    ></TableCell>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </TimeTableContainer>
        </div>
    );
};

export default TimeTable;

const TimeTableContainer = styled.div`
    width: 100%;
    height: 100%;

    border-radius: 0.4rem;
    border: 0.08rem solid var(--black);
    background: var(--background, #e2e2e2);

    display: flex;
    justify-content: flex-end;
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

const DayCell = styled.th`
    font-family: var(--english);
    font-size: 10px;
    font-weight: 500;
    line-height: normal;

    width: 3.8rem;
`;

const TimeCell = styled.td`
    font-family: var(--english);
    font-size: 10px;
    font-weight: 500;
    line-height: normal;

    background-color: var(--background);
`;

const TableCell = styled.td`
    &:not(:first-child) {
        background-color: white;
    }

    border-radius: ${({ isFirst, isLast }) =>
        isFirst
            ? '0.5625rem 0.5625rem 0 0'
            : isLast
            ? '0 0 0.5625rem 0.5625rem'
            : 'none'};
`;
