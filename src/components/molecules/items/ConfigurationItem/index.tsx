import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import StyleGuide from '~/util/StyleGuide';

import styles from './styles';

export type ConfigurationType = {
  title: string;
  icon: ReactElement;
  onPress: () => void;
};

type ConfigurationProps = {} & ConfigurationType;

const ConfigurationItem: React.FC<ConfigurationProps> = ({
  title,
  icon,
  onPress,
}) => {
  return (
    <View style={styles.container} key={title}>
      <RectButton
        key={title}
        style={styles.button}
        rippleColor={StyleGuide.palette.secondary}
        onPress={onPress}>
        {icon}
        <Text style={styles.title}>{title}</Text>
      </RectButton>
    </View>
  );
};

export default ConfigurationItem;
