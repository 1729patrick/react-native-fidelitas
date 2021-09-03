import React from 'react';
import { View } from 'react-native';
import Loader from '../Loader';

import styles from './styles';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Loader />
    </View>
  );
};

export default SplashScreen;
