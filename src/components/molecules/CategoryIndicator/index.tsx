import React, { useCallback, useImperativeHandle, useState } from 'react';
import { forwardRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { Dimensions, LayoutChangeEvent, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withDecay,
} from 'react-native-reanimated';
import { MenuItemType } from '~/screens/menu/Menu';
import { IMAGE_HEIGHT } from '~/screens/menu/Menu/constants';
import StyleGuide from '~/util/StyleGuide';
import { PAN_PADDING_LEFT } from './constants';

const { width } = Dimensions.get('window');

import styles from './styles';

export type CategoryIndicatorHandler = {
  updateIndicatorTranslationX: () => void;
};

type CategoryIndicatorProps = {
  data: MenuItemType[];
  cardTranslationX: Animated.SharedValue<number>;
  indicatorTranslationX: Animated.SharedValue<number>;
  translationY: Animated.SharedValue<number>;
  indicatorsWidthsRef: React.MutableRefObject<number[]>;
  scrollTo: (index: number) => void;
};

const CategoryIndicator: React.ForwardRefRenderFunction<
  CategoryIndicatorHandler,
  CategoryIndicatorProps
> = (
  {
    data,
    cardTranslationX,
    indicatorTranslationX,
    indicatorsWidthsRef,
    scrollTo,
    translationY,
  },
  ref,
) => {
  const [indicatorWidths, setIndicatorWidths] = useState<number[]>([]);
  const [contentWidth, setContentWidth] = useState<number>(0);

  const gestureHandler = useAnimatedGestureHandler(
    {
      onStart: (_, ctx: { startX: number }) => {
        ctx.startX = indicatorTranslationX.value;
      },
      onActive: (event, ctx) => {
        indicatorTranslationX.value = interpolate(
          ctx.startX + event.translationX,
          [0, width - contentWidth],
          [0, width - contentWidth],
          Extrapolate.CLAMP,
        );
      },
      onEnd: ({ velocityX }) => {
        indicatorTranslationX.value = withDecay({
          velocity: velocityX,
          clamp: [width - contentWidth, 0],
        });
      },
    },
    [indicatorTranslationX.value, contentWidth],
  );

  const activeCategoryStyle = useAnimatedStyle(() => {
    const widths = indicatorWidths.map((_, index) => index * width);
    const widthsAcc = indicatorWidths.map((_, index) =>
      indicatorWidths.slice(0, index).reduce((a, b) => a + b, 0),
    );

    if (!indicatorWidths.length) {
      return {};
    }

    const width_ = interpolate(cardTranslationX.value, widths, indicatorWidths);
    const left = interpolate(cardTranslationX.value, widths, widthsAcc);

    return { left: left + 8, width: width_ };
  }, [cardTranslationX.value, indicatorWidths, width]);

  const categoryIndicatorStyle = useAnimatedStyle(() => {
    const top = interpolate(
      translationY.value,
      [0, IMAGE_HEIGHT - 93],
      [IMAGE_HEIGHT, 93],
      Extrapolate.CLAMP,
    );

    const borderColor = interpolateColor(
      translationY.value,
      [IMAGE_HEIGHT - 93.1, IMAGE_HEIGHT - 93],
      ['transparent', StyleGuide.palette.border],
    );

    const backgroundColor = interpolateColor(
      translationY.value,
      [IMAGE_HEIGHT - 93.1, IMAGE_HEIGHT - 93],
      ['transparent', 'white'],
    );

    return { top, borderColor, backgroundColor };
  }, [translationY.value]);

  const setIndicatorWidth = (index: number, value: number) => {
    indicatorsWidthsRef.current[index] = value;

    if (indicatorsWidthsRef.current.length === data.length) {
      setIndicatorWidths(indicatorsWidthsRef.current);
    }
  };

  const panContentIndicatorTranslationStyle = useAnimatedStyle(() => {
    const translateX = indicatorTranslationX.value;

    return {
      transform: [
        {
          translateX,
        },
      ],
    };
  }, [indicatorTranslationX.value]);

  const panContentCardTranslationStyle = useAnimatedStyle(() => {
    const widthsAcc = indicatorWidths.map((_, index) =>
      indicatorWidths.slice(0, index).reduce((a, b) => a + b, 8),
    );

    const widths = indicatorWidths.map((_, index) => index * width);

    const left = interpolate(cardTranslationX.value, widths, widthsAcc);
    const width_ = interpolate(cardTranslationX.value, widths, indicatorWidths);

    const center = (width - width_) / 2;

    if (!indicatorWidths.length) {
      return {};
    }

    const translateX = interpolate(
      -(left - center),
      [width - contentWidth, 0],
      [width - contentWidth, 0],
      Extrapolate.CLAMP,
    );

    return {
      transform: [
        {
          translateX,
        },
      ],
    };
  }, [cardTranslationX.value, indicatorWidths, contentWidth]);

  const setContentLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    setContentWidth(nativeEvent.layout.width + PAN_PADDING_LEFT * 2);
  };

  const updateIndicatorTranslationX = useCallback(() => {
    const indicatorWidths = indicatorsWidthsRef.current;

    const widthsAcc = indicatorWidths.map((_, index) =>
      indicatorWidths.slice(0, index).reduce((a, b) => a + b, 8),
    );
    const widths = indicatorWidths.map((_, index) => index * width);
    const left = interpolate(cardTranslationX.value, widths, widthsAcc);
    const width_ = interpolate(cardTranslationX.value, widths, indicatorWidths);
    const center = (width - width_) / 2;

    if (!indicatorWidths.length) {
      return {};
    }
    const translateX = interpolate(
      -(left - center),
      [width - contentWidth, PAN_PADDING_LEFT],
      [width - contentWidth, PAN_PADDING_LEFT],
      Extrapolate.CLAMP,
    );

    indicatorTranslationX.value = translateX;
  }, [
    cardTranslationX.value,
    contentWidth,
    indicatorTranslationX,
    indicatorsWidthsRef,
  ]);

  useImperativeHandle(ref, () => ({ updateIndicatorTranslationX }), [
    updateIndicatorTranslationX,
  ]);

  return (
    <Animated.View style={[styles.categoryIndicator, categoryIndicatorStyle]}>
      <PanGestureHandler
        onGestureEvent={gestureHandler}
        activeOffsetX={[-10, 10]}>
        <Animated.View
          style={[
            styles.panContent,
            panContentIndicatorTranslationStyle,
            panContentCardTranslationStyle,
          ]}
          onLayout={setContentLayout}>
          <Animated.View style={[styles.categoryActive, activeCategoryStyle]} />

          {data.map((category, index) => (
            <Indicator
              key={category.id}
              category={category}
              index={index}
              setIndicatorWidth={setIndicatorWidth}
              cardTranslationX={cardTranslationX}
              scrollTo={scrollTo}
            />
          ))}
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

type IndicatorProps = {
  category: Item;
  index: number;
  setIndicatorWidth: (index: number, value: number) => void;
  cardTranslationX: Animated.SharedValue<number>;
  scrollTo: (index: number) => void;
};

const Indicator: React.FC<IndicatorProps> = ({
  category,
  index,
  setIndicatorWidth,
  cardTranslationX,
  scrollTo,
}) => {
  const titleStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      cardTranslationX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [
        StyleGuide.palette.primary,
        StyleGuide.palette.background,
        StyleGuide.palette.primary,
      ],
    );

    return { color };
  }, [cardTranslationX.value]);

  return (
    <View
      style={styles.indicator}
      onLayout={({ nativeEvent }) => {
        setIndicatorWidth(index, nativeEvent.layout.width);
      }}>
      <TouchableOpacity
        style={styles.indicatorButton}
        activeOpacity={1}
        onPress={() => scrollTo(index)}>
        <Animated.Text style={[styles.indicatorTitle, titleStyle]}>
          {category.title}
        </Animated.Text>
      </TouchableOpacity>
    </View>
  );
};

export default forwardRef(CategoryIndicator);
