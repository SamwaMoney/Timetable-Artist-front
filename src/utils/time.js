//change24To12
//['13:00','15:00'] => [['1','00',['3,'00']]

//change12To24
//['1:00','3:00'] => [['13',00'],['15','00']]

export const change24To12 = arr => {
    const timeArr = [];
    arr.map(time => {
        let splitedTime = time.split(':');
        if (splitedTime[0] > 12) {
            splitedTime[0] = String(splitedTime[0] - 12);
        }
        timeArr.push(splitedTime);
    });
    console.log(timeArr);
    return timeArr;
};

export const change12To24 = arr => {
    const timeArr = [];
    arr.map(time => {
        let splitedTime = time.split(':');
        if (splitedTime[0] < 12) {
            splitedTime[0] = String(splitedTime[0] / 1 + 12);
        }
        timeArr.push(splitedTime);
    });
    console.log(timeArr);
    return timeArr;
};
