import React from 'react';
import { Dimensions, View } from 'react-native';
import Header from '../../components/atoms/Header';
import Map from '../../components/molecules/Map';

const { width, height } = Dimensions.get('window');

export default () => {
  return (
    <View>
      <Header title="Localização" />
      <Map width={width} height={height} userInteraction />
    </View>
  );
};
