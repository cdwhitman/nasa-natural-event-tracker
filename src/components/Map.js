import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import VolcanoDetails from './VolcanoDetails';
import styles from './Map.module.css';

const Map = ({ eventData, center, zoom }) => {
  const [volcanoInfo, setVolcanoInfo] = useState(null);

  const volcanos = eventData.map((ev) => {
    if (ev.categories[0].id === 12) {
      return (
        <LocationMarker
          key={ev.id}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() =>
            setVolcanoInfo({
              title: ev.title,
              url: ev.sources[0].url
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
        {volcanos}
      </GoogleMapReact>
      {volcanoInfo && <VolcanoDetails info={volcanoInfo} />}
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
