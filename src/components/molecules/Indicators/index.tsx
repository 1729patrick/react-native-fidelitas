import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
} from 'react';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import styles from './styles';
import Indicator from '../../atoms/Indicator';

type IndicatorsProps = {
  length: number;
  indicatorMarginHorizontal: number;
  width: number;
  onNext: (index: number) => void;
};

export type IndicatorsHandler = {
  changeIndicator: (index: number) => void;
};

const Indicators: React.ForwardRefRenderFunction<
  IndicatorsHandler,
  IndicatorsProps
> = ({ length, width, indicatorMarginHorizontal, onNext }, ref) => {
  const animation = useSharedValue(0);

  const runTimer = useCallback(
    nextValue => {
      animation.value = withTiming(
        nextValue,
        { duration: 7500, easing: Easing.linear },
        isFinished => {
          const next = Math.ceil(
            nextValue * length + (indicatorMarginHorizontal * 2) / width,
          );

          if (!isFinished || next > length) {
            return;
          }

          animation.value = nextValue + (indicatorMarginHorizontal * 2) / width;
          runOnJS(onNext)(next - 1);
          runOnJS(runTimer)(
            nextValue +
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
    runTimer(1 / length);
  }, [animation, length, runTimer]);

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

  useImperativeHandle(ref, () => ({ changeIndicator }), [changeIndicator]);

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
