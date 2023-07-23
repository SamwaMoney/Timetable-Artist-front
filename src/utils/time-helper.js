//timeHelper
//댓글시간을 현재시간에서 뺸 시간으로 표시

//change24To12
//['13:00','15:00'] => [['1','00',['3,'00']]

//change12To24
//['1:00','3:00'] => [['13',00'],['15','00']]

export const timeHelper = date => {
    let convertedTime = '';
    const currentTime = new Date(date).getTime();
    const msDiff = Date.now() - currentTime;
    const minDiff = Math.floor(msDiff / 60000);
    const hourDiff = Math.floor(minDiff / 60);
    const dayDiff = Math.floor(hourDiff / 24);

    if (hourDiff >= 24 * 365) {
        return (convertedTime = `오래 전`);
    }
    if (hourDiff >= 24) {
        return (convertedTime = `${dayDiff}일 전`);
    }
    if (minDiff >= 60) {
        return (convertedTime = `${hourDiff}시간 전`);
    }
    if (minDiff >= 1) {
        return (convertedTime = `${minDiff}분 전`);
    }
    convertedTime = '방금 전';
    return convertedTime;
};

export const change24To12 = arr => {
    const timeArr = [];
    arr.map(time => {
        let splitedTime = time.split(':');
        if (splitedTime[0] > 12) {
            splitedTime[0] = String(splitedTime[0] - 12);
        }
        return timeArr.push(splitedTime);
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
        return timeArr.push(splitedTime);
    });
    console.log(timeArr);
    return timeArr;
};
