import { http } from '../api/http';

// 수업 생성
export const CreateClasses = async classes => {
    try {
        // 배열을 JSON 형태로 변환
        const classesData = JSON.stringify(classes);

        // 서버 요청
        const res = await http.post('/classes', classesData, {
            headers: { 'Content-Type': 'application/json' },
        });

        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
};

// 시간표 생성
export const CreateTable = async memberId => {
    try {
        const res = await http.post('/timetables', {
            memberId: memberId,
        });
        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
};

// 시간표 삭제
export const DeleteTable = async (memberId, timetableId) => {
    try {
        const res = await http.delete(
            `/members/${memberId}/timetables/${timetableId}`,
        );
        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
};

// 내 시간표 조회
export const FindTable = async (memberId, timetableId) => {
    try {
        const res = await http.get(`/timetables/${memberId}/${timetableId}`);
        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
};

// 시간표 채점
export const ScoreTable = async (owner, memberId) => {
    try {
        const res = await http.patch(`/timetables/${memberId}/score`, {
            owner: owner,
        });
        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
};

// 시간표 채점 결과 조회
export const TableResult = async timetableId => {
    try {
        const res = await http.get(`/timetables/${timetableId}/result`);
        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
};

// 시간표 게시
export const UpdateTable = async (owner, classHide, timetableId) => {
    try {
        const res = await http.patch(`/timetables/${timetableId}/upload`, {
            owner: owner,
            classHide: classHide,
        });
        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
};
