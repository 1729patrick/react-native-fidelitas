import React from 'react';
import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';

import styles from './styles';

import { translate } from '~/i18n';
import { icons } from './constants';
import { RectButton } from 'react-native-gesture-handler';

export type ModalTypes = 'edit' | 'delete' | 'getReward' | 'cancel';

export type ModalType = {
  type: ModalTypes;
};

type ModalProps = ModalType & {
  style?: StyleProp<ViewStyle>;
  onPress: (type: ModalTypes) => void;
};

const ModalItem: React.FC<ModalProps> = ({ onPress, type, style }) => {
  return (
    <RectButton>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => onPress(type)}
        style={[styles.container, style]}>
        {icons[type as keyof typeof icons]}
        <Text style={styles.title}>{translate(type)}</Text>
      </TouchableOpacity>
    </RectButton>
  );
};

export default ModalItem;
