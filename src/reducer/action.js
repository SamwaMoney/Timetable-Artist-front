export const ADD_SELECTED_DATA = 'ADD_SELECTED_DATA';
export const ADD_MY_RESULT = 'ADD_MY_RESULT';
export const DELETE_SELECTED_DATA = 'DELETE_SELECTED_DATA';

export const addSelectedData = data => {
    return {
        type: ADD_SELECTED_DATA,
        payload: data,
    };
};

export const addMyResult = data => {
    return {
        type: ADD_MY_RESULT,
        payload: data,
    };
};

export const deleteSelectedData = lectureName => {
    return {
        type: DELETE_SELECTED_DATA,
        payload: lectureName,
    };
};
