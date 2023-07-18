//메인 reducer인 rootReducer
import { combineReducers } from 'redux';
import rankReducer from './ranking';
import timeTableReducer from './timetable';

export const rootReducer = combineReducers({ rankReducer, timeTableReducer });
