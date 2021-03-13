import React from 'react';
import Video from '../video/video';
import styles from './videoList.module.css';

const VideoList = ({ videos, selectedVideo, onSelect, layout }) => (
  <ul className={`${styles.videoList} ${styles[layout]}`}>
    {videos.map(video => {
      return (
        // selectedVideo가 아닐 때만 render
        (selectedVideo && selectedVideo.id) !== video.id && (
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
