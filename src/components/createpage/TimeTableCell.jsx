import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

const TimeTableCell = ({ day, timeSlot, index, numberOfSlots }) => {
    // startTime과 endTime을 float 형태로 변환하는 함수
    const convertToFloatTime = timeString => {
        if (!timeString) return 0; // null인 경우 0 또는 다른 기본 값 반환
        const [hour, minute] = timeString.split(':');
        const floatTime = parseFloat(hour) + parseFloat(minute) / 60;
        return floatTime;
    };

    // redux에서 값을 받아옴
    const selectedData = useSelector(
        state => state.timeTableReducer.selectedData,
    );

    // 요일에 맞는 데이터만 추리기
    const dayLectureData = selectedData.filter(lecture => lecture.day === day);

    // startTime과 endTime을 float 형태로 변경
    const floatDayLectureData = dayLectureData.map(lecture => ({
        ...lecture,
        startTime: convertToFloatTime(lecture.startTime),
        endTime: convertToFloatTime(lecture.endTime),
    }));

    // 요일에 맞는 데이터들에서 해당 시간대(timeSlot)에 해당하는 강의 데이터 찾기
    const timeData = floatDayLectureData.find(
        time => time.startTime <= timeSlot && timeSlot < time.endTime,
    );

    // console.log(timeData);

    return (
        <>
            {/* 만약 start값과 일치하는 경우에는 강의 블록을 렌더링하고, 
            병합된 cell일 경우 (즉 강의 시간이 이미 차 있는 경우)는 null을 반환하고, 
            아예 강의가 없는 시간일 경우에는 빈 TableCell을 반환 */}
            {timeData?.startTime === timeSlot ? (
                <TableCell
                    key={`${day}-${timeSlot}`}
                    id={`${day}-${timeSlot}`}
                    isfirst={index === 0}
                    islast={index === numberOfSlots - 1}
                    rowSpan={
                        (parseFloat(timeData.endTime) -
                            parseFloat(timeData.startTime)) *
                        2
                    }
                    style={{ backgroundColor: timeData.backgroundColor }}
                    className='selected'
                >
                    <BlockText>
                        <BlockNameText>{timeData.name}</BlockNameText>
                        <BlockPlaceText>{timeData.place}</BlockPlaceText>
                    </BlockText>
                </TableCell>
            ) : timeData?.startTime < timeSlot &&
              timeSlot < timeData?.endTime ? null : (
                <TableCell
                    key={`${day}-${timeSlot}`}
                    id={`${day}-${timeSlot}`}
                    isfirst={index === 0}
                    islast={index === numberOfSlots - 1}
                ></TableCell>
            )}
        </>
    );
};

export default TimeTableCell;

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
        position: relative;
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

const BlockText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    width: 100%;
    height: 100%;
`;

const BlockNameText = styled.div`
    font-weight: 700;
`;

const BlockPlaceText = styled.div`
    font-weight: 500;
    margin-top: 10%;
`;
