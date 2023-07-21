export const ADD_SELECTED_DATA = 'ADD_SELECTED_DATA';

export const addSelectedData = data => {
    return {
        type: ADD_SELECTED_DATA,
        payload: data,
    };
};

export const ADD_RESULT = 'ADD_RESULT';

export const REPLACE_RESULT = 'REPLACE_RESULT';
