import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { PurchaseType } from '~/api/usePurchases';
import Currency from '~/components/atoms/Currency';
import { formatDate } from '~/util/Formatters';
import StyleGuide from '~/util/StyleGuide';
import styles from './styles';

export type PurchaseHistoryType = PurchaseType & {
  onPress: (purchase: PurchaseType) => void;
};

const PurchaseHistoryItem: React.FC<PurchaseHistoryType> = ({
  onPress,
  ...purchase
}) => {
  const getDescription = () => {
    const { length } = purchase.products;

    if (length > 1) {
      return `${length} produtos`;
    }

    return `${length} produto`;
  };
  return (
    <View style={styles.border}>
      <RectButton
        style={styles.container}
        rippleColor={StyleGuide.palette.secondary}
        onPress={() => onPress(purchase)}>
        <View style={styles.line}>
          <Text style={[styles.title, styles.type]}>
            {purchase.deliveryType}
          </Text>
          <Text style={styles.date}>{formatDate(purchase.createdAt)}</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.title}>{getDescription()}</Text>
          <Currency price={purchase.total} style={styles.title}></Currency>
        </View>
      </RectButton>
    </View>
  );
};

export default PurchaseHistoryItem;
