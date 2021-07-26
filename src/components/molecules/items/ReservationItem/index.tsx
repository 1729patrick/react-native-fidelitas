import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import StyleGuide from '~/util/StyleGuide';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

export type ReservationType = {
  type: string;
  size: number;
  date: string;
  deposit: number;
  status: string;
};

type ReservationProps = {
  onPress?: (args: Partial<ReservationType>) => void;
} & ReservationType;

const ReservationItem: React.FC<ReservationProps> = ({
  type,
  size,
  date,
  status,
  onPress,
}) => {
  return (
    <View style={styles.border}>
      <RectButton
        style={styles.item}
        rippleColor={StyleGuide.palette.secondary}
        onPress={() => onPress?.({ date })}>
        <View style={styles.info}>
          <View style={styles.row}>
            <Text style={styles.title}>{type}</Text>
            <Text style={[styles.description, styles.status]}>{status}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.description}>{date}</Text>

            <View style={[styles.row, styles.size]}>
              <Icon
                name="people-outline"
                size={17}
                color={StyleGuide.palette.light}
                style={styles.icon}
              />
              <Text style={styles.description}>{size}</Text>
            </View>
          </View>
        </View>
      </RectButton>
    </View>
  );
};

export default ReservationItem;
