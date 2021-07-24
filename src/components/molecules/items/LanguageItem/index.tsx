import React from 'react';
import { View, Text } from 'react-native';
import Checkbox from '~/components/atoms/Checkbox';

import styles from './styles';

export type LanguageType = {
  title: string;
  onPress: (value: boolean) => void;
};

type LanguageProps = {} & LanguageType;

const LanguageItem: React.FC<LanguageProps> = ({ title, onPress }) => {
  return (
    <View style={styles.container} key={title}>
      <Text style={styles.title}>{title}</Text>

      <Checkbox onChange={onPress} style={styles.checkbox} />
    </View>
  );
};

export default LanguageItem;
