import { createStore
        , applyMiddleware
        , combineReducers } from 'redux'
import lyricsReducer from './reducers/lyrics-reducer'
import playerReducer from './reducers/player-reducer'

import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

const logger = createLogger();
const middleware = applyMiddleware(logger, thunk);


const store = createStore(
  combineReducers({
    lyrics: lyricsReducer,
    player: playerReducer
  })
  , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  , middleware);

export default store;
