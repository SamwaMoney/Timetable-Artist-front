import { http } from '../http';

//랭킹보드 (점수 오름차순 조회, 점수 내림차순 조회, 인기순 조회)
//내림차순 : HIGHEST
//오름차순 : LOWEST
//인기순  : LIKE
export const GetRanking = async sortType => {
    try {
        const res = http.get(`/tables/board?sortType=${sortType}`);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
};

// 시간표 좋아요 등록
export const PostTimeTableLike = async (timetableId, memberId) => {
    try {
        const res = http.post(`/tables/${timetableId}/likes`, {
            memberId: memberId,
        });
        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
};

// 시간표 좋아요 취소
export const DeleteTimeTableLike = async (timetableId, memberId) => {
    try {
        const res = http.delete(
            `/tables/${timetableId}/likes?memberId=${memberId}`,
        );
        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
};

// 시간표 좋아요 목록 조회

// 댓글 작성
export const PostComment = async (tableId, memberId, content) => {
    try {
        const res = http.post(`/tables/${tableId}/replies`);
        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
};

// 댓글 삭제
export const DeleteComment = async (memberId, replyId) => {
    try {
        const res = http.delete(`/replies/${memberId}/${replyId}`);
        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
};

// 시간표의 댓글 조회 => 좋아요 많은 순으로 정렬
export const GetTimeTableComments = async timetableId => {
    try {
        const res = http.get(`/timetables/${timetableId}/replies`);
        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
};

// 댓글 좋아요 등록
export const PostCommentLike = async (replyId, memberId) => {
    try {
        const res = http.get(`/${replyId}/likes`, {
            memberId: memberId,
        });
        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
};

// 댓글 좋아요 취소 => memberId가 들어가야 하는데 => header있는지 확인
export const DeleteCommentLike = async (replyId, memberId) => {
    try {
        const res = http.delete(`/${replyId}/likes`, {
            memberId: memberId,
        });
        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
};

// 댓글 좋아요 목록 조회 api
