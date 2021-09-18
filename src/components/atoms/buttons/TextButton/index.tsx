import React from 'react';
import { StyleProp, Text, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StyleGuide from '~/util/StyleGuide';
import Loader from '../../Loader';
import styles from './styles';

type TextButtonProps = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  loading?: boolean;
  color?: string;
};

const TextButton: React.FC<TextButtonProps> = ({
  title,
  onPress,
  style,
  disabled,
  loading,
  color = StyleGuide.palette.app,
}) => {
  if (loading) {
    return <Loader color={color} size={'large'} />;
  }

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.button, { color }, disabled ? styles.disabled : {}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
