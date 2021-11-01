import React from 'react';
import { Icon } from '@iconify/react';
import volcanoIcon from '@iconify/icons-twemoji/volcano';

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className='location-marker' onClick={onClick}>
      <Icon icon={volcanoIcon} className='volcano-icon' />
    </div>
  );
};

export default LocationMarker;
