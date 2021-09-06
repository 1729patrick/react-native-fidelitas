import React from 'react';
import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';
import styles from './styles';

type TextButtonProps = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

const TextButton: React.FC<TextButtonProps> = ({
  title,
  onPress,
  style,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style, disabled ? styles.disabled : {}]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
