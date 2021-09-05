import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import { MaskedText } from 'react-native-mask-text';
import StyleGuide from '~/util/StyleGuide';
import styles from './styles';

type CurrencyProps = {
  price?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
};

const Currency: React.FC<CurrencyProps> = ({
  price,
  color = StyleGuide.palette.primary,
  style,
}) => {
  if (price === undefined) {
    return null;
  }

  return (
    <MaskedText
      style={[styles.currency, { color }, style]}
      type="currency"
      options={{
        prefix: '€ ',
        decimalSeparator: ',',
        groupSeparator: '.',
        precision: 2,
      }}>
      {`${price}`}
    </MaskedText>
  );
};

export default Currency;
