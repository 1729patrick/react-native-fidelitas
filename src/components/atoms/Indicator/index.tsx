import React from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import styles from './styles';

type IndicatorProps = {
  width: number;
  backgroundColor: string;
  animation?: Animated.SharedValue<number>;
  index?: number;
};
const Indicator: React.FC<IndicatorProps> = ({
  width,
  backgroundColor,
  animation,
  index = 0,
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    return { width };
    if (!animation) {
      return {};
    }

    return {
      width: interpolate(
        animation.value,
        [index - 1, index, index + 1],
        [0, width, width],
      ),
    };
  }, [animation]);

  return (
    <Animated.View
      style={[styles.indicator, { backgroundColor }, animatedStyle]}
    />
  );
};

export default Indicator;
