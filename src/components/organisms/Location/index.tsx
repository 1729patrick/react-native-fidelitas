import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import StyleGuide from '../../../util/StyleGuide';
import Map from '../../molecules/Map';
import styles from './styles';

const { width } = Dimensions.get('window');
const Location = () => {
  return (
    <View>
      <Text style={styles.subtitle}>Localização</Text>

      <Text style={styles.address}>
        Avenida Professor Orlando Ribeiro, 2910-278, Setúbal, Portugal
      </Text>
      <Map width={width - StyleGuide.spacing * 6} />
    </View>
  );
};

export default Location;
