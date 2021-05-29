import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';

const { height, width } = Dimensions.get('window');

export const Screen1 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/welcome/welcome_3.jpg')}
        style={{ height, width }}
        resizeMode="cover"
      />
    </View>
  );
};

export const Screen2 = () => {
  return (
    <View style={styles.container}>
      <FastImage
        source={require('../../../../assets/welcome/welcome_2.jpg')}
        style={{ height, width }}
        resizeMode="cover"
      />
    </View>
  );
};

export const Screen3 = () => {
  return (
    <View style={styles.container}>
      <FastImage
        source={require('../../../../assets/welcome/welcome_1.jpg')}
        style={{ height, width }}
        resizeMode="cover"
      />
    </View>
  );
};

export const Screen4 = () => {
  return (
    <View style={styles.container}>
      <FastImage
        source={require('../../../../assets/welcome/welcome_4.jpg')}
        style={{ height, width }}
        resizeMode="cover"
      />
    </View>
  );
};
