import TimeTableCell from './TimeTableCell';

const TimeTableRow = ({ timeSlot, index, numberOfSlots, selectedData }) => {
    const getDayData = day => {
        return selectedData.filter(lecture => lecture.day === day);
    };

    return (
        <>
            <TimeTableCell
                day='월'
                timeSlot={timeSlot}
                index={index}
                numberOfSlots={numberOfSlots}
                dayLectureData={getDayData('월')}
            />
            <TimeTableCell
                day='화'
                timeSlot={timeSlot}
                index={index}
                numberOfSlots={numberOfSlots}
                dayLectureData={getDayData('화')}
            />
            <TimeTableCell
                day='수'
                timeSlot={timeSlot}
                index={index}
                numberOfSlots={numberOfSlots}
                dayLectureData={getDayData('수')}
            />
            <TimeTableCell
                day='목'
                timeSlot={timeSlot}
                index={index}
                numberOfSlots={numberOfSlots}
                dayLectureData={getDayData('목')}
            />
            <TimeTableCell
                day='금'
                timeSlot={timeSlot}
                index={index}
                numberOfSlots={numberOfSlots}
                dayLectureData={getDayData('금')}
            />
        </>
    );
};

export default TimeTableRow;
