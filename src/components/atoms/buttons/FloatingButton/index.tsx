import React, { forwardRef, useImperativeHandle, ReactElement } from 'react';
import { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { ANIMATION_DURATION } from './constants';
import styles from './styles';

export type FloatingButtonHandler = {
  show: () => void;
  hide: () => void;
};

type FloatingButtonProps = { onPress: () => void; icon: ReactElement };

const FloatingButton: React.ForwardRefRenderFunction<
  FloatingButtonHandler,
  FloatingButtonProps
> = ({ onPress, icon }, ref) => {
  const animation = useSharedValue(1);

  const hide = useCallback(() => {
    animation.value = withTiming(0, { duration: ANIMATION_DURATION });
  }, [animation]);

  const show = useCallback(() => {
    animation.value = withSpring(1);
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
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.7}>
        {icon}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default forwardRef(FloatingButton);
