import React from 'react';
import styles from './videoPlayer.module.css';

const VideoPlayer = ({ id, snippet }) => (
  <section className={styles.videoPlayer}>
    <div className={styles.playerWrapper}>
      <iframe
        id={styles.ytPlayer}
        type="text/html"
        title={snippet.title}
        src={`https://www.youtube.com/embed/${id}?autoplay=1&modestbranding=1`}
        allow="autoplay"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
    <h1 className={styles.title}>{snippet.title}</h1>
    <h2 className={styles.channel}>{snippet.channelTitle}</h2>
    <pre className={styles.description}>{snippet.description}</pre>
  </section>
);

export default VideoPlayer;
