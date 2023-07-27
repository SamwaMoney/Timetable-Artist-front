import { ADD_MY_RESULT } from './action';

//내 점수, 유형, 테이블 아이디 저장하기
const initialState = {
    memberId: null,
    myScore: null,
    myTableType: null,
    myTimeTableId: null,
};

const myResultReducer = (state = initialState, action) => {
    const { tableId, score, tableType } = action.payload | null;
    switch (action.type) {
        case ADD_MY_RESULT:
            return {
                myScore: score,
                myTableType: tableType,
                myTimeTableId: tableId,
            };

        default:
            return state;
    }
};

export default myResultReducer;
