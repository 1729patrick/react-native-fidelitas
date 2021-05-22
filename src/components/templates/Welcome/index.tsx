import React, { ReactNode, useRef } from 'react';
import { Dimensions, ScrollView, TouchableOpacity, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Indicator from '../../atoms/Indicator';
import styles from './styles';

const { width } = Dimensions.get('window');

type SlidesProps = {
  items: ReactNode[];
  buttons: ReactNode;
};

const Welcome: React.FC<SlidesProps> = ({ items, buttons }) => {
  const animation = useSharedValue(1);
  const scrollRef = useRef<ScrollView>(null);

  const onRightPress = (index: number = 1) => {
    const nextIndex = Math.min(index + 1, items.length - 1);

    scrollRef.current?.scrollTo({
      x: nextIndex * width,
      animated: false,
    });

    animation.value = (nextIndex + 1) / items.length;
  };

  const onLeftPress = (index: number = 1) => {
    const previousIndex = Math.max(index - 1, 0);

    scrollRef.current?.scrollTo({
      x: previousIndex * width,
      animated: false,
    });

    animation.value = (previousIndex + 1) / items.length;
  };

  const animatedIndicator = useAnimatedStyle(() => {
    return {
      width: animation.value * width,
    };
  }, [animation]);

  return (
    <>
      <ScrollView
        ref={scrollRef}
        horizontal
        scrollEnabled={false}
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}>
        {items.map((Item, index) => (
          <View style={{ width }} key={index}>
            {Item}

            <View style={styles.overlay} pointerEvents={'box-none'}>
              <View style={styles.navigation} pointerEvents={'box-none'}>
                <TouchableOpacity
                  style={styles.leftAction}
                  onPress={() => onLeftPress(index)}
                  activeOpacity={1}
                />
                <TouchableOpacity
                  style={styles.rightAction}
                  onPress={() => onRightPress(index)}
                  activeOpacity={1}
                />
              </View>
              {buttons}
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.top} pointerEvents={'none'}>
        {items.map((_, index) => (
          <Indicator
            key={index}
            width={width / items.length - 12}
            backgroundColor="rgba(255, 255, 255, 0.5)"
          />
        ))}

        <Animated.View style={[styles.indicators, animatedIndicator]}>
          {items.map((_, index) => (
            <Indicator
              key={index}
              animation={animation}
              index={index}
              width={width / items.length - 12}
              backgroundColor="#fff"
            />
          ))}
        </Animated.View>
      </View>
    </>
  );
};

export default Welcome;
