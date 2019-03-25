import Reducers from './reducers/index'
import { createStore, applyMiddleware } from 'redux'

const logger = store => next => action => {
    console.log('dispatching', action)
    const result = next(action)
    console.log('next state', store.getState())
    return result
  }

const store = createStore(
    Reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store;