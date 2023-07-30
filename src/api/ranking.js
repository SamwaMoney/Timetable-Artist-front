import { http } from './http';
//랭킹보드 (점수 오름차순 조회, 점수 내림차순 조회, 인기순 조회)
//내림차순 : HIGHEST
//오름차순 : LOWEST
//인기순  : LIKE
const RankingApis = {
    GetRanking: async (sortType, memberId) => {
        console.log(sortType, '랭킹 불러오기');
        try {
            const res = await http.get(`/timetables/rankingboard`, {
                params: {
                    sortType,
                    memberId,
                },
            });
            console.log(res);
            return res;
        } catch (err) {
            console.log(err);
        }
    },
    GetOneRankingDetail: async timetableId => {
        try {
            const res = await http.get(`/timetables/${timetableId}`);
            console.log(res);
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
                `/tables/${timetableId}/likes?memberId=${memberId}`,
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
            console.log(res);
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
    GetTimeTableComments: async (memberId, timetableId) => {
        const params = {
            memberId,
        };
        try {
            const res = await http.get(`/timetables/${timetableId}/replies`, {
                params,
            });
            console.log(res);
            return res;
        } catch (err) {
            console.log(err);
        }
    },

    // 댓글 좋아요 등록
    PostCommentLike: async (replyId, memberId) => {
        try {
            const res = await http.post(`/${replyId}/likes`, {
                memberId: memberId,
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
                memberId: memberId,
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
