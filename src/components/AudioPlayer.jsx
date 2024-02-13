const AudioPlayer = () => {
    const videoId = 'pjmaj-wtAPs';
    const songs = [
        { title: "You Only Live Once", videoId: "pjmaj-wtAPs"},
        { title: "Selfless", videoId: "1-W6whvn8Bs"}
    ]
  
    return (
      <div>
        <h1>Music</h1>
        <div>
            <h2>I'll Try Anything Once</h2>
        <iframe
          title="YouTube Video Player"
          width="50%"
          height="50"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&loop=1&playlist=${videoId}&mute=1`}
          allow="autoplay; encrypted-media"
          className="youtube-song">
        </iframe>

        </div>
      </div>
    );
  };
  
  export default AudioPlayer;