import React from 'react';
import { View } from 'react-native';
import styles from './styles';

type IndicatorProps = {
  width: number;
  marginHorizontal: number;
  backgroundColor: string;
};
const Indicator: React.FC<IndicatorProps> = ({
  width,
  backgroundColor,
  marginHorizontal,
}) => {
  return (
    <View
      style={[styles.indicator, { backgroundColor, width, marginHorizontal }]}
    />
  );
};

export default Indicator;
