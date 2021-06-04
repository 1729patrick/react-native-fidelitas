import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import MapView, { Marker } from 'react-native-maps';
import StyleGuide from '../../../util/StyleGuide';
import customMapStyle from './customMapStyle';
import styles from './styles';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;

const LATITUDE = 38.6898261;
const LONGITUDE = -9.1733457;

const LATITUDE_DELTA = 0.15;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

type MapProps = {
  width: number;
  height: number;
  openMap?: () => void;
  userInteraction?: boolean;
};

const Map: React.FC<MapProps> = ({
  width,
  height,
  openMap,
  userInteraction = false,
}) => {
  const [state, setState] = useState({
    region: {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
    markers: [
      {
        image: require('../../../assets/map_pin.png'),
        coordinate: {
          latitude: 38.6898261,
          longitude: -9.1733457,
        },
      },
    ],
  });

  return (
    <>
      <View
        style={[
          styles.container,
          { width, height },
          userInteraction ? styles.withoutBorder : {},
        ]}
        pointerEvents={userInteraction ? 'auto' : 'none'}>
        <MapView
          style={styles.map}
          initialRegion={state.region}
          customMapStyle={customMapStyle}>
          {state.markers.map((marker, index) => (
            <Marker
              image={marker.image}
              key={index}
              coordinate={marker.coordinate}
            />
          ))}
        </MapView>
      </View>

      {!userInteraction && (
        <RectButton
          onPress={openMap}
          style={[
            styles.container,
            styles.button,
            { width: width, height: width },
          ]}
          rippleColor={StyleGuide.palette.secondary}
        />
      )}
    </>
  );
};

export default Map;
