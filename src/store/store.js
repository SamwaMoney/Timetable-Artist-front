import { createStore } from 'redux';
import { rootReducer } from '../reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';

const store = createStore(
    rootReducer,
    process.env.NODE_ENV === 'development' &&
        composeWithDevTools(applyMiddleware(logger)),
);

export default store;
