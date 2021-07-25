import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const QRCodeMask = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left} />
      <View style={styles.right} />
      <View style={styles.bottom} />
      <View style={styles.top} />
      <View style={styles.border} />
    </View>
  );
};

export default QRCodeMask;
