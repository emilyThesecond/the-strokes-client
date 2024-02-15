import React from 'react';

const AudioPlayer = () => {
    const songs = [
        { title: "You Only Live Once", videoId: "pjmaj-wtAPs"},
        { title: "Selfless", videoId: "1-W6whvn8Bs"},
        { title: "Ode to the Mets", videoId: "BjC0KUxiMhc"}
    ];
    
    return (
        <div className="audio-player">
            <h1>Music</h1>
            <div className="songs-grid">
                {songs.map((song, index) => (
                    <div key={index} className="song-item">
                        <h3>{song.title}</h3>
                        <iframe
                            title="YouTube Video Player"
                            width="100%"
                            height="100"
                            src={`https://www.youtube.com/embed/${song.videoId}?autoplay=1&controls=1&loop=1&playlist=${song.videoId}&mute=1`}
                            allow="autoplay; encrypted-media"
                            className="youtube-song"
                        ></iframe>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AudioPlayer;