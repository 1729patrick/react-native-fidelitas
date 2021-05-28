import React from 'react';
import { View } from 'react-native';
import styles from './styles';

type IndicatorProps = {
  width: number;
  backgroundColor: string;
};
const Indicator: React.FC<IndicatorProps> = ({ width, backgroundColor }) => {
  return <View style={[styles.indicator, { backgroundColor, width }]} />;
};

export default Indicator;
