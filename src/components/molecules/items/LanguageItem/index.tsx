import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Checkbox from '~/components/atoms/Checkbox';
import { NormalizeTranslate } from '~/i18n';
import StyleGuide from '~/util/StyleGuide';

import styles from './styles';

export type LanguageType = {
  id: NormalizeTranslate;
  title: string;
};

type LanguageProps = LanguageType & {
  language: NormalizeTranslate;
  onPress: (value: NormalizeTranslate) => void;
};

const LanguageItem: React.FC<LanguageProps> = ({
  id,
  title,
  onPress,
  language,
}) => {
  return (
    <View style={styles.border}>
      <RectButton
        style={styles.container}
        key={title}
        rippleColor={StyleGuide.palette.secondary}
        onPress={() => onPress(id)}>
        <Text style={styles.title}>{title}</Text>

        <Checkbox
          toggleCheck={() => onPress(id)}
          checked={language === id}
          style={styles.checkbox}
        />
      </RectButton>
    </View>
  );
};

export default LanguageItem;
