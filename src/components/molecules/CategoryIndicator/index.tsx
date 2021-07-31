import React, { useRef, useState } from 'react';
import { Dimensions, Text, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withDecay,
} from 'react-native-reanimated';
import StyleGuide from '~/util/StyleGuide';

const { width } = Dimensions.get('window');

import styles from './styles';

const CategoryIndicator = ({
  data,
  translationX,
  x,
  categoryIndicatorStyles,
  indicatorsWidthsRef,
}) => {
  const [indicatorWidths, setIndicatorWidths] = useState<number[]>([]);

  const gestureHandler = useAnimatedGestureHandler(
    {
      onStart: (_, ctx) => {
        ctx.startX = x.value;
      },
      onActive: (event, ctx) => {
        x.value = interpolate(
          ctx.startX + event.translationX,
          [0, width - 763],
          [0, width - 763],
          Extrapolate.CLAMP,
        );
      },
      onEnd: ({ translationX, velocityX, state }, ctx) => {
        x.value = withDecay({
          value: translationX,
          velocity: velocityX,
          state: state,
          offset: ctx.startX,
          clamp: [width - 763, 0],
        });
      },
    },
    [x.value],
  );

  const activeCategoryStyle = useAnimatedStyle(() => {
    const widths = indicatorWidths.map((_, index) => index * width);
    const widthsAcc = indicatorWidths.map((width, index) =>
      indicatorWidths.slice(0, index).reduce((a, b) => a + b, 0),
    );

    if (!indicatorWidths.length) {
      return {};
    }

    const width_ = interpolate(translationX.value, widths, indicatorWidths);
    const left = interpolate(translationX.value, widths, widthsAcc);

    return { left: left + 8, width: width_ };
  }, [translationX.value, indicatorWidths, width]);

  const setIndicatorWidth = (index: number, value: number) => {
    indicatorsWidthsRef.current[index] = value + StyleGuide.spacing * 2;

    if (indicatorsWidthsRef.current.length === data.length) {
      setIndicatorWidths(indicatorsWidthsRef.current);
    }
  };

  const animatedStyle1 = useAnimatedStyle(() => {
    const translateX = x.value;

    return {
      transform: [
        {
          translateX,
        },
      ],
    };
  }, [x.value]);

  const animatedStyle2 = useAnimatedStyle(() => {
    const widthsAcc = indicatorWidths.map((_, index) =>
      indicatorWidths.slice(0, index).reduce((a, b) => a + b, 8),
    );

    const widths = indicatorWidths.map((_, index) => index * width);

    const left = interpolate(translationX.value, widths, widthsAcc);
    const width_ = interpolate(translationX.value, widths, indicatorWidths);

    const center = (width - width_) / 2;

    if (!indicatorWidths.length) {
      return {};
    }

    const translateX = interpolate(
      -(left - center),
      [width - 763, 0],
      [width - 763, 0],
      Extrapolate.CLAMP,
    );

    return {
      transform: [
        {
          translateX,
        },
      ],
    };
  }, [translationX.value, indicatorWidths]);

  return (
    <Animated.View style={[styles.categoryIndicator, categoryIndicatorStyles]}>
      <PanGestureHandler
        onGestureEvent={gestureHandler}
        activeOffsetX={[-10, 10]}>
        <Animated.View
          style={[styles.panContent, animatedStyle1, animatedStyle2]}>
          {data.map((category, index) => (
            <View
              key={category.id}
              style={styles.indicator}
              onLayout={({ nativeEvent }) => {
                setIndicatorWidth(index, nativeEvent.layout.width);
              }}>
              <Text>{category.title}</Text>
            </View>
          ))}
          <Animated.View style={[styles.categoryActive, activeCategoryStyle]} />
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

export default CategoryIndicator;
