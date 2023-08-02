import { ADD_TABLE_ID, ADD_USERNAME, ADD_MY_SCORE } from './action';
//내 점수, 유형, 테이블 아이디 저장하기
const initialState = {
    myScore: null,
    myTimeTableId: null,
    myUserName: null,
};

const myInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TABLE_ID:
            const id_state = { ...state };
            return {
                ...id_state,
                mymyTimeTableId: action.payload,
            };
        case ADD_USERNAME:
            const name_state = { ...state };
            return {
                ...name_state,
                myUserName: action.payload,
            };
        case ADD_MY_SCORE:
            const score_state = { ...state };
            return {
                ...score_state,
                myUserName: action.payload,
            };

        default:
            return state;
    }
};

export default myInfoReducer;
