import React, { ReactNode, useEffect, useRef } from 'react';
import {
  Dimensions,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  GestureResponderEvent,
  BackHandler,
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
  const currentIndexRef = useRef(0);
  const indicatorsRef = useRef<IndicatorsHandler>(null);

  const onNext = (index: number = 1, changeIndicator: boolean = true) => {
    const nextIndex = index + 1;

    if (nextIndex > items.length - 1) {
      return;
    }

    scrollRef.current?.scrollTo({
      x: nextIndex * width,
      animated: false,
    });

    currentIndexRef.current = nextIndex;
    if (changeIndicator) {
      indicatorsRef.current?.changeIndicator(nextIndex);
    }
  };

  const onPrevious = (index: number = 1) => {
    const previousIndex = index - 1;

    if (previousIndex < 0) {
      return;
    }

    scrollRef.current?.scrollTo({
      x: previousIndex * width,
      animated: false,
    });
    currentIndexRef.current = previousIndex;
    indicatorsRef.current?.changeIndicator(previousIndex);
  };

  const onAction = (event: GestureResponderEvent, index: number) => {
    const { locationX } = event.nativeEvent;

    if (locationX > width / 2) {
      onNext(index);
      return;
    }

    onPrevious(index);
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', function () {
      if (currentIndexRef.current - 1 >= 0) {
        onPrevious(currentIndexRef.current);
        return true;
      }
      return false;
    });
  }, []);

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
                  style={styles.action}
                  onPress={event => onAction(event, index)}
                  activeOpacity={1}
                  onLongPress={() => {}}
                  onPressIn={() => indicatorsRef.current?.onPause()}
                  onPressOut={() => indicatorsRef.current?.onResume()}
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
          onNext={(index: number) => onNext(index, false)}
        />
      </View>
    </>
  );
};

export default Welcome;
