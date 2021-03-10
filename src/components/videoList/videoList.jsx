import React from 'react';
import Video from '../video/video';
import styles from './videoList.module.css';

const VideoList = ({ videos, onSelect, toBeSide }) => {
  const ulClassName = !toBeSide
    ? styles.videoList
    : `${styles.videoList} ${styles['videoList--side']}`;

  return (
    <ul className={ulClassName}>
      {videos.map(video => {
        return (
          !video.selected && (
            <Video
              key={video.id}
              id={video.id}
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
