import React, { forwardRef, useImperativeHandle } from 'react';
import { useCallback } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import { ANIMATION_DURATION } from './contants';
import styles from './styles';

export type FloatingButtonHandler = {
  show: () => void;
  hide: () => void;
};

type FloatingButtonProps = {};

const FloatingButton: React.ForwardRefRenderFunction<
  FloatingButtonHandler,
  FloatingButtonProps
> = ({}, ref) => {
  const animation = useSharedValue(1);

  const hide = useCallback(() => {
    animation.value = withTiming(0, { duration: ANIMATION_DURATION });
  }, [animation]);

  const show = useCallback(() => {
    animation.value = withTiming(1, { duration: ANIMATION_DURATION });
  }, [animation]);

  const containerStyle = useAnimatedStyle(() => {
    return { transform: [{ scale: animation.value }] };
  }, [animation]);

  useImperativeHandle(
    ref,
    () => ({
      show,
      hide,
    }),
    [hide, show],
  );

  return (
    <Animated.View style={[styles.container, containerStyle]}>
      <RectButton style={styles.button}>
        <Icon name="qr-code-outline" color="#fff" size={26} />
      </RectButton>
    </Animated.View>
  );
};

export default forwardRef(FloatingButton);
