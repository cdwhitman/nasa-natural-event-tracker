import React from 'react';
import styles from './EventDetails.module.css';

const EventDetails = ({ info }) => {

  return (
    <div className={styles.details}>
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
