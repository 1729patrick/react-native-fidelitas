import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
} from 'react';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import styles from './styles';
import Indicator from '../../atoms/Indicator';

type IndicatorsProps = {
  length: number;
  indicatorWidth: number;
  width: number;
  onNext: (index: number) => void;
};

export type IndicatorsHandler = {
  changeIndicator: (index: number) => void;
};

const Indicators: React.ForwardRefRenderFunction<
  IndicatorsHandler,
  IndicatorsProps
> = ({ length, width, indicatorWidth, onNext }, ref) => {
  const animation = useSharedValue(0);

  const runTimer = useCallback(
    nextValue => {
      animation.value = withTiming(
        nextValue,
        { duration: 5000 },
        isFinished => {
          if (!isFinished) {
            return;
          }

          console.log(nextValue * length);
          runOnJS(onNext)(nextValue * length);
          runOnJS(runTimer)(nextValue + 1 / length);
        },
      );
    },
    [animation, length, onNext],
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
      animation.value = index / length;
      runTimer(index / length + 1 / length);
    },
    [animation, length, runTimer],
  );

  useImperativeHandle(ref, () => ({ changeIndicator }), [changeIndicator]);

  return (
    <>
      {[...new Array(length)].map((_, index) => (
        <Indicator
          key={index}
          width={indicatorWidth}
          backgroundColor="rgba(255, 255, 255, 0.5)"
        />
      ))}

      <Animated.View style={[styles.indicators, animatedIndicator]}>
        {[...new Array(length)].map((_, index) => (
          <Indicator
            key={index}
            width={indicatorWidth}
            backgroundColor="#fff"
          />
        ))}
      </Animated.View>
    </>
  );
};

export default forwardRef(Indicators);
