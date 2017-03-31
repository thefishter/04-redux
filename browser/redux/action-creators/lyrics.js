import {SET_LYRICS} from '../constants'
import axios from 'axios'

const setLyrics = (text) => ({
    type: SET_LYRICS,
    lyric: text
})

const fetchLyrics = function (artist, song){
  console.log(artist, song)
    return function (dispatch, getState){
        axios.get(`api/lyrics/${artist}/${song}`)
        .then(res => {
            dispatch(setLyrics(res.data.lyric));
        })
        .catch(console.error);
    }
}



export default fetchLyrics;
