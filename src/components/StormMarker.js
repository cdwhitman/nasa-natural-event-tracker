import React from 'react';
import { Icon } from '@iconify/react';
import stormcloudIcon from '@iconify/icons-fxemoji/stormcloud';

const StormMarker = ({ lat, lng, onClick }) => {
  return (
    <div className='location-marker' onClick={onClick}>
      <Icon icon={stormcloudIcon} className='icon' />
    </div>
  );
};

export default StormMarker;
