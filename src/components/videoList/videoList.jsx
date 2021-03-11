import React from 'react';
import Video from '../video/video';
import styles from './videoList.module.css';

const VideoList = ({ videos, selectedVideo, onSelect, layout }) => (
  <ul className={`${styles.videoList} ${styles[layout]}`}>
    {videos.map(video => {
      return (
        video !== selectedVideo && (
          <Video
            key={video.id}
            video={video}
            onSelect={onSelect}
            layout={layout}
          />
        )
      );
    })}
  </ul>
);

export default VideoList;
