import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import Animated, {
  cancelAnimation,
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import styles from './styles';
import Indicator from '../../atoms/Indicator';
import { DURATION } from './constants';

type IndicatorsProps = {
  length: number;
  indicatorMarginHorizontal: number;
  width: number;
  onNext: (index: number) => void;
};

export type IndicatorsHandler = {
  changeIndicator: (index: number) => void;
  onPause: () => void;
  onResume: () => void;
};

const Indicators: React.ForwardRefRenderFunction<
  IndicatorsHandler,
  IndicatorsProps
> = ({ length, width, indicatorMarginHorizontal, onNext }, ref) => {
  const animation = useSharedValue(0);
  const nextValueRef = useRef(0);

  const runTimer = useCallback(
    (value: number, duration: number = DURATION) => {
      nextValueRef.current = value;
      animation.value = withTiming(
        value,
        { duration, easing: Easing.linear },
        isFinished => {
          const next = Math.ceil(
            value * length + (indicatorMarginHorizontal * 2) / width,
          );

          if (!isFinished || next > length) {
            return;
          }

          animation.value = value + (indicatorMarginHorizontal * 2) / width;
          runOnJS(onNext)(next - 1);
          runOnJS(runTimer)(
            value +
              (indicatorMarginHorizontal * 2) / width +
              1 / length -
              (indicatorMarginHorizontal * 2) / width,
          );
        },
      );
    },
    [animation, indicatorMarginHorizontal, length, onNext, width],
  );

  useEffect(() => {
    runTimer(1 / length - (indicatorMarginHorizontal * 2) / width);
  }, [animation, indicatorMarginHorizontal, length, runTimer, width]);

  const animatedIndicator = useAnimatedStyle(() => {
    return {
      width: animation.value * width,
    };
  }, [animation]);

  const changeIndicator = useCallback(
    (index: number) => {
      const currentValue = index / length + indicatorMarginHorizontal / width;
      animation.value = index / length + indicatorMarginHorizontal / width;

      const nextValue =
        currentValue + 1 / length - (indicatorMarginHorizontal * 2) / width;
      runTimer(nextValue);
    },
    [animation, indicatorMarginHorizontal, length, runTimer, width],
  );

  const onPause = useCallback(() => {
    cancelAnimation(animation);
  }, [animation]);

  const onResume = useCallback(() => {
    const indicatorWidth = (1 / length) * width;
    const indicatorCompleted = (animation.value * width) % indicatorWidth;

    const duration = Math.max(
      (1 - indicatorCompleted / indicatorWidth) * DURATION,
      0,
    );

    runTimer(nextValueRef.current, duration);
  }, [length, width, animation.value, runTimer]);

  useImperativeHandle(ref, () => ({ changeIndicator, onPause, onResume }), [
    changeIndicator,
    onPause,
    onResume,
  ]);

  return (
    <>
      {[...new Array(length)].map((_, index) => (
        <Indicator
          key={index}
          marginHorizontal={indicatorMarginHorizontal}
          width={width / length - indicatorMarginHorizontal * 2}
          backgroundColor="rgba(255, 255, 255, 0.5)"
        />
      ))}

      <Animated.View style={[styles.indicators, animatedIndicator]}>
        {[...new Array(length)].map((_, index) => (
          <Indicator
            key={index}
            marginHorizontal={indicatorMarginHorizontal}
            width={width / length - indicatorMarginHorizontal * 2}
            backgroundColor="#fff"
          />
        ))}
      </Animated.View>
    </>
  );
};

export default forwardRef(Indicators);
