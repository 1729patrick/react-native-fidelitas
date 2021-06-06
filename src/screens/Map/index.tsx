import React from 'react';
import { Dimensions, View } from 'react-native';
import Header from '../../components/atoms/Header';
import Map from '../../components/molecules/Map';
import useHideTabBar from '../../hooks/useHideTabBar';
import useStatusBar from '../../hooks/useStatusBar';

const { width, height } = Dimensions.get('window');

export default () => {
  useHideTabBar();
  useStatusBar(true);

  return (
    <View>
      <Header title="Localização" elevation={1} />
      <Map width={width} height={height} userInteraction />
    </View>
  );
};
