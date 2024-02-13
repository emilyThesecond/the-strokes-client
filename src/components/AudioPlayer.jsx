const AudioPlayer = () => {
    const videoId = 'p22EqQBYRBM'; // Extracted from the YouTube link
  
    return (
      <div>
        <h1>Audio Player</h1>
        <iframe
          title="YouTube Video Player"
          width="100%"
          height="50"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&loop=1&playlist=${videoId}&mute=1`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
        ></iframe>
      </div>
    );
  };
  
  export default AudioPlayer;