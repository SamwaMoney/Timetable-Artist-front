import TimeTableCell from './TimeTableCell';

const TimeTableRow = ({ timeSlot, index, numberOfSlots, selectedData, isHidden }) => {
    const getDayData = day => {
        return selectedData.filter(lecture => lecture.weekday === day);
    };

    return (
        <>
            <TimeTableCell
                day='월'
                timeSlot={timeSlot}
                index={index}
                numberOfSlots={numberOfSlots}
                dayLectureData={getDayData('월')}
                isHidden={isHidden}
            />
            <TimeTableCell
                day='화'
                timeSlot={timeSlot}
                index={index}
                numberOfSlots={numberOfSlots}
                dayLectureData={getDayData('화')}
                isHidden={isHidden}
            />
            <TimeTableCell
                day='수'
                timeSlot={timeSlot}
                index={index}
                numberOfSlots={numberOfSlots}
                dayLectureData={getDayData('수')}
                isHidden={isHidden}
            />
            <TimeTableCell
                day='목'
                timeSlot={timeSlot}
                index={index}
                numberOfSlots={numberOfSlots}
                dayLectureData={getDayData('목')}
                isHidden={isHidden}
            />
            <TimeTableCell
                day='금'
                timeSlot={timeSlot}
                index={index}
                numberOfSlots={numberOfSlots}
                dayLectureData={getDayData('금')}
                isHidden={isHidden}
            />
        </>
    );
};

export default TimeTableRow;
