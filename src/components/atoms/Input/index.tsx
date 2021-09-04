import React, { forwardRef, ReactNode, useRef } from 'react';
import {
  View,
  TextInput,
  ViewStyle,
  StyleProp,
  TextInputProps,
} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import StyleGuide from '../../../util/StyleGuide';
import styles from './styles';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

type InputProps = TextInputProps & {
  placeholder: string;
  style?: StyleProp<ViewStyle>;
  rightContent?: ReactNode;
};

const Input: React.ForwardRefRenderFunction<TextInput, InputProps> = (
  { placeholder, style, rightContent, ...props },
  ref,
) => {
  const valueRef = useRef<string>('');
  const focusAnimation = useSharedValue(0);
  const valueAnimation = useSharedValue(0);

  const animatedInput = useAnimatedStyle(() => {
    return {
      borderWidth: interpolate(
        focusAnimation.value,
        [0.8, 1],
        [1.5, 2],
        Extrapolate.CLAMP,
      ),
      borderColor: interpolateColor(
        focusAnimation.value,
        [0, 1],
        ['#cccccc', StyleGuide.palette.app],
      ),
    };
  }, [focusAnimation, valueAnimation]);

  const animatedPlaceholderContainer = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: (-valueAnimation.value * 55) / 2 }],
    };
  }, [valueAnimation]);

  const animatedPlaceholder = useAnimatedStyle(() => {
    return {
      fontSize: interpolate(valueAnimation.value, [0, 0.8], [16, 13]),
      color: interpolateColor(
        focusAnimation.value,
        [0, 1],
        [StyleGuide.palette.secondary, StyleGuide.palette.app],
      ),
    };
  }, [valueAnimation, focusAnimation]);

  const onFocus = () => {
    valueAnimation.value = withTiming(1, { duration: 100 });
    focusAnimation.value = withTiming(1, { duration: 100 });
  };

  const onBlur = () => {
    if (!valueRef.current) {
      valueAnimation.value = withTiming(0, {
        duration: 100,
      });
    }

    focusAnimation.value = withTiming(0, { duration: 100 });
  };

  const onChangeText = (value: string) => {
    valueRef.current = value;
    props.onChangeText?.(value);
  };

  return (
    <View style={[styles.container, style]}>
      <AnimatedTextInput
        {...props}
        style={[styles.input, animatedInput]}
        onFocus={onFocus}
        onEndEditing={onBlur}
        onChangeText={onChangeText}
        ref={ref}
      />
      <View style={styles.rightContent}>{rightContent}</View>

      <Animated.View
        style={[styles.placeholderContainer, animatedPlaceholderContainer]}
        pointerEvents={'none'}>
        <Animated.Text style={[styles.placeholder, animatedPlaceholder]}>
          {placeholder}
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

export default forwardRef(Input);
