import React, { ReactNode, useRef } from 'react';
import {
  Dimensions,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Indicators, { IndicatorsHandler } from '../../molecules/Indicators';
import styles from './styles';

const { width } = Dimensions.get('window');

type SlidesProps = {
  items: { component: ReactNode; description: string }[];
  buttons: ReactNode;
};

const Welcome: React.FC<SlidesProps> = ({ items, buttons }) => {
  const scrollRef = useRef<ScrollView>(null);
  const indicatorsRef = useRef<IndicatorsHandler>(null);

  const onRightPress = (
    index: number = 1,
    changeIndicator?: boolean = true,
  ) => {
    const nextIndex = index + 1;

    if (nextIndex > items.length - 1) {
      return;
    }

    scrollRef.current?.scrollTo({
      x: nextIndex * width,
      animated: false,
    });

    if (changeIndicator) {
      indicatorsRef.current?.changeIndicator(nextIndex);
    }
  };

  const onLeftPress = (index: number = 1) => {
    const previousIndex = index - 1;

    if (previousIndex < 0) {
      return;
    }

    scrollRef.current?.scrollTo({
      x: previousIndex * width,
      animated: false,
    });

    indicatorsRef.current?.changeIndicator(previousIndex);
  };

  return (
    <>
      <ScrollView
        ref={scrollRef}
        horizontal
        scrollEnabled={false}
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}>
        {items.map(({ component, description }, index) => (
          <View style={{ width }} key={index}>
            {component}

            <View style={styles.overlay} pointerEvents={'box-none'}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                style={styles.linearGradient}>
                <Text style={styles.description}>{description}</Text>
              </LinearGradient>

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
          indicatorMarginHorizontal={3}
          length={items.length}
          ref={indicatorsRef}
          onNext={(index: number) => onRightPress(index, false)}
        />
      </View>
    </>
  );
};

export default Welcome;
