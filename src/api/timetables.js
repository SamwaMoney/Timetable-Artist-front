import { http } from '../http';

// 수업 생성
export const CreateClasses = async (classes, image) => {
    try {
        const formData = new FormData();

        // JSON 객체를 Blob 타입으로 변환, 원본은 application/json임을 명시
        formData.append(
            'classes', // 객체 프로퍼티 명은 수정될 api 문서 참고해서 바꿔주세요
            new Blob([JSON.stringify(classes)], { type: 'application/json' }),
        );

        formData.append('image', image); // 이미지 첨부, 객체 프로퍼티 명은 수정될 api 문서 참고해서 바꿔주세요

        // 서버 요청
        const res = await http.post('/classes', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
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
