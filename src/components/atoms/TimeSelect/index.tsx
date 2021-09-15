import React from 'react';
import { StyleProp, Text, TextStyle, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import StyleGuide from '~/util/StyleGuide';

import styles from './styles';

type TimeSelectProps = {
  title: string;
  slots: string[];
  style?: StyleProp<TextStyle>;
  value: string;
  onChange: (value: string) => void;
};

const TimeSelect: React.FC<TimeSelectProps> = ({
  title,
  slots,
  style,
  value,
  onChange,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.slots}>
        {slots.map(hour => (
          <RectButton
            onPress={() => onChange(hour)}
            key={hour}
            style={styles.button}
            rippleColor={StyleGuide.palette.secondary}>
            <View
              style={[styles.slot, hour === value ? styles.checkedSlot : {}]}>
              <Text
                style={[styles.hour, hour === value ? styles.checkedHour : {}]}>
                {hour}
              </Text>
            </View>
          </RectButton>
        ))}
      </View>
    </View>
  );
};

export default TimeSelect;
