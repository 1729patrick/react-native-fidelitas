import React, { ReactNode, useRef } from 'react';
import { Dimensions, ScrollView, TouchableOpacity, View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Indicators, { IndicatorsHandler } from '../../molecules/Indicators';
import styles from './styles';

const { width } = Dimensions.get('window');

type SlidesProps = {
  items: ReactNode[];
  buttons: ReactNode;
};

const Welcome: React.FC<SlidesProps> = ({ items, buttons }) => {
  const scrollRef = useRef<ScrollView>(null);
  const indicatorsRef = useRef<IndicatorsHandler>(null);

  const onRightPress = (
    index: number = 1,
    changeIndicator?: boolean = true,
  ) => {
    const nextIndex = Math.min(index + 1, items.length - 1);

    scrollRef.current?.scrollTo({
      x: nextIndex * width,
      animated: false,
    });

    if (changeIndicator) {
      indicatorsRef.current?.changeIndicator(nextIndex + 1);
    }
  };

  const onLeftPress = (index: number = 1) => {
    const previousIndex = Math.max(index - 1, -1);

    scrollRef.current?.scrollTo({
      x: previousIndex * width,
      animated: false,
    });

    indicatorsRef.current?.changeIndicator(previousIndex + 1);
  };

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
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={['rgba(0,0,0,0.6)', 'transparent']}
                style={styles.linearGradient}
              />

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
        <Indicators
          width={width}
          indicatorWidth={width / items.length - 12}
          length={items.length}
          ref={indicatorsRef}
          onNext={(index: number) => onRightPress(index, false)}
        />
      </View>
    </>
  );
};

export default Welcome;
