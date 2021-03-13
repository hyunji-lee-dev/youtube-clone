import React, { createRef, memo } from 'react';
import styles from './header.module.css';

const Header = memo(({ onSubmit }) => {
  const inputRef = createRef();

  const handleSubmit = e => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    onSubmit(inputValue);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          href="https://hyunji-lee-youtube-clone.netlify.app"
          className={styles.logo}
        >
          <img src="images/logo.png" alt="logo" className={styles.logoImg} />
          <span>YouTube</span>
        </a>
        <form className={styles.search} onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            className={styles.searchInput}
            placeholder="Search"
          />
          <button className={styles.searchBtn}>
            <img
              src="images/search.png"
              alt="search button"
              className={styles.btnImg}
            />
          </button>
        </form>
      </div>
    </header>
  );
});

export default Header;
