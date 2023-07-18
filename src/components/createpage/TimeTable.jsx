import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import ReactDOM from 'react-dom';

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

    console.log(timeSlots);

    const dayMappings = {
        월: 'Mon',
        화: 'Tue',
        수: 'Wed',
        목: 'Thu',
        금: 'Fri',
    };

    // redux에서 값을 받아옴
    const selectedData = useSelector(
        state => state.timeTableReducer.selectedData,
    );

    // ref 객체를 생성합니다.
    const cellRefs = useRef({});

    // 렌더링 시에 ref 객체에 각 td 요소를 할당합니다.
    const setCellRef = (day, timeSlot, ref) => {
        cellRefs.current[`${day}-${timeSlot}`] = ref;
    };

    const AdditionalContent = ({ selectedData }) => (
        <BlockText>
            <div>{selectedData[0].name}</div>
            <br/>
            <div>{selectedData[0].place}</div>
        </BlockText>
    );

    const showClassBlock = selectedData => {
        console.log('showClassBlock');
        console.log(selectedData[0].startTime);
        // 시작시간 시랑 분 분리
        const [startH, startM] = selectedData[0].startTime
            .split(':')
            .map(str => parseInt(str, 10));

        // id 변수
        const findId = `${dayMappings[selectedData[0].day]}-${startH}`;

        console.log(startH);
        console.log(findId);

        // 원하는 key를 가진 요소에 접근
        const targetElement = cellRefs.current[findId];

        // targetElement가 정상적으로 찾아졌을 때
        if (targetElement) {
            // class 추가
            targetElement.classList.add('selected');

            // rowSpan 속성 추가
            targetElement.rowSpan = '3';

            // AdditionalContent 컴포넌트를 생성하여 targetElement의 하위로 추가
            ReactDOM.render(
                <AdditionalContent selectedData={selectedData} />,
                targetElement,
            );
        }
    };

    useEffect(() => {
        console.log('시작');
        if (selectedData && selectedData.length > 0) {
            console.log(selectedData);
            console.log('timetable 값 들어옴');
            showClassBlock(selectedData);
        }
    }, [selectedData]);

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
                            {Object.values(dayMappings).map(day => (
                                <TableCell
                                    key={`${day}-${timeSlot}`}
                                    id={`${day}-${timeSlot}`}
                                    isfirst={index === 0}
                                    islast={index === numberOfSlots - 1}
                                    ref={ref => setCellRef(day, timeSlot, ref)}
                                ></TableCell>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <EtcDiv>
                <TableText>etc</TableText>
                <EtcDescDiv></EtcDescDiv>
            </EtcDiv>
        </TimeTableContainer>
    );
};

export default TimeTable;

const TimeTableContainer = styled.div`
    /* width: 20.54rem; */
    height: 22.1575rem;

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
        background-color: #5f96ff;
        color: white;
        border-radius: 9px;
        font-size: 10px;
        font-weight: 600;
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

    ${isMobile &&
    `
       width: 55rem;
       height: 5rem;
       margin-top: 8px;
    `}
`;

const BlockText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
