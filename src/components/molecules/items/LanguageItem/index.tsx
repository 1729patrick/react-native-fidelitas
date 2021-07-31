import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Checkbox from '~/components/atoms/Checkbox';
import StyleGuide from '~/util/StyleGuide';

import styles from './styles';

export type LanguageType = {
  title: string;
  onPress: (value: boolean) => void;
};

type LanguageProps = {} & LanguageType;

const LanguageItem: React.FC<LanguageProps> = ({ title, onPress }) => {
  const [checked, setChecked] = useState(false);

  const toggleCheck = () => {
    setChecked(previousState => {
      const newState = !previousState;

      onPress(newState);
      return newState;
    });
  };

  return (
    <View style={styles.border}>
      <RectButton
        style={styles.container}
        key={title}
        rippleColor={StyleGuide.palette.primary}
        onPress={toggleCheck}>
        <Text style={styles.title}>{title}</Text>

        <Checkbox
          toggleCheck={toggleCheck}
          checked={checked}
          style={styles.checkbox}
        />
      </RectButton>
    </View>
  );
};

export default LanguageItem;
