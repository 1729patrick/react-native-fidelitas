import React, { useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StyleGuide from '~/util/StyleGuide';
import RoundButton from '../buttons/RoundButton';

type CheckboxProps = {
  style?: StyleProp<ViewStyle>;
  toggleCheck: (value: boolean) => void;
  checked: boolean;
};

const Checkbox = ({ style, toggleCheck, checked }: CheckboxProps) => {
  return (
    <RoundButton
      Icon={MaterialIcons}
      name={checked ? 'radio-button-checked' : 'radio-button-unchecked'}
      size={25}
      style={style}
      color={StyleGuide.palette.primary}
      onPress={toggleCheck}
    />
  );
};

export default Checkbox;
