import React from 'react';

import { RectButton as RNRectButton } from 'react-native-gesture-handler';
import StyleGuide from '~/util/StyleGuide';

import styles from './styles';

import Animated from 'react-native-reanimated';

import { PaymentType } from '~/api/usePayments';
import CC from '~/components/atoms/CC';

export type PaymentProps = PaymentType & {
  onPress: (value: PaymentType) => void;
};

const PaymentItem: React.FC<PaymentProps> = ({ onPress, ...payment }) => {
  return (
    <Animated.View style={[styles.border]}>
      <RNRectButton
        style={styles.item}
        rippleColor={StyleGuide.palette.secondary}
        onPress={() => onPress(payment)}>
        <CC number={payment.number} />
      </RNRectButton>
    </Animated.View>
  );
};

export default PaymentItem;
