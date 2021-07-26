/* eslint-disable */

import React, { ReactNode } from 'react';
import { StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';
import { RectButton as RNRectButton } from 'react-native-gesture-handler';
import StyleGuide from '../../../../util/StyleGuide';
import styles from './styles';

type ButtonProps = {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  borderRadius?: number;
  onPress: () => void;
  backgroundColor?: string;
  icon?: ReactNode;
  outline?: boolean;
};

const RectButton: React.FC<ButtonProps> = ({
  title,
  containerStyle,
  titleStyle,
  onPress,
  borderRadius = 4,
  backgroundColor = StyleGuide.palette.app,
  icon,
  outline = false,
}) => {
  return (
    <View
      style={[
        styles.container,
        containerStyle,
        { borderRadius },
        outline ? { borderColor: backgroundColor, borderWidth: 1.5 } : {},
      ]}>
      <RNRectButton
        rippleColor={outline ? backgroundColor : undefined}
        style={[
          styles.button,
          {
            backgroundColor: outline ? 'transparent' : backgroundColor,
          },
          icon ? { justifyContent: 'space-between' } : {},
        ]}
        onPress={onPress}>
        <Text
          style={[styles.title, titleStyle, icon ? { paddingRight: 12 } : {}]}>
          {title}
        </Text>
        {icon}
      </RNRectButton>
    </View>
  );
};

export default RectButton;
