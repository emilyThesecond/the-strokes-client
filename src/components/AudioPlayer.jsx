const AudioPlayer = () => {
    // const videoId = 'pjmaj-wtAPs';
    const songs = [
        { title: "You Only Live Once", videoId: "pjmaj-wtAPs"},
        { title: "Selfless", videoId: "1-W6whvn8Bs"},
        { title: "Ode to the Mets", videoId: "BjC0KUxiMhc"}
    ]
    
  
    return (
      <div>
        <h1>Music</h1>
        <div>
      {songs.map((song, index) => (
        <div key={index}>
          <h3>{song.title}</h3>
          <iframe
          title="YouTube Video Player"
          width="50%"
          height="50"
          src={`https://www.youtube.com/embed/${song.videoId}?autoplay=1&controls=1&loop=1&playlist=${song.videoId}&mute=1`}
          allow="autoplay; encrypted-media"
          className="youtube-song">
        </iframe>
        </div>
      ))}
    </div>

        </div>

    );
  };
  
  export default AudioPlayer;