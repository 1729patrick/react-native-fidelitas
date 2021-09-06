import React, { forwardRef, ReactNode, useMemo, useRef } from 'react';
import {
  View,
  TextInput,
  ViewStyle,
  StyleProp,
  TextInputProps,
  TextInputFocusEventData,
  NativeSyntheticEvent,
} from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';
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

const AnimatedMaskedTextInput =
  Animated.createAnimatedComponent(MaskedTextInput);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

type InputProps = TextInputProps & {
  placeholder: string;
  style?: StyleProp<ViewStyle>;
  rightContent?: ReactNode;
  mask?: string;
  required?: boolean;
};

const Input: React.ForwardRefRenderFunction<TextInput, InputProps> = (
  { placeholder, style, rightContent, mask, required = true, ...props },
  ref,
) => {
  const valueRef = useRef<string>(props.value || '');
  const focusAnimation = useSharedValue(0);
  const valueAnimation = useSharedValue(+!!props.value);

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
      fontSize: interpolate(valueAnimation.value, [0, 0.8], [14, 13]),
      color: interpolateColor(
        focusAnimation.value,
        [0, 1],
        [StyleGuide.palette.secondary, StyleGuide.palette.app],
      ),
    };
  }, [valueAnimation, focusAnimation]);

  const Component = useMemo(() => {
    return mask ? AnimatedMaskedTextInput : AnimatedTextInput;
  }, [mask]);

  const onFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    valueAnimation.value = withTiming(1, { duration: 100 });
    focusAnimation.value = withTiming(1, { duration: 100 });

    props.onFocus?.(event);
  };

  const onBlur = () => {
    if (!valueRef.current) {
      valueAnimation.value = withTiming(0, {
        duration: 100,
      });
    }

    focusAnimation.value = withTiming(0, { duration: 100 });
  };

  const onChangeTextMask = (_: string, value: string) => {
    valueRef.current = value;

    if (focusAnimation.value) {
      props.onChangeText?.(value);
    }
  };

  const onChangeText = (value: string) => {
    valueRef.current = value;
    props.onChangeText?.(value);
  };

  return (
    <View style={[styles.container, style]}>
      <Component
        {...props}
        mask={mask}
        style={[styles.input, animatedInput]}
        onFocus={onFocus}
        onEndEditing={onBlur}
        onChangeText={mask ? onChangeTextMask : onChangeText}
        ref={ref}
      />
      <View style={styles.rightContent}>{rightContent}</View>

      <Animated.View
        style={[styles.placeholderContainer, animatedPlaceholderContainer]}
        pointerEvents={'none'}>
        <Animated.Text style={[styles.placeholder, animatedPlaceholder]}>
          {placeholder} {required ? '' : '(Optional)'}
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

export default forwardRef(Input);
