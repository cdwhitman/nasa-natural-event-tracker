import { Icon } from '@iconify/react';
import volcanoIcon from '@iconify/icons-twemoji/volcano';
import fireIcon from '@iconify/icons-emojione-v1/fire';
import floatingIce from '@iconify/icons-openmoji/floating-ice';
import stormcloudIcon from '@iconify/icons-fxemoji/stormcloud';




const EventMarker = ({type, onClick, fire, volcano, ice, storm}) => {
  


  return (
    <div className='location-marker' onClick={onClick}>
    {type === 12 && volcano && <div>
      <Icon icon={volcanoIcon} className='icon' />
    </div>}
    {type === 8 && fire &&  <div>
      <Icon icon={fireIcon} className='icon' />
    </div>}
    {type === 10 && storm &&  <div>
      <Icon icon={stormcloudIcon} className='icon' />
    </div>}
    {type === 15 && ice &&  <div>
      <Icon icon={floatingIce} className='icon' />
    </div>}
    </div>
    
  );
};

export default EventMarker;
