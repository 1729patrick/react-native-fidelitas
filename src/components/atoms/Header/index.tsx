import React, { memo, ReactElement, useCallback } from 'react';

import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/AntDesign';

import { HEADER_HEIGHT } from './constants';

import styles from './styles';
import { Keyboard, Text, View } from 'react-native';
import RoundButton from '../buttons/RoundButton';
import { useNavigation } from '@react-navigation/native';

import { StackNavigationProp } from '@react-navigation/stack';

import StyleGuide from '../../../util/StyleGuide';

type HeaderProps = {
  translateY?: Animated.SharedValue<number>;
  title?: string;
  backgroundColor?: string;
  showBack?: boolean;
  RightContent?: ReactElement;
  elevation?: number;
  onBack?: () => void;
  color?: string;
  close?: boolean;
};

const Header: React.FC<HeaderProps> = ({
  translateY,
  title,
  backgroundColor = StyleGuide.navigation.colors.background,
  showBack = true,
  elevation = 0,
  onBack,
  RightContent,
  color,
  close,
}) => {
  const { pop } = useNavigation<StackNavigationProp<any>>();

  const y = useDerivedValue(() => {
    if (!translateY) {
      return 0;
    }

    const validY = interpolate(
      translateY.value,
      [-HEADER_HEIGHT, 0],
      [-HEADER_HEIGHT, 0],
      Extrapolate.CLAMP,
    );

    return validY;
  }, [translateY?.value]);

  const styleContainer = useAnimatedStyle(() => {
    return {
      marginTop: y.value,
    };
  }, [y.value]);

  const styleContent = useAnimatedStyle(() => {
    return { opacity: interpolate(y.value, [-HEADER_HEIGHT, 0], [0, 1]) };
  });

  const onBackPress = useCallback(() => {
    Keyboard.dismiss();

    if (onBack) {
      onBack();
      return;
    }

    pop();
  }, [onBack, pop]);

  return (
    <Animated.View
      style={[
        styles.container,
        styleContainer,
        {
          backgroundColor,
          elevation,
        },
      ]}>
      <Animated.View style={[styles.content, styleContent]}>
        <View style={styles.left}>
          {showBack && (
            <RoundButton
              onPress={onBackPress}
              name={close ? 'close' : 'arrowleft'}
              size={23}
              Icon={Icon}
              style={styles.backButton}
              color={color}
            />
          )}

          <Text style={styles.title}>{title}</Text>
        </View>

        {RightContent}
      </Animated.View>
    </Animated.View>
  );
};

export default memo(Header);
