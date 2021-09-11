import React from 'react';
import { View, Text } from 'react-native';
import StyleGuide from '~/util/StyleGuide';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const CC = ({ number }: { number?: string }) => {
  return (
    <View style={styles.container}>
      <Icon
        name="card-outline"
        size={25}
        color={StyleGuide.palette.primary}
        style={styles.icon}
      />

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
