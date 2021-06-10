import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import StyleGuide from '../../../../util/StyleGuide';
import styles from './styles';

type ButtonProps = {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<ViewStyle>;
  borderRadius?: number;
  onPress: () => void;
  backgroundColor?: string;
};

const Button: React.FC<ButtonProps> = ({
  title,
  containerStyle,
  titleStyle,
  onPress,
  borderRadius = 4,
  backgroundColor = StyleGuide.palette.app,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <RectButton
        style={[styles.button, { borderRadius, backgroundColor }]}
        onPress={onPress}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </RectButton>
    </View>
  );
};

export default Button;
