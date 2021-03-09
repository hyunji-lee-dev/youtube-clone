import React from 'react';
import styles from './video.module.css';

const Video = ({ snippet, id, onSelect, toBeSide }) => {
  const handleClick = e => {
    const id = e.currentTarget.id;
    onSelect(id);
  };

  const liClassName = toBeSide ? styles.side : undefined;

  return (
    <li id={id} onClick={handleClick} className={liClassName}>
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
  );
};

export default Video;
