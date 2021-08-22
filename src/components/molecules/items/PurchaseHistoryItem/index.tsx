import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import StyleGuide from '~/util/StyleGuide';
import styles from './styles';

export type PurchaseHistoryType = {
  onPress: () => void;
};

const PurchaseHistoryItem: React.FC<PurchaseHistoryType> = ({ onPress }) => {
  return (
    <View style={styles.border}>
      <RectButton
        style={styles.container}
        rippleColor={StyleGuide.palette.secondary}
        onPress={onPress}>
        <View style={styles.line}>
          <Text style={styles.title}>Delivery</Text>
          <Text style={styles.description}>12/02/2021</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.title}>Avenida Roque Ribeiro, 2910-278</Text>
          <Text style={styles.title}>2 €</Text>
        </View>
      </RectButton>
    </View>
  );
};

export default PurchaseHistoryItem;
