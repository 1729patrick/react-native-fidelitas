import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';

type ButtonProps = {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<ViewStyle>;
  borderRadius?: number;
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({
  title,
  containerStyle,
  titleStyle,
  onPress,
  borderRadius = 4,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <RectButton style={[styles.button, { borderRadius }]} onPress={onPress}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </RectButton>
    </View>
  );
};

export default Button;
