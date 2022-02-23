import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import EventMarker from './EventMarker';
import EventDetails from './EventDetails';
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
    <div>
      <div>
        <button type='button' onClick={() => setFire(!fire)}>fire</button>
        <button type='button' onClick={() => setVolcano(!volcano)}>Volcano</button>
        <button type='button' onClick={() => setIce(!ice)}>Ice</button>
        <button type='button' onClick={() => setStorm(!storm)}>Storm</button>
      </div>
    <div className={styles.map}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_MAP_API_KEY
        }}
        defaultCenter={center}
        defaultZoom={zoom}>
        {naturalEvents}
      </GoogleMapReact>
      {info && <EventDetails info={info} />}
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
