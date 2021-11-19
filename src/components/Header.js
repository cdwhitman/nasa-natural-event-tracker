import React, { Fragment } from 'react';
import styles from './Header.module.css';
const Header = () => {
  return (
    <Fragment>
      <header className={styles.Header}>
        NASA Powered Natural Event Tracker
      </header>
    </Fragment>
  );
};

export default Header;
