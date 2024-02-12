import React from 'react';
import { tracks } from '../data/tracks';

const AudioPlayer = () => {
  return (
    <div>
        <div>
            <h1>Music</h1>
        </div>
      {tracks.map((track, index) => (
        <div key={index}>
          <h3>{track.title}</h3>
          <p>Artist: {track.author}</p>
          <audio controls>
            <source src={track.src} type="audio/mp3" controls />
          </audio>
        </div>
      ))}
    </div>
  );
};

export default AudioPlayer;