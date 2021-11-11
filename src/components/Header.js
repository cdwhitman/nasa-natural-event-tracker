import React, { Fragment } from 'react';
import styles from './Header.module.css';
const Header = () => {
  return (
    <Fragment>
      <header>
        NASA Powered Natural Event Tracker
        <div className={styles.options}>
          <input
            type='checkbox'
            id='wildfires'
            name='Wildfires'
            value='wildfires'
            defaultChecked='checked'
          />
          Wildfires
          <input
            type='checkbox'
            id='volcanos'
            name='Volcanos'
            value='volcanos'
            defaultChecked='checked'
          />
          Volcanos
          <input
            type='checkbox'
            id='storms'
            name='Storms'
            value='storms'
            defaultChecked='checked'
          />
          Storms
          <input
            type='checkbox'
            id='icebergs'
            name='Icebergs'
            value='icebergs'
            defaultChecked='checked'
          />
          Icebergs
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
