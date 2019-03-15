import { combineReducers } from 'redux'
import health from './health'
import level from './level'

export default combineReducers({
    health,
    level
})