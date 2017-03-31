import React from 'react'
import redux from 'redux'
import axios from 'axios'

import store from '../../redux/store'
import Lyrics from '../components/Lyrics'
import setLyrics from '../../redux/action-creators/lyrics'


class LyricsContainer extends React.Component {

  constructor (props) {
    super(props);
    this.state = Object.assign({}, store.getState(), {
      artistQuery: '',
      songQuery: ''
    });

    this.setArtist = this.setArtist.bind(this);
    this.setSong = this.setSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  setArtist (input) {
    this.setState({
      artistQuery: input
    })
  }

  setSong (input) {
    this.setState({
      songQuery: input
    })
  }

  handleSubmit (evt) {
    evt.preventDefault()

    if (this.state.artistQuery && this.state.songQuery) {
      store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery));
      // axios.get(`api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
      //   .then(res => res.data)
      //   .then(textObj => setLyrics(textObj.lyric))
      //   .then(actionObj => store.dispatch(actionObj))
      //   .catch()
    }

    console.log("handling event: ", this.state)
  }

  componentDidMount() {
    this.setState(store.getState())
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render () {

    return (
      <Lyrics 
        text={this.state.text} 
        setArtist={this.setArtist} 
        setSong={this.setSong} 
        artistQuery={this.state.artistQuery} 
        songQuery={this.state.songQuery} 
        handleSubmit={this.handleSubmit} />
    );
  }
}

export default LyricsContainer;
