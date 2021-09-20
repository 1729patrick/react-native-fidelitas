import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';

export const Screen1 = () => {
  return (
    <View style={styles.container}>
      <FastImage
        source={require('../../../../assets/welcome/welcome_3.jpg')}
        style={{ height: '100%' }}
        resizeMode={FastImage.resizeMode.stretch}
      />
    </View>
  );
};

export const Screen2 = () => {
  return (
    <View style={styles.container}>
      <FastImage
        source={require('../../../../assets/welcome/welcome_2.jpg')}
        style={{ height: '100%' }}
        resizeMode={FastImage.resizeMode.stretch}
      />
    </View>
  );
};

export const Screen3 = () => {
  return (
    <View style={styles.container}>
      <FastImage
        source={require('../../../../assets/welcome/welcome_1.jpg')}
        style={{ height: '100%' }}
        resizeMode={FastImage.resizeMode.stretch}
      />
    </View>
  );
};

export const Screen4 = () => {
  return (
    <View style={styles.container}>
      <FastImage
        source={require('../../../../assets/welcome/welcome_4.jpg')}
        style={{ height: '100%' }}
        resizeMode={FastImage.resizeMode.stretch}
      />
    </View>
  );
};
