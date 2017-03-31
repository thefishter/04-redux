import { SET_LYRICS } from '../constants'

const initialState = { text: '' };

const reducer = (
    state = initialState, action) => {
    switch (action.type) {
        case SET_LYRICS:
            return Object.assign({}, state, { text: action.lyric });
        default: return state;
    }
}

export default reducer;



