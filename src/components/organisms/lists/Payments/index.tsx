import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { PaymentType } from '~/api/usePayments';
import PaymentItem from '~/components/molecules/items/PaymentItem';
import List from '../../../atoms/List';

type PaymentsListProps = {
  style?: StyleProp<ViewStyle>;
  onPress?: (args: PaymentType) => void;
  data?: PaymentType[];
};

const PaymentsList: React.FC<PaymentsListProps> = ({
  style,
  onPress,
  data,
}) => {
  return (
    <List
      item={PaymentItem}
      data={data || []}
      style={style}
      onPress={onPress}
    />
  );
};

export default PaymentsList;
