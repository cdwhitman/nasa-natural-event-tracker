import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import EventMarker from './EventMarker';
import EventDetails from './EventDetails';
import { Icon } from '@iconify/react';
import volcanoIcon from '@iconify/icons-twemoji/volcano';
import fireIcon from '@iconify/icons-emojione-v1/fire';
import floatingIce from '@iconify/icons-openmoji/floating-ice';
import stormcloudIcon from '@iconify/icons-fxemoji/stormcloud';
import styles from './Map.module.css';

const Map = ({ eventData, center, zoom }) => {
  const [info, setInfo] = useState(null);
  const [fire, setFire] = useState(true)
  const [volcano, setVolcano] = useState(true)
  const [storm, setStorm] = useState(true)
  const [ice, setIce] = useState(true)
  const naturalEvents = eventData.map((ev) => {
      return (
        <EventMarker
          key={ev.id}
          type={ev.categories[0].id}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          fire={fire}
          ice={ice}
          storm={storm}
          volcano={volcano}
          onClick={() =>
            setInfo({
              title: ev.title,
              url: ev.sources[0].url
              // urls: ev.sources[0].url[1]
            })
          }
        />
      );
    })

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <button type='button' className={styles.toggle} onClick={() => setFire(!fire)}><Icon className={styles.icon} icon={fireIcon} /> Wildfires</button>
        <button type='button' className={styles.toggle} onClick={() => setVolcano(!volcano)}> <Icon className={styles.icon} icon={volcanoIcon} />Volcanos</button>
        <button type='button' className={styles.toggle} onClick={() => setIce(!ice)}> <Icon className={styles.icon} icon={floatingIce} />Icebergs</button>
        <button type='button' className={styles.toggle} onClick={() => setStorm(!storm)}> <Icon className={styles.icon} icon={stormcloudIcon} />Tropical Storms</button>
      </div>
    <div className={styles.map}>
      {info && <EventDetails info={info} />}
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_MAP_API_KEY
        }}
        defaultCenter={center}
        defaultZoom={zoom}>
        {naturalEvents}
     
      </GoogleMapReact>
      </div>
      </div>
    
  );
};

Map.defaultProps = {
  center: {
    lat: 19.8968,
    lng: -155.5828
  },
  zoom: 2
};

export default Map
