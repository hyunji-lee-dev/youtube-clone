import React, { memo } from 'react';
import styles from './video.module.css';

const Video = memo(({ video, video: { snippet }, onSelect, layout }) => (
  <li
    className={`${styles.video} ${styles[layout]}`}
    onClick={() => onSelect(video)}
  >
    <div className={styles.thumbnail}>
      <img
        src={snippet.thumbnails.medium.url}
        alt={snippet.title}
        className={styles.thumbnailImg}
      />
    </div>
    <div className={styles.info}>
      <span className={styles.title} title={snippet.title}>
        {snippet.title}
      </span>
      <span className={styles.channel} title={snippet.channelTitle}>
        {snippet.channelTitle}
      </span>
    </div>
  </li>
));

export default Video;
