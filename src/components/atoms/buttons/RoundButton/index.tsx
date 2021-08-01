import React, { memo, useMemo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import StyleGuide from '../../../../util/StyleGuide';

import styles from './styles';

type RoundButtonProp = {
  Icon: any;
  name: string;
  size: number;
  onPress: any;
  style?: StyleProp<ViewStyle>;
  color?: string;
  disabled?: boolean;
  rippleColor?: string;
};

const RoundButton: React.FC<RoundButtonProp> = ({
  Icon,
  name,
  size,
  onPress,
  style,
  color,
  disabled,
  rippleColor,
}) => {
  const opacity = useMemo(() => {
    return disabled ? 0.4 : 1;
  }, [disabled]);

  return (
    <BorderlessButton
      rippleColor={rippleColor || StyleGuide.palette.secondary}
      hitSlop={{ top: 58, bottom: 58, left: 58, right: 58 }}
      enabled={!disabled}
      onPress={onPress}
      style={[
        styles.container,
        {
          height: size + 10,
          width: size + 10,
          borderRadius: (size + 10) / 2,
          opacity,
        },
        style,
      ]}>
      <Icon
        name={name}
        size={size}
        color={color || StyleGuide.palette.primary}
      />
    </BorderlessButton>
  );
};

export default memo(RoundButton);
