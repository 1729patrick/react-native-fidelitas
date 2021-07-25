import React from 'react';
import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';
import styles from './styles';

type LinkButtonProps = {
  title: string;
  onPress: () => void;
  style: StyleProp<ViewStyle>;
};

const LinkButton: React.FC<LinkButtonProps> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.link}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LinkButton;
