//메인 reducer인 rootReducer
import { combineReducers } from 'redux';
import timeTableReducer from './timetable';
import myInfoReducer from './myInfo';

export const rootReducer = combineReducers({
    timeTableReducer,
    myInfoReducer,
});
