import { StackCardInterpolationProps } from '@react-navigation/stack';
import { Animated } from 'react-native';

const { multiply } = Animated;

const horizontal = ({
  current,
  inverted,
  layouts: { screen },
}: StackCardInterpolationProps) => {
  const translateX = multiply(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [screen.width, 0],
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
          translateX,
        },
      ],
    },
    // overlayStyle: {
    //   opacity: overlayOpacity,
    // },
  };
};

export default horizontal;
