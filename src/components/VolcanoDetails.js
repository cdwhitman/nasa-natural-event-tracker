import React from 'react';
import styles from './VolcanoDetails.module.css';

const VolcanoDetails = ({ info }) => {
  return (
    <div className={styles.details}>
      <h2>{info.title}</h2>
      <a href={info.url} target='blank'>
        More Information
      </a>
    </div>
  );
};

export default VolcanoDetails;
