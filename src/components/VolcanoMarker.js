import React from 'react';
import { Icon } from '@iconify/react';
import volcanoIcon from '@iconify/icons-twemoji/volcano';

const VolcanoMarker = ({ lat, lng, id, onClick }) => {
  return (
    <div className='location-marker' onClick={onClick}>
      <Icon icon={volcanoIcon} className='icon' />
    </div>
  );
};

export default VolcanoMarker;
