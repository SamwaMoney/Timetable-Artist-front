import { ADD_SELECTED_DATA, DELETE_SELECTED_DATA } from './action';

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
                    lecture => lecture.className !== lectureNameToDelete,
                ),
            };
        default:
            return state;
    }
};

export default timeTableReducer;
