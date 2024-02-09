import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Music = ({songs}) => {
    return (
        <div>
          <h1>songs</h1>
          {songs.map(song => (
            <div>
                <Link to={`${song._id}`}>
                <h3>{song.title}</h3>
                 </Link>
                 <h4>{song.album}</h4>
            </div>
          ))}
        </div>
      ) 
}

export default Music;