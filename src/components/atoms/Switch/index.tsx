import React from 'react';
import { useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import StyleGuide from '~/util/StyleGuide';

type SwitchProps = {
  onPress: (value: boolean) => void;
  style: StyleProp<ViewStyle>;
};
export default ({ onPress, style }: SwitchProps) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => {
      const newState = !previousState;

      onPress(newState);
      return newState;
    });
  };

  return (
    <Switch
      style={style}
      trackColor={{ false: '#767577', true: '#d4d3d4' }}
      thumbColor={isEnabled ? StyleGuide.palette.app : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
