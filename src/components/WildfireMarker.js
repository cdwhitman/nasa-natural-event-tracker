import React from 'react';
import { Icon } from '@iconify/react';
import fireIcon from '@iconify/icons-emojione-v1/fire';

const WildfireMarker = ({ lat, lng, id, onClick }) => {
  return (
    <div className='location-marker' onClick={onClick}>
      <Icon icon={fireIcon} className='icon' />
    </div>
  );
};

export default WildfireMarker;
