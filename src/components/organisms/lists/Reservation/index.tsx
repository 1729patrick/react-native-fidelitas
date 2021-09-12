import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { ReservationType } from '~/api/useReservation';
import ReservationItem from '~/components/molecules/items/ReservationItem';
import List from '../../../atoms/List';

type ReservationListProps = {
  style?: StyleProp<ViewStyle>;
  onPress: (args: ReservationType) => void;
  data: ReservationType[];
  onScrollUp: () => void;
  onScrollDown: () => void;
};

const ReservationList: React.FC<ReservationListProps> = ({
  style,
  onPress,
  data,
  onScrollUp,
  onScrollDown,
}) => {
  return (
    <List
      item={ReservationItem}
      data={data}
      style={style}
      onPress={onPress}
      onScrollUp={onScrollUp}
      onScrollDown={onScrollDown}
    />
  );
};

export default ReservationList;
