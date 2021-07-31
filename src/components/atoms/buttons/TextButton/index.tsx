import React from 'react';
import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';
import styles from './styles';

type TextButtonProps = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const TextButton: React.FC<TextButtonProps> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
