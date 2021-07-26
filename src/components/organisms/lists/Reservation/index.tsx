import React from 'react';
import { AlertType, StyleProp, ViewStyle } from 'react-native';
import ReservationItem, {
  ReservationType,
} from '~/components/molecules/items/ReservationItem';
import List from '../../../atoms/List';

type ReservationListProps = {
  style?: StyleProp<ViewStyle>;
  onPress?: (args: AlertType) => void;
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
