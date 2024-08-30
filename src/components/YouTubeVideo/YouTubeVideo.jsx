import React from 'react';
import './YouTubeVideo.css'; // Optional: Your CSS file

const YouTubeVideo = () => {
  return (
    <div className="youtube-video-container">
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/fcc9RuSBgjo?controls=0&modestbranding=1&autoplay=1&fs=0&rel=0&disablekb=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
