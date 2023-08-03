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
export const CreateTable = async () => {
    try {
        const memberId = localStorage.getItem('memberId');
        const res = await http.post('/timetables', {
            memberId: memberId,
        });
        console.log(res);
        GetTableId();
    } catch (err) {
        console.log('시간표 생성 에러', err);
    }
};

// 시간표 삭제
export const DeleteTable = async tableId => {
    try {
        const memberId = localStorage.getItem('memberId');
        const res = await http.delete(`/timetables/${memberId}/${tableId}`);
        console.log(res);
        localStorage.setItem('tableId', 'null');
    } catch (err) {
        console.log('시간표 삭제 에러', err);
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

// tableId 가져오기
export const GetTableId = async () => {
    try {
        const memberId = localStorage.getItem('memberId');
        const res = await http.get(`/timetables?memberId=${memberId}`);
        const tableId = res.data.timetableId;
        localStorage.setItem('tableId', tableId);
        alert(localStorage.getItem('tableId'));
    } catch (err) {
        console.log('테이블아이디 가져오기 오류', err);
    }
};
