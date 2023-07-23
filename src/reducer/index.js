//메인 reducer인 rootReducer
import { combineReducers } from 'redux';
import timeTableReducer from './timetable';
import myResultReducer from './myResult';

export const rootReducer = combineReducers({
    timeTableReducer,
    myResultReducer,
});
