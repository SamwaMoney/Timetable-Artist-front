import {
    ADD_SELECTED_DATA,
    DELETE_SELECTED_DATA,
    RESET_SELECTED_DATA,
} from './action';

const initialState = {
    selectedData: [], // 빈 배열로 초기화
};

const timeTableReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SELECTED_DATA:
            return {
                ...state,
                selectedData: [...state.selectedData, action.payload], // 새 데이터를 배열에 추가
            };
        case DELETE_SELECTED_DATA:
            const lectureNameToDelete = action.payload;
            return {
                ...state,
                selectedData: state.selectedData.filter(
                    lecture => lecture.className !== lectureNameToDelete, // 삭제할 데이터 이름과 비교하여 삭제
                ),
            };
        case RESET_SELECTED_DATA:
            return {
                ...state,
                selectedData: [], // 빈 배열로 초기화
            };
        default:
            return state;
    }
};

export default timeTableReducer;
