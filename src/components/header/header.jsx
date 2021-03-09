import React from 'react';
import styles from './header.module.css';

const Header = props => {
  return (
    <header>
      <a href="http://localhost:3000/" className={styles.logo}>
        <img src="images/logo.png" alt="logo" className={styles.logoImg} />
        <span>YouTube</span>
      </a>
      <form className={styles.search}>
        <input
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
    </header>
  );
};

export default Header;
