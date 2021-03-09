import React from 'react';
import Video from '../video/video';
import styles from './videoList.module.css';

const VideoList = ({ videos, onSelect, toBeSide }) => {
  const className = toBeSide ? styles.side : undefined;

  return (
    <ul className={className}>
      {videos.map(video => {
        const id = video.id.videoId || video.id;
        return (
          !video.selected && (
            <Video
              key={id}
              id={id}
              snippet={video.snippet}
              onSelect={onSelect}
              toBeSide={toBeSide}
            />
          )
        );
      })}
    </ul>
  );
};

export default VideoList;
