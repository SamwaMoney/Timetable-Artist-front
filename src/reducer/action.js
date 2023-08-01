export const ADD_SELECTED_DATA = 'ADD_SELECTED_DATA';
export const ADD_TABLE_ID = 'ADD_TABLE_ID';
export const ADD_USERNAME = 'ADD_USERNAME';
export const DELETE_SELECTED_DATA = 'DELETE_SELECTED_DATA';
export const ADD_MY_SCORE = 'ADD_MY_SCORE';
export const addSelectedData = data => {
    return {
        type: ADD_SELECTED_DATA,
        payload: data,
    };
};

export const addTimeTableId = tableId => {
    return {
        type: ADD_TABLE_ID,
        payload: tableId,
    };
};

export const addUserName = userName => {
    return {
        type: ADD_USERNAME,
        payload: userName,
    };
};
export const addMyScore = score => {
    return {
        type: ADD_MY_SCORE,
        payload: score,
    };
};

export const deleteSelectedData = lectureName => {
    return {
        type: DELETE_SELECTED_DATA,
        payload: lectureName,
    };
};
