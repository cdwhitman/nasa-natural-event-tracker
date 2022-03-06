import React from 'react';
import { Icon } from '@iconify/react';
import styles from './EventDetails.module.css';

const EventDetails = ({ info, close }) => {

  // const close = () => {
  //   setInfo(null)
  // }
   
  return (
    <div className={styles.details}>
      <div className={styles.close} onClick={close}><Icon icon="ep:close-bold" /></div>
      <h2>{info.title}</h2>
      <p>More Information:</p>
      <div>
        <a href={info.url} target='blank' className={styles.links}>
          {info.url}
        </a>
        {info.urls !== undefined && info.urls !== info.url && (
          <a href={info.urls} target='blank' className={styles.links}>
            {info.urls}
          </a>
        )}
      </div>
    </div>
  );
};

export default EventDetails;
