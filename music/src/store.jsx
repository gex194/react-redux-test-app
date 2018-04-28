import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import AllReducers from './reducers';
import promise from 'redux-promise-middleware';

const middleware = applyMiddleware(thunk, logger, promise());
const store = createStore(AllReducers, middleware);

export default store;