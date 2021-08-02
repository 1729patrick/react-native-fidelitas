import React, { memo, useRef, RefObject } from 'react';
import { StatusBar, View, TextInput } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import StyleGuide from '~/util/StyleGuide';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import RoundButton from '~/components/atoms/buttons/RoundButton';
import { ScrollView } from 'react-native-gesture-handler';
import useHideTabBar from '~/hooks/useHideTabBar';
import { useBackHandler } from '~/hooks/useBackHandler';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

type MenuSearchProps = {
  translationY: Animated.SharedValue<number>;
  searchContentAnimation: Animated.SharedValue<number>;
  setDark: (dark: boolean) => void;
  verticalScrollViewRef: RefObject<ScrollView>;
  onSearch: (searchTerm: string) => void;
};

const MenuSearch: React.FC<MenuSearchProps> = ({
  translationY,
  searchContentAnimation,
  setDark,
  verticalScrollViewRef,
  onSearch,
}) => {
  const { showTabBar, hideTabBar } = useHideTabBar(false);
  const translationYWhenSearchOpenRef = useRef<number>(0);
  const searchRef = useRef<TextInput>(null);

  useBackHandler(() => {
    if (searchContentAnimation.value) {
      onSearchBlur();
      return true;
    }

    return false;
  });

  const containerStyle = useAnimatedStyle(() => {
    const top = interpolate(
      translationY.value,
      [0, 40],
      [40, 0],
      Extrapolate.CLAMP,
    );

    const backgroundColor = interpolateColor(
      translationY.value,
      [34.99, 35],
      ['transparent', 'white'],
    );

    const borderColor = interpolateColor(
      searchContentAnimation.value,
      [0, 1],
      ['transparent', StyleGuide.palette.border],
    );

    runOnJS(setDark)(translationY.value >= 34.99);

    return {
      top,
      backgroundColor,
      borderColor,
    };
  }, [translationY.value, searchContentAnimation.value]);

  const searchIconStyle = useAnimatedStyle(() => {
    const scale = 1 - searchContentAnimation.value;

    return {
      transform: [{ scale }],
    };
  }, [translationY.value, searchContentAnimation.value]);

  const searchBackStyle = useAnimatedStyle(() => {
    const scale = searchContentAnimation.value;

    return {
      transform: [{ scale }],
    };
  }, [translationY.value, searchContentAnimation.value]);

  const onSearchFocus = () => {
    if (translationY.value < 40) {
      verticalScrollViewRef.current?.scrollTo({
        y: 40,
      });
    }

    translationYWhenSearchOpenRef.current = translationY.value;
    searchContentAnimation.value = withTiming(1);

    StatusBar.setBarStyle('dark-content');

    hideTabBar();
  };

  const onSearchBlur = () => {
    searchContentAnimation.value = withTiming(0);

    verticalScrollViewRef.current?.scrollTo({
      y: translationYWhenSearchOpenRef.current,
    });

    searchRef.current?.blur();

    if (translationYWhenSearchOpenRef.current <= 34.99) {
      StatusBar.setBarStyle('light-content');
    }

    searchRef.current?.clear();

    showTabBar();
    onSearch('');
  };

  return (
    <Animated.View style={[styles.container, containerStyle]}>
      <View style={[styles.search]}>
        <View style={styles.iconContainer}>
          <AnimatedIcon
            name="search1"
            size={23}
            color={StyleGuide.palette.app}
            style={[styles.icon, searchIconStyle]}
          />

          <Animated.View style={[styles.icon, searchBackStyle]}>
            <RoundButton
              onPress={onSearchBlur}
              name={'arrowleft'}
              size={23}
              Icon={AnimatedIcon}
              color={StyleGuide.palette.primary}
              rippleColor={'transparent'}
            />
          </Animated.View>
        </View>
        <TextInput
          placeholder={'O que você quer comer?'}
          placeholderTextColor={StyleGuide.palette.secondary}
          style={styles.input}
          onFocus={onSearchFocus}
          onChangeText={onSearch}
          ref={searchRef}
        />
      </View>
    </Animated.View>
  );
};

export default memo(MenuSearch);
