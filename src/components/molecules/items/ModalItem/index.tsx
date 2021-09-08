import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';

import styles from './styles';

import { translate } from '~/i18n';
import { RectButton } from 'react-native-gesture-handler';
import { icons } from './constants';

type Type = 'edit' | 'delete';

export type ModalType = {
  type: Type;
};

type FacilityProps = ModalType & {
  style?: StyleProp<ViewStyle>;
  onPress: (type: Type) => void;
};

const ModalItem: React.FC<FacilityProps> = ({ onPress, type, style }) => {
  return (
    <RectButton style={[styles.container, style]} onPress={() => onPress(type)}>
      {icons[type as keyof typeof icons]}
      <Text style={styles.title}>{translate(type)}</Text>
    </RectButton>
  );
};

export default ModalItem;
