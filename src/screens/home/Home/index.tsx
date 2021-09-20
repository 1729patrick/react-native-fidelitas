import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { useNavigation } from '@react-navigation/native';

import { StackNavigationProp } from '@react-navigation/stack';
import CompanyStatus from '~/components/organisms/cards/CompanyStatus';
import Contacts from '~/components/organisms/cards/Contacts';
import Location from '~/components/organisms/cards/Location';
import WorkingHours from '~/components/organisms/cards/WorkingHours';
import Facilities from '~/components/organisms/cards/Facilities';
import useStatusBar from '~/hooks/useStatusBar';
import Home from '~/components/templates/Home';
import Line from '~/components/atoms/Line';

import SplashScreen from '~/components/atoms/SplashScreen';
import { useRestaurant } from '~/contexts/Restaurant';
import { HEADER_HEIGHT } from './constants';

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

export default () => {
  const [dark, setDark] = useState(false);
  useStatusBar(dark);
  const translationY = useSharedValue(0);
  const { navigate } = useNavigation<StackNavigationProp<any>>();
  const { restaurant } = useRestaurant();

  const scrollHandler = useAnimatedScrollHandler(event => {
    translationY.value = event.contentOffset.y;
  });

  const animatedImage = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(translationY.value, [0, 300], [0, -150]),
        },
      ],
    };
  }, [translationY]);

  const animatedHeader = useAnimatedStyle(() => {
    const opacity = interpolate(
      translationY.value,
      [300 - HEADER_HEIGHT, 300],
      [0, 1],
      Extrapolate.CLAMP,
    );

    if (translationY.value >= 300 - HEADER_HEIGHT / 2 && !dark) {
      runOnJS(setDark)(true);
    } else if (translationY.value <= 300 - HEADER_HEIGHT / 2 && dark) {
      runOnJS(setDark)(false);
    }

    return {
      opacity,
    };
  }, [translationY, dark]);

  const openFacilities = () => {
    navigate('Facilities');
  };

  const openMap = () => {
    navigate('Map');
  };

  if (!restaurant) {
    return <SplashScreen />;
  }

  return (
    <Home
      statusBar={
        <StatusBar
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0)"
          barStyle={dark ? 'dark-content' : 'light-content'}
        />
      }
      header={
        <>
          <AnimatedFastImage
            source={require('../../../assets/background_home.jpg')}
            resizeMode={FastImage.resizeMode.cover}
            style={[styles.image, animatedImage]}
          />

          <Animated.View style={[styles.header, animatedHeader]} />
        </>
      }
      content={
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          overScrollMode="never"
          onScroll={scrollHandler}
          scrollEventThrottle={16}>
          <View style={styles.container}>
            <Animated.Text style={[styles.title]}>
              {restaurant?.name}
            </Animated.Text>
            <CompanyStatus />
            <Line />
            <Facilities openAll={openFacilities} />
            <Line />
            <Contacts />
            <Line />
            <Location openMap={openMap} />
            <Line />
            <WorkingHours />
          </View>
        </Animated.ScrollView>
      }
    />
  );
};
