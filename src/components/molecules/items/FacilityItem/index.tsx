import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';

import styles from './styles';

import { FacilityType } from '~/contexts/Restaurant';
import { icons } from './constants';
import { translate, TranslationKeyType } from '~/i18n';

type FacilityProps = {
  style?: StyleProp<ViewStyle>;
} & FacilityType;

const FacilityItem: React.FC<FacilityProps> = ({ title, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{translate(title as TranslationKeyType)}</Text>
      {icons[title as keyof typeof icons]}
    </View>
  );
};

export default FacilityItem;
