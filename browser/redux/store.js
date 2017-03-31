import { createStore
        , applyMiddleware } from 'redux'
import reducer from './reducers/root-reducers'
import { createLogger } from 'redux-logger'
import { thunkMiddleware } from 'redux-thunk'

const logger = createLogger();
const middleware = applyMiddleware(logger, thunkMiddleware);


const store = createStore(reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleware);

export default store;
