import { http } from './http';
//랭킹보드 (점수 오름차순 조회, 점수 내림차순 조회, 인기순 조회)
//내림차순 : HIGHEST
//오름차순 : LOWEST
//인기순  : LIKE
const RankingApis = {
    GetRanking: async (sortType, memberId) => {
        memberId = memberId || -1;
        sortType = sortType || 'LOWEST';
        try {
            const res = await http.get(
                `/timetables/rankingboard?sortType=${sortType}&memberId=${memberId}`,
            );
            console.log(res);
            return res;
        } catch (err) {
            console.log(err);
        }
    },
    GetOneRankingDetail: async (timetableId, memberId) => {
        try {
            const res = await http.get(
                `/timetables/${timetableId}?memberId=${memberId}`,
            );
            console.log('디테일', res);
            return res;
        } catch (err) {
            console.log(err);
        }
    },

    // 시간표 좋아요 등록✅
    PostTimeTableLike: async (timetableId, memberId) => {
        try {
            const res = await http.post(`/timetables/${timetableId}/likes`, {
                memberId,
            });
            console.log(res);
            return res;
        } catch (err) {
            console.log(err);
        }
    },

    // 시간표 좋아요 취소✅
    DeleteTimeTableLike: async (timetableId, memberId) => {
        try {
            const res = await http.delete(
                `/timetables/${timetableId}/likes?memberId=${memberId}`,
            );
            console.log(res);
            return res;
        } catch (err) {
            console.log(err);
        }
    },

    // 시간표 좋아요 목록 조회

    // 댓글 작성✅
    PostComment: async ({ tableId, memberId, content, nameHide }) => {
        console.log(tableId, memberId, content, nameHide);
        try {
            const res = await http.post(`/timetables/${tableId}/replies`, {
                memberId,
                content,
                nameHide,
            });
            console.log('댓글작성', res);
            return res;
        } catch (err) {
            console.log(err);
        }
    },

    // 댓글 삭제
    DeleteComment: async (memberId, replyId) => {
        try {
            const res = await http.delete(`/replies/${memberId}/${replyId}`);
            console.log(res);
            return res;
        } catch (err) {
            console.log(err);
        }
    },

    // 시간표의 댓글 조회 => 좋아요 많은 순으로 정렬 🔄
    GetTimeTableComments: async (timetableId, memberId) => {
        try {
            const res = await http.get(
                `/timetables/${timetableId}/replies?memberId=${memberId}`,
            );
            console.log(res);
            return res;
        } catch (err) {
            console.log(err);
        }
    },

    // 댓글 좋아요 등록
    PostCommentLike: async (replyId, memberId) => {
        console.log(replyId);
        try {
            const res = await http.post(`/${replyId}/likes`, {
                memberId,
            });
            console.log(res);
            return res;
        } catch (err) {
            console.log(err);
        }
    },

    // 댓글 좋아요 취소 => memberId가 들어가야 하는데 => header있는지 확인
    DeleteCommentLike: async (replyId, memberId) => {
        try {
            const res = await http.delete(`/${replyId}/likes`, {
                data: {
                    memberId,
                },
            });
            console.log(res);
            return res;
        } catch (err) {
            console.log(err);
        }
    },
    // 댓글 좋아요 목록 조회 api
};

export default RankingApis;
