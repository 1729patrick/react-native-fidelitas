import React from 'react';
import { View, Text } from 'react-native';
import { RectButton as RNRectButton } from 'react-native-gesture-handler';
import StyleGuide from '~/util/StyleGuide';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { STATUS } from './constants';
import { ReservationType } from '~/api/useReservation';
import { formatHumanDate } from '~/util/Formatters';

type ReservationProps = ReservationType & {
  onPress: (args: ReservationType) => void;
};

const ReservationItem: React.FC<ReservationProps> = ({
  onPress,
  ...reservation
}) => {
  const status_ = STATUS[reservation.status];

  const size = reservation.adults + reservation.babies + reservation.kids;

  return (
    <View style={[styles.border]}>
      <RNRectButton
        style={styles.item}
        rippleColor={StyleGuide.palette.secondary}
        onPress={() => onPress(reservation)}>
        <View style={styles.row}>
          <Text style={styles.title} numberOfLines={1}>
            {reservation.type}
          </Text>
          <Text
            style={[
              styles.description,
              styles.status,
              { color: status_.color },
            ]}>
            {status_.title}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.description} numberOfLines={1}>
            {formatHumanDate(reservation.date, reservation.time)}
          </Text>

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
      </RNRectButton>
    </View>
  );
};

export default ReservationItem;
