import React from 'react';
import { useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import StyleGuide from '~/util/StyleGuide';

type SwitchProps = {
  toggleSwitch: (value: boolean) => void;
  isEnabled: boolean;
  style: StyleProp<ViewStyle>;
};
export default ({ toggleSwitch, style, isEnabled }: SwitchProps) => {
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
