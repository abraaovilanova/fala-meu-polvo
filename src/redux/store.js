
import { createStore, applyMiddleware, compose } from 'redux'
import langReducer from './reducers/langReducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(langReducer,composeEnhancers(applyMiddleware(thunk)))

export default store