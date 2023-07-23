import { ADD_RESULT, REPLACE_RESULT } from './action';

//내 점수와 유형 저장하기
const initialState = {
    myScore: null,
    myCategory: null,
};

const myResultReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RESULT:
            return action.payload;
        case REPLACE_RESULT:
            return action.payload;
        default:
            return state;
    }
};

export default myResultReducer;
