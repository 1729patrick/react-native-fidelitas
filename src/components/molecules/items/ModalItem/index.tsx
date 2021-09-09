import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';

import styles from './styles';

import { translate } from '~/i18n';
import { RectButton } from 'react-native-gesture-handler';
import { icons } from './constants';

export type ModalTypes = 'edit' | 'delete';

export type ModalType = {
  type: ModalTypes;
};

type ModalProps = ModalType & {
  style?: StyleProp<ViewStyle>;
  onPress: (type: ModalTypes) => void;
};

const ModalItem: React.FC<ModalProps> = ({ onPress, type, style }) => {
  return (
    <RectButton style={[styles.container, style]} onPress={() => onPress(type)}>
      {icons[type as keyof typeof icons]}
      <Text style={styles.title}>{translate(type)}</Text>
    </RectButton>
  );
};

export default ModalItem;
