export const ADD_SELECTED_DATA = 'ADD_SELECTED_DATA';

export const addSelectedData = data => {
    return {
        type: ADD_SELECTED_DATA,
        payload: data,
    };
};
