import React from 'react';
import styles from './video.module.css';

const Video = ({ video, id, onSelect, selected }) => {
  const handleClick = e => {
    const id = e.currentTarget.id;
    onSelect(id);
  };

  const liClassName = selected ? styles.side : undefined;
  const thumbnailClassName = selected ? styles.thumbnailSide : undefined;
  const descriptionClassName = selected ? styles.descriptionSide : undefined;

  return (
    <li id={id} onClick={handleClick} className={liClassName}>
      <img
        src={video.thumbnail}
        alt={video.title}
        className={thumbnailClassName}
      />
      <div className={descriptionClassName}>
        <p className={styles.title}>{video.title}</p>
        <p className={styles.channel}>{video.channel}</p>
      </div>
    </li>
  );
};

export default Video;
