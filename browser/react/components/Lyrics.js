import React from 'react';
import { Link } from 'react-router';

const Lyrics = (props) => {

  const songChange = evt => {
    props.setSong(evt.target.value)
  }

  const artistChange = evt => {
    props.setArtist(evt.target.value)
  }

  // console.log("props from lyrics.js: ", props.handleSubmit)

  return (

    <div id="lyrics">
      <form onSubmit={props.handleSubmit}>
        <div>
          <input type="text" value={props.artistQuery} placeholder="Artist" onChange={artistChange}/>
          <input type="text" value={props.songQuery} placeholder="Song" onChange={songChange}/>
        </div>
        <pre>{props.text || 'Search above!'}</pre>
        <button type="submit">Search for Lyrics</button>
      </form>
    </div>

  );
}

export default Lyrics;
