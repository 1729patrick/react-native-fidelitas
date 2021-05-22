import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';

type ButtonProps = {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({
  title,
  containerStyle,
  titleStyle,
  onPress,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <RectButton style={[styles.button]} onPress={onPress}>
        <Text style={titleStyle}>{title}</Text>
      </RectButton>
    </View>
  );
};

export default Button;
