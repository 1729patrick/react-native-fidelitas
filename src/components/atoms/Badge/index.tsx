import React, { useEffect } from 'react';
import { Text } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import styles from './styles';

type BadgeProps = {
  value: number;
};

const Badge: React.FC<BadgeProps> = ({ value }) => {
  const animation = useSharedValue(0);

  const containerStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      animation.value,
      [0, 0.5, 1],
      [1, 1.5, 1],
      Extrapolate.CLAMP,
    );

    return { transform: [{ scale }] };
  }, [animation.value]);

  useEffect(() => {
    animation.value = withSpring(+!animation.value);
  }, [animation, value]);

  if (!value) {
    return null;
  }

  return (
    <Animated.View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{value}</Text>
    </Animated.View>
  );
};

export default Badge;
