import React from 'react';
import { Icon } from '@iconify/react';
import floatingIce from '@iconify/icons-openmoji/floating-ice';

const WildfireMarker = ({ lat, lng, id, onClick }) => {
  return (
    <div className='location-marker' onClick={onClick}>
      <Icon icon={floatingIce} className='icon' />
    </div>
  );
};

export default WildfireMarker;
