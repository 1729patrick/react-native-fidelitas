import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/Ionicons';
import StyleGuide from '~/util/StyleGuide';
import RoundButton from '../buttons/RoundButton';
import styles from './styles';

type CheckboxProps = {
  style?: StyleProp<ViewStyle>;
  onChange: (value: boolean) => void;
  checked: boolean;
  type: 'square' | 'radio';
  label?: string;
};

const icons = {
  radio: {
    checked: 'radio-button-on-outline',
    unchecked: 'radio-button-off-sharp',
  },
  square: { checked: 'ios-checkbox', unchecked: 'square-outline' },
};

const Checkbox = ({
  style,
  onChange,
  checked,
  type = 'radio',
  label,
}: CheckboxProps) => {
  return (
    <View style={[styles.container, style]}>
      <RoundButton
        Icon={MaterialIcons}
        name={checked ? icons[type].checked : icons[type].unchecked}
        size={25}
        color={StyleGuide.palette.primary}
        onPress={() => onChange(!checked)}
      />

      {label && (
        <TouchableWithoutFeedback onPress={() => onChange(!checked)}>
          <Text style={styles.label}>{label}</Text>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

export default Checkbox;
