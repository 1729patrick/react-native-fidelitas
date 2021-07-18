import { StackCardInterpolationProps } from '@react-navigation/stack';
import { Animated } from 'react-native';

const { multiply } = Animated;

const vertical = ({
  current,
  inverted,
  layouts: { screen },
}: StackCardInterpolationProps) => {
  const translateY = multiply(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [screen.height, 0],
      extrapolate: 'clamp',
    }),
    inverted,
  );

  const overlayOpacity = current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.3],
    extrapolate: 'clamp',
  });

  return {
    cardStyle: {
      transform: [
        {
          translateY,
        },
      ],
    },
    // overlayStyle: {
    //   opacity: overlayOpacity,
    // },
  };
};

export default vertical;
