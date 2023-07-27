import TimeTableCell from './TimeTableCell';

const TimeTableRow = ({ ...props }) => {
    return (
        <>
            <TimeTableCell day='월' {...props} />
            <TimeTableCell day='화' {...props} />
            <TimeTableCell day='수' {...props} />
            <TimeTableCell day='목' {...props} />
            <TimeTableCell day='금' {...props} />
        </>
    );
};

export default TimeTableRow;
