//메인 reducer인 rootReducer
import { combineReducers } from 'redux';
import timeTableReducer from './timetable';

export const rootReducer = combineReducers({ timeTableReducer });
