import React from 'react';
import { StyleProp, Text, TextStyle, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import StyleGuide from '~/util/StyleGuide';

import styles from './styles';

type TimeSelectProps = {
  title: string;
  slots: string[];
  style?: StyleProp<TextStyle>;
};

const TimeSelect: React.FC<TimeSelectProps> = ({ title, slots, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.slots}>
        {slots.map(hour => (
          <RectButton
            style={styles.button}
            rippleColor={StyleGuide.palette.secondary}>
            <View style={styles.slot}>
              <Text style={styles.hour}>{hour}</Text>
            </View>
          </RectButton>
        ))}
      </View>
    </View>
  );
};

export default TimeSelect;
