import React from 'react';
import { AlertType, StyleProp, ViewStyle } from 'react-native';
import PurchaseHistoryItem from '~/components/molecules/items/PurchaseHistoryItem';

import List from '../../../atoms/List';

type PurchaseHistoriesListProps = {
  style?: StyleProp<ViewStyle>;
  onPress?: (args: AlertType) => void;
  data: any[];
};

const PurchaseHistoriesList: React.FC<PurchaseHistoriesListProps> = ({
  style,
  data,
  onPress,
}) => {
  return (
    <List
      item={PurchaseHistoryItem}
      data={data}
      style={style}
      onPress={onPress}
    />
  );
};

export default PurchaseHistoriesList;
