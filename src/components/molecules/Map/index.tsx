import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import customMapStyle from './customMapStyle';
import styles from './styles';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;

const LATITUDE = 38.6898261;
const LONGITUDE = -9.1733457;

const LATITUDE_DELTA = 0.2;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

type MapProps = {
  width: number;
};

const Map: React.FC<MapProps> = ({ width }) => {
  const [state, setState] = useState({
    region: {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
    markers: [
      {
        key: 'company',
        image: require('../../../assets/map_pin.png'),
        coordinate: {
          latitude: 38.6898261,
          longitude: -9.1733457,
        },
      },
    ],
  });

  return (
    <View style={[styles.container, { width: width, height: width }]}>
      <MapView
        style={styles.map}
        initialRegion={state.region}
        customMapStyle={customMapStyle}>
        {state.markers.map(marker => (
          <Marker
            title={marker.key}
            image={marker.image}
            key={marker.key}
            coordinate={marker.coordinate}
          />
        ))}
      </MapView>
    </View>
  );
};

export default Map;
