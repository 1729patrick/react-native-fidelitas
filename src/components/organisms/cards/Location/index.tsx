import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Map from '~/components/molecules/Map';
import StyleGuide from '~/util/StyleGuide';
import styles from './styles';

const { width } = Dimensions.get('window');

type LocationProps = {
  openMap: () => void;
};

const Location: React.FC<LocationProps> = ({ openMap }) => {
  return (
    <View>
      <Text style={styles.subtitle}>Localização</Text>

      <Text style={styles.address}>
        Avenida Professor Orlando Ribeiro, 2910-278, Setúbal, Portugal
      </Text>
      <Map
        width={width - StyleGuide.spacing * 6}
        height={width - StyleGuide.spacing * 6}
        openMap={openMap}
      />
    </View>
  );
};

export default Location;
