import * as React from 'react';
import Svg, { Defs, LinearGradient, Stop, Circle } from 'react-native-svg';
import StyleGuide from '../../../util/StyleGuide';
import { Text, View } from 'react-native';
import styles from './styles';

const size = 55;
const strokeWidth = 4;
const { PI } = Math;

const r = (size - strokeWidth) / 2;
const cx = size / 2;
const cy = size / 2;

interface CircularProgressProps {
  progress: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ progress }) => {
  const circumference = 2 * PI * r;

  const strokeDashoffset = ((100 - progress) / 100) * circumference;

  return (
    <View>
      <Svg width={size} height={size} style={styles.svg}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
            <Stop offset="0" stopColor={StyleGuide.palette.app} />
            <Stop offset="1" stopColor={StyleGuide.palette.app} />
          </LinearGradient>
        </Defs>
        <Circle
          fill="none"
          stroke={'rgba(0,0,0,0.1)'}
          strokeDasharray={circumference}
          strokeWidth={strokeWidth}
          cx={cx}
          cy={cy}
          r={r}
        />
        <Circle
          fill="none"
          stroke="url(#grad)"
          strokeDasharray={circumference}
          strokeWidth={strokeWidth}
          cx={cx}
          cy={cy}
          r={r}
          strokeDashoffset={strokeDashoffset}
        />
      </Svg>
      <View style={[styles.container, { width: size, height: size }]}>
        <Text style={[styles.percent]}>{progress.toFixed(0)}%</Text>
      </View>
    </View>
  );
};

export default CircularProgress;
