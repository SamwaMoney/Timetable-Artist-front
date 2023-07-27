import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import TimeTableRow from './TimeTableRow';

// props로 초기화 버튼 null 처리하기
const TimeTable = () => {
    const startHour = 8;
    const endHour = 20;
    const timeInterval = 0.5;
    const numberOfSlots = (endHour - startHour) / timeInterval;

    const timeSlots = Array.from({ length: numberOfSlots }, (_, index) => {
        // 시간 계산 (정각인 경우 출력, 30분인 경우 출력하지 않음)
        const hour = Math.floor(index * timeInterval) + startHour;
        return index % 2 === 0 ? hour : hour + 0.5;
    });

    const dayMappings = {
        월: 'Mon',
        화: 'Tue',
        수: 'Wed',
        목: 'Thu',
        금: 'Fri',
    };

    const etcDescDivRef = useRef(null);

    // redux에서 값을 받아옴
    const selectedData = useSelector(
        state => state.timeTableReducer.selectedData,
    );

    return (
        <TimeTableContainer>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        {Object.values(dayMappings).map(day => (
                            <DayCell key={day}>{day}</DayCell>
                        ))}
                    </tr>
                </thead>
                <tbody style={{ backgroundColor: 'white' }}>
                    {timeSlots.map((timeSlot, index) => (
                        <tr key={timeSlot}>
                            <TimeCell
                                style={
                                    timeSlot.toString().endsWith('.5')
                                        ? { color: '#e2e2e2' }
                                        : {}
                                }
                            >
                                {timeSlot}
                            </TimeCell>

                            <TimeTableRow
                                timeSlot={timeSlot}
                                index={index}
                                numberOfSlots={numberOfSlots}
                            />
                        </tr>
                    ))}
                </tbody>
            </table>
            <EtcDiv>
                <TableText>etc</TableText>
                <EtcDescDiv ref={etcDescDivRef}>
                    {selectedData &&
                        selectedData.map(lecture => {
                            if (lecture.startTime === null) {
                                return (
                                    <div key={lecture.name}>{lecture.name}</div>
                                );
                            }
                            return null;
                        })}
                </EtcDescDiv>
            </EtcDiv>
        </TimeTableContainer>
    );
};

export default TimeTable;

const TimeTableContainer = styled.div`
    /* width: 20.54rem; */
    /* height: 22.1575rem; */

    border-radius: 0.4rem;
    border: 0.08rem solid var(--black);
    background: var(--background, #e2e2e2);

    display: flex;
    justify-content: flex-end;
    flex-direction: column;

    ${isMobile &&
    `
       align-items: stretch;
       height: 55%;
       border: 0px;
       width: 90%;
    `}
`;

const DayCell = styled.th`
    font-family: var(--english);
    font-size: 10px;
    font-weight: 500;
    line-height: normal;

    width: 3.8rem;

    ${isMobile &&
    `
       font-size: 3.2vw;
       width: 11rem;
    `}
`;

const TimeCell = styled.td`
    font-family: var(--english);
    font-size: 10px;
    font-weight: 500;
    line-height: normal;

    background-color: var(--background);
    text-align: center;

    ${isMobile &&
    `
       font-size: 3.2vw;
    `}
`;

const TableCell = styled.td`
    &:not(:first-child) {
        background-color: white;
    }

    border-radius: ${({ isfirst, islast }) =>
        isfirst
            ? '0.5625rem 0.5625rem 0 0'
            : islast
            ? '0 0 0.5625rem 0.5625rem'
            : 'none'};

    &.selected {
        /* background-color: #5f96ff; */
        color: white;
        border-radius: 9px;
        font-size: 10px;
        font-weight: 600;
    }

    &.isfirst {
        border-top-left-radius: 9px;
        border-top-right-radius: 9px;
        position: relative;
    }

    &.islast {
        border-bottom-left-radius: 9px;
        border-bottom-right-radius: 9px;
    }

    ${isMobile &&
    `
        border-radius: ${({ isfirst, islast }) =>
            isfirst
                ? '1.5rem 1.5rem 0 0'
                : islast
                ? '0 0 1.5rem 1.5rem'
                : 'none'};
    `}
`;

const EtcDiv = styled.div`
    display: flex;
    justify-content: space-around;
`;

const TableText = styled.div`
    font-family: var(--english);
    font-size: 10px;
    font-weight: 500;
    line-height: normal;

    margin-left: auto;
    margin-right: auto;

    ${isMobile &&
    `
       font-size: 3.2vw;
    `}
`;

const EtcDescDiv = styled.div`
    background-color: white;
    width: 304px;
    height: 50px;
    border-radius: 8px;
    margin-top: 2px;
    margin-left: auto;

    font-size: 10px;
    font-weight: 500;
    padding: 1%;

    ${isMobile &&
    `
       width: 55rem;
       height: 5rem;
       margin-top: 8px;
    `}
`;
