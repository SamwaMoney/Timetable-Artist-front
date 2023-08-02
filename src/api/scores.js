import { http } from './http';
import { test } from './test';

// 내 timetableId 조회
export const GetTimetableId = async memberId => {
    try {
        const res = await http.get(`/timetables?memberId=${memberId}`);
        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
};

// 내 시간표 조회
export const FindTable = async (memberId, timetableId) => {
    try {
        const res = await http.get(
            `/timetables/${timetableId}?memberId=${memberId}`,
        );
        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
};

// 시간표 채점
export const ScoreTable = async timetableId => {
    try {
        const res = await http.patch(`/timetables/${timetableId}/score`);
        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
};

// 시간표 게시
export const UploadTable = async (image, dto, timetableId) => {
    try {
        const formData = new FormData();
        formData.append('image', image);
        formData.append(
            'dto',
            new Blob([JSON.stringify(dto)], { type: 'application/json' }),
        );
        const res = await test.put(
            `/timetables/${timetableId}/upload`,
            formData,
            {
                headers: { 'Content-Type': 'multipart/form-data' },
            },
        );
        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
};
