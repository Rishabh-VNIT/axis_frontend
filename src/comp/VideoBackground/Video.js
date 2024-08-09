import React from 'react';

const VideoBackground = () => {
  return (
    <video autoPlay loop muted className="video-background">
      <source src="V1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBackground;
