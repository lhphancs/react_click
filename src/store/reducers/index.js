import { combineReducers } from 'redux';
import health from './health';
import gamestatus from './gamestatus';

export default combineReducers({
    health,
    gamestatus,
})