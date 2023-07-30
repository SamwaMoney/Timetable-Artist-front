//유효한 시간인지 알려주는 함수
export const isValidateTime = (startTime, endTime) => {
    // 여기서 useState 훅을 제거합니다.

    const startHour = startTime.split(':')[0] / 1; //시작 시
    const endHour = endTime.split(':')[0] / 1; //종료 시

    // 시간 비교를 수행합니다.
    const isValidTime = endHour > startHour;
    return isValidTime;
};

//겹치는 시간인지 알려주는 함수
//SH => 시작 시간, EH => 끝나는 시간
export const isNoTimeOverlapped = (newData, existingData) => {
    const { startTime, endTime, day } = newData;

    const newSH = startTime.split(':')[0] / 1; //새롭게 추가한 시간표 시작 시
    const newEH = endTime.split(':')[0] / 1; //새롭게 추가한 시간표 종료 시

    console.log('시간안겹침', newSH, newEH, day);

    //시작 수업 시간이 기존startTime보다 같은경우
    //시작 수업 시간이 기존 startTime과 endTime가 겹치는 경우
    const sameDayData = existingData.filter(data => data.day === day);

    console.log('같은 요일 데이터', sameDayData);
    if (!existingData.length) {
        return true;
    }
    if (!sameDayData.length) {
        return true;
    }
    const result = sameDayData.map(data => {
        console.log(data);
        const { startTime, endTime } = data;
        const startSplit = startTime.split(':');
        const endSplit = endTime.split(':');

        const exisitngSH = startSplit[0] / 1;
        const exisitngEH = endSplit[0] / 1;
        //기존의 시작 시간이 추가 시작시간보다 이를때
        if (exisitngSH < newSH) {
            if (exisitngEH > newSH) {
                return false;
            }
        } else if (newSH === exisitngSH) {
            return false;
        } else {
            //기존의 시작시간이 추가 시작시간보다 늦을때
            if (newEH > exisitngSH) {
                return false;
            }
        }
        return true;
    });
    return result.every(data => data === true) ? true : false;
};

//두개의 시간이 서로 겹치치 않는지 확인하는 로직
export const isNotTwoTimeOverlapped = (firstTime, secondTime) => {
    const { startTime: firstST, endTime: firstET, day: firstDay } = firstTime;
    const { startTime: endST, endTime: endET, day: secondDay } = secondTime;

    const firstSH = firstST.split(':')[0] / 1;
    const firstEH = firstET.split(':')[0] / 1;
    const endSH = endST.split(':')[0] / 1;
    const endEH = endET.split(':')[0] / 1;

    if (firstDay !== secondDay) {
        return true;
    }

    if (firstSH < endSH) {
        if (firstEH > endSH) {
            return false;
        }
    } else if (endSH === firstSH) {
        return false;
    } else {
        if (endEH > firstSH) {
            return false;
        }
    }
    return true;
};
