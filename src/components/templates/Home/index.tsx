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
import Facilities from '../../organisms/Facilities';
import Contacts from '../../organisms/Contacts';
import CompanyStatus from '../../organisms/CompanyStatus';
import Location from '../../organisms/Location';
import WorkingHours from '../../organisms/WorkingHours';

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

const company = {
  name: 'Restaurante do Pastel de bacalhau',
};

const Home = () => {
  const [dark, setDark] = useState(false);
  const translationY = useSharedValue(0);

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
      [275, 300],
      [0, 1],
      Extrapolate.CLAMP,
    );

    if (translationY.value >= 287.5 && !dark) {
      runOnJS(setDark)(true);
    } else if (translationY.value <= 287.5 && dark) {
      runOnJS(setDark)(false);
    }

    return {
      opacity,
    };
  }, [translationY, dark]);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle={dark ? 'dark-content' : 'light-content'}
      />
      <AnimatedFastImage
        source={require('../../../assets/background_home.jpg')}
        resizeMode={FastImage.resizeMode.cover}
        style={[styles.image, animatedImage]}
      />

      <Animated.View style={[styles.header, animatedHeader]} />

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        overScrollMode="never"
        onScroll={scrollHandler}
        scrollEventThrottle={16}>
        <View style={styles.container}>
          <Animated.Text style={[styles.title]}>{company.name}</Animated.Text>
          <CompanyStatus />
          <View style={styles.line} />
          <Facilities />
          <View style={styles.line} />
          <Contacts />
          <View style={styles.line} />
          <Location />
          <View style={styles.line} />
          <WorkingHours />
        </View>
      </Animated.ScrollView>
    </>
  );
};

export default Home;
