import React, { ReactElement, useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Switch from '~/components/atoms/Switch';
import StyleGuide from '~/util/StyleGuide';

import styles from './styles';

export type NotificationConfigType = {
  icon: ReactElement;
  title: string;
  onPress: (args: boolean) => void;
};

type NotificationConfigProps = {} & NotificationConfigType;

const NotificationConfigItem: React.FC<NotificationConfigProps> = ({
  title,
  icon,
  onPress,
}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => {
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
        onPress={toggleSwitch}
        rippleColor={StyleGuide.palette.secondary}>
        {icon}
        <Text style={styles.title}>{title}</Text>

        <Switch
          toggleSwitch={toggleSwitch}
          isEnabled={isEnabled}
          style={styles.toggle}
        />
      </RectButton>
    </View>
  );
};

export default NotificationConfigItem;
