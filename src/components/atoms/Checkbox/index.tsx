import React, { useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StyleGuide from '~/util/StyleGuide';
import RoundButton from '../buttons/RoundButton';

type CheckboxProps = {
  style?: StyleProp<ViewStyle>;
  onChange: (value: boolean) => void;
};

const Checkbox = ({ style, onChange }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  const toggleCheck = () => {
    setChecked(previousState => {
      const newState = !previousState;

      onChange(newState);
      return newState;
    });
  };

  return (
    <RoundButton
      Icon={MaterialIcons}
      name={checked ? 'radio-button-checked' : 'radio-button-unchecked'}
      size={27}
      style={style}
      color={StyleGuide.palette.primary}
      onPress={() => toggleCheck()}
    />
  );
};

export default Checkbox;
