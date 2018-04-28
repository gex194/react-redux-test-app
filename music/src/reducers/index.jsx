//Combine all reducers
import {combineReducers} from 'redux';
import musicReducer from './music';

const AllReducers = combineReducers ({
    music: musicReducer
})

export default AllReducers;