import React from 'react';
import styles from './videoPlayer.module.css';

const VideoPlayer = ({ id, snippet }) => (
  <section className={styles.videoPlayer}>
    <div className={styles.playerWrapper}>
      <iframe
        id={styles.ytPlayer}
        type="text/html"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allowFullScreen
        title={snippet.title}
      ></iframe>
    </div>
    <h1 className={styles.title}>{snippet.title}</h1>
    <h2 className={styles.channel}>{snippet.channelTitle}</h2>
    <pre className={styles.description}>{snippet.description}</pre>
  </section>
);

export default VideoPlayer;
