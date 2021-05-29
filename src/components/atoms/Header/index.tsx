import React, { memo, useCallback } from 'react';

import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';

import { HEADER_HEIGHT } from './constants';

import styles from './styles';
import { Image, Text, View } from 'react-native';
import RoundButton from '../buttons/Round';
import { useNavigation } from '@react-navigation/native';

import { StackNavigationProp } from '@react-navigation/stack';

import StyleGuide from '../../../util/StyleGuide';

type HeaderProps = {
  translateY?: Animated.SharedValue<number>;
  title?: string;
  backgroundColor?: string;
  showBack?: boolean;
  showRightButtons?: boolean;
  elevation?: number;
  onBack?: () => void;
};

const Header: React.FC<HeaderProps> = ({
  translateY,
  title,
  backgroundColor,
  showBack = true,
  showRightButtons = false,
  elevation = 0,
  onBack,
}) => {
  const { navigate, pop } = useNavigation<StackNavigationProp<any>>();

  const y = useDerivedValue(() => {
    if (!translateY) {
      return 0;
    }

    const validY = interpolate(
      translateY.value,
      [-HEADER_HEIGHT, 0],
      [-HEADER_HEIGHT, 0],
      Extrapolate.CLAMP,
    );

    return validY;
  }, [translateY?.value]);

  const styleContainer = useAnimatedStyle(() => {
    return {
      marginTop: y.value,
    };
  }, [y.value]);

  const styleContent = useAnimatedStyle(() => {
    return { opacity: interpolate(y.value, [-HEADER_HEIGHT, 0], [0, 1]) };
  });

  const onOpenSearch = useCallback(() => {
    navigate('Search');
  }, [navigate]);

  const onBackPress = useCallback(() => {
    if (onBack) {
      onBack();
      return;
    }

    pop();
  }, [onBack, pop]);

  return (
    <Animated.View
      style={[
        styles.container,
        styleContainer,
        {
          backgroundColor: backgroundColor || StyleGuide.palette.background,
          elevation,
        },
      ]}>
      <Animated.View style={[styles.content, styleContent]}>
        <View style={styles.left}>
          {showBack && (
            <RoundButton
              onPress={onBackPress}
              name={'arrowleft'}
              size={24}
              Icon={Icon}
              style={styles.backButton}
            />
          )}

          <Text style={styles.title}>{title}</Text>
        </View>

        {showRightButtons && (
          <View style={styles.rightButtons}>
            <RoundButton
              size={22}
              name="md-search-outline"
              onPress={onOpenSearch}
              Icon={IonIcon}
            />
          </View>
        )}
      </Animated.View>
    </Animated.View>
  );
};

export default memo(Header);
