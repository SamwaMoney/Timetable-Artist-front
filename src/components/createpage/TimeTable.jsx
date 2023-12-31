import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import TimeTableRow from './TimeTableRow';

// props로 초기화 버튼 null 처리하기
const TimeTable = ({ isScorePage, isHidden, classList }) => {
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
        월: 'MON',
        화: 'TUE',
        수: 'WED',
        목: 'THU',
        금: 'FRI',
    };

    const etcDescDivRef = useRef(null);

    // redux에서 값을 받아옴
    const reduxSelectedData = useSelector(
        state => state.timeTableReducer.selectedData,
    );

    // useState를 사용하여 selectedData 상태 저장
    const [selectedData, setSelectedData] = useState(reduxSelectedData);

    // useEffect를 사용하여 Redux store의 selectedData가 변경될 때마다 selectedData 상태 업데이트
    useEffect(() => {
        setSelectedData(reduxSelectedData);
    }, [reduxSelectedData]);

    // dayMapping에서 value를 입력하면 key를 찾아줌
    const getKeyByValue = (object, value) => {
        return Object.keys(object).find(key => object[key] === value);
    };

    // 점수 페이지 용 데이터 가공
    const scorePageClassData = classList
        ? classList.map(classData => {
              // 새로운 객체를 생성하여 원본 객체의 프로퍼티를 복사
              const newClassData = { ...classData };

              // 요일 한글로 바꿔주기 (ONLINE 수업일 경우 제외)
              if (newClassData.weekday !== 'ONLINE') {
                  newClassData.weekday = getKeyByValue(
                      dayMappings,
                      newClassData.weekday,
                  );
              }

              // startTime, endTime 추가
              if (newClassData.startH === null) {
                  newClassData.startTime = null;
                  newClassData.endTime = null;
              } else {
                  newClassData.startTime = `${newClassData.startH}:${newClassData.startM}`;
                  newClassData.endTime = `${newClassData.endH}:${newClassData.endM}`;
              }

              return newClassData;
          })
        : [];

    return (
        <TimeTableContainer
            className={isScorePage === true ? 'isScorePage' : ''}
        >
            <table>
                <thead>
                    <tr>
                        <th></th>
                        {Object.values(dayMappings).map(day => (
                            <DayCell key={day}>{day}</DayCell>
                        ))}
                    </tr>
                </thead>
                <tbody>
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
                                selectedData={
                                    isScorePage === true
                                        ? scorePageClassData
                                        : selectedData
                                }
                                isHidden={isHidden}
                            />
                        </tr>
                    ))}
                </tbody>
            </table>

            <EtcDiv>
                <TableText>etc</TableText>
                <EtcDescDiv ref={etcDescDivRef}>
                    {isScorePage === true
                        ? scorePageClassData &&
                          scorePageClassData.map(lecture => {
                              if (lecture.weekday === 'ONLINE') {
                                  return (
                                      <div
                                          key={lecture.className}
                                          style={{
                                              display:
                                                  isHidden === true
                                                      ? 'none'
                                                      : 'block',
                                          }}
                                      >
                                          {lecture.className}
                                      </div>
                                  );
                              }
                              return null;
                          })
                        : selectedData &&
                          selectedData.map(lecture => {
                              if (lecture.startTime === null) {
                                  return (
                                      <div
                                          key={lecture.className}
                                          style={{
                                              display:
                                                  isHidden === true
                                                      ? 'none'
                                                      : 'block',
                                          }}
                                      >
                                          {lecture.className}
                                      </div>
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
       width: 95vw;
    `}

    &.isScorePage {
        pointer-events: none;
    }
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
    width: 1.5vw;

    ${isMobile &&
    `
       font-size: 3.2vw;
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

    width: 1.5vw;
    text-align: center;

    ${isMobile &&
    `
       width: auto;
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
