import Reducers from './reducers/index'
import { createStore, applyMiddleware } from 'redux'

const store = createStore(
    Reducers,
)
export default store;