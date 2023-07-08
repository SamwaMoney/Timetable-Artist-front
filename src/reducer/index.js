//메인 reducer인 rootReducer
import { combineReducers } from 'redux';
import rankReducer from './ranking';

export const rootReducer = combineReducers({ rankReducer });
