import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { PurchaseType } from '~/api/usePurchases';
import PurchaseHistoryItem from '~/components/molecules/items/PurchaseHistoryItem';

import List from '../../../atoms/List';

type PurchaseHistoriesListProps = {
  style?: StyleProp<ViewStyle>;
  onPress?: (args: PurchaseType) => void;
  data: PurchaseType[];
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
