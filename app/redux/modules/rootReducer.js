import { combineReducers } from 'redux';
import { techReducer } from './tech';
import { scienceReducer } from './science';

export default combineReducers({ techReducer, scienceReducer });
