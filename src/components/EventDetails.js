import React from 'react';
import styles from './EventDetails.module.css';

const EventDetails = ({ info }) => {
  return (
    <div className={styles.details}>
      <h2>{info.title}</h2>
      <a href={info.url} target='blank'>
        More Information
      </a>
    </div>
  );
};

export default EventDetails;
