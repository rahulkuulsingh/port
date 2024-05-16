import React from 'react';

interface VideoProps {
  src: string;
  height: number;
  width: number;
}

const Video: React.FC<VideoProps> = ({ src, height, width }) => {
  return (
    <div style={{ width: '100%', position: 'relative', paddingTop: `${(height / width) * 100}%` }}>
      <video
        style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
        controls={true}
        autoPlay
        muted
        loop
        preload="none"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
