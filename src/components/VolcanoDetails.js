import React from 'react';
import styles from './VolcanoDetails.module.css';

const VolcanoDetails = ({ info }) => {
  return (
    <div className={styles.details}>
      <h2>{info.title}</h2>
      <p>Date Active: {info.date} </p>
      <a href={info.url} target='blank'>
        More Info
      </a>
    </div>
  );
};

export default VolcanoDetails;
