import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import VolcanoMarker from './VolcanoMarker';
import WildfireMarker from './WildfireMarker';
import IceMarker from './IceMarker';
import StormMarker from './StormMarker';
import EventDetails from './EventDetails';
import styles from './Map.module.css';

const Map = ({ eventData, center, zoom }) => {
  const [info, setInfo] = useState(null);

  const naturalEvents = eventData.map((ev) => {
    if (ev.categories[0].id === 12) {
      return (
        <VolcanoMarker
          key={ev.id}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() =>
            setInfo({
              title: ev.title,
              url: ev.sources[0].url
              // urls: ev.sources[0].url[1]
            })
          }
        />
      );
    }
    if (ev.categories[0].id === 8) {
      return (
        <WildfireMarker
          key={ev.id}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() =>
            setInfo({
              title: ev.title,
              url: ev.sources[0].url
              // urls: ev.sources[1].url
            })
          }
        />
      );
    }
    if (ev.categories[0].id === 15) {
      return (
        <IceMarker
          key={ev.id}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() =>
            setInfo({
              title: ev.title,
              url: ev.sources[0].url
              // urls: ev.sources[1].url
            })
          }
        />
      );
    }
    if (ev.categories[0].id === 10) {
      return (
        <StormMarker
          key={ev.id}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() =>
            setInfo({
              title: ev.title,
              url: ev.sources[1].url
              // urls: ev.sources[1].url
            })
          }
        />
      );
    }
    return null;
  });

  return (
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
  );
};

Map.defaultProps = {
  center: {
    lat: 19.8968,
    lng: -155.5828
  },
  zoom: 2
};

export default Map;
