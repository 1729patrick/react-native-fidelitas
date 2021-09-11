import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const CC = ({ number }: { number: string }) => {
  return (
    <View style={styles.container}>
      {[1, 2, 3].map(x => (
        <View key={x} style={styles.dots}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      ))}
      <Text style={styles.number}>{number}</Text>
    </View>
  );
};

export default CC;
