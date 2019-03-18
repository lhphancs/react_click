import { combineReducers } from 'redux';
import health from './health';
import level from './level';
import gamestatus from './gamestatus';

export default combineReducers({
    health,
    gamestatus,
    level
})