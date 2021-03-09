import React from 'react';
import Video from '../video/video';
import styles from './videoList.module.css';

const VideoList = ({ videos, onSelect, selected }) => {
  const className = selected ? styles.side : undefined;

  return (
    <ul className={className}>
      {videos.map(video => {
        return (
          !video.selected && (
            <Video
              key={video.key}
              id={video.key}
              video={video}
              onSelect={onSelect}
              selected={selected}
            />
          )
        );
      })}
    </ul>
  );
};

export default VideoList;
