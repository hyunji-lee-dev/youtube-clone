import React from 'react';
import styles from './videoPlayer.module.css';

const VideoPlayer = ({ selected }) => {
  return (
    <section>
      <img
        src={selected.thumbnail}
        alt={selected.title}
        className={styles.thumbnail}
      />
      <p className={styles.title}>{selected.title}</p>
      <p className={styles.channel}>{selected.channel}</p>
      <p className={styles.detail}>{selected.detail}</p>
    </section>
  );
};

export default VideoPlayer;
