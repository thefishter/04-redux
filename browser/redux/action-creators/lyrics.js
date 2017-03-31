import {SET_LYRICS} from '../constants'
const setLyrics = (text) => ({
    type: SET_LYRICS,
    lyric: text
})

export default setLyrics;