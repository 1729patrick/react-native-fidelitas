import React, { memo, useEffect, useMemo } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

import { Dimensions, Text, View } from 'react-native';
import { BasketType } from '~/screens/menu/Menu';
import StyleGuide from '~/util/StyleGuide';
import { darken } from 'polished';
import { MARGIN_TOP } from './constants';
import Badge from '~/components/atoms/Badge';
import Currency from '~/components/atoms/Currency';

type BasketButtonProps = {
  searchContentAnimation: Animated.SharedValue<number>;
  basket: BasketType;
  openBasket: () => void;
};

const darkenAppColor = darken(0.2, StyleGuide.palette.app);

const { height } = Dimensions.get('window');

const BasketButton: React.FC<BasketButtonProps> = ({
  searchContentAnimation,
  basket,
  openBasket,
}) => {
  const animation = useSharedValue(0);
  const animationY = useSharedValue(1);

  const quantity = useMemo(() => {
    return basket.reduce((acc, { quantity }) => quantity + acc, 0);
  }, [basket]);

  const price = useMemo(() => {
    return basket.reduce(
      (acc, { quantity, product }) => (product.price || 0) * quantity + acc,
      0,
    );
  }, [basket]);

  const basketStyle = useAnimatedStyle(() => {
    const elevation = interpolate(
      searchContentAnimation.value,
      [0, 0.1],
      [5, 0],
      Extrapolate.CLAMP,
    );

    return { elevation };
  }, [searchContentAnimation.value]);

  const containerStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animation.value,
      [0, 0.5, 1],
      [StyleGuide.palette.app, darkenAppColor, StyleGuide.palette.app],
    );

    const top = interpolate(animationY.value, [0, 1], [MARGIN_TOP, height]);

    return { backgroundColor, top };
  }, [animation.value]);

  useEffect(() => {
    animation.value = withSpring(+!animation.value);
  }, [animation, quantity]);

  const basketEmpty = useMemo(() => {
    return !!price;
  }, [price]);

  useEffect(() => {
    animationY.value = withSpring(+!basketEmpty);
  }, [animationY, basketEmpty]);

  return (
    <Animated.View style={[styles.basket, basketStyle, containerStyle]}>
      <RectButton
        style={styles.basketButton}
        onPress={openBasket}
        rippleColor={StyleGuide.palette.secondary}>
        <Icon
          style={styles.basketIcon}
          name="ios-basket"
          size={28}
          color="#fff"
        />
        <View style={styles.badgeContainer}>
          <Badge value={quantity} />
        </View>

        <View style={styles.basketTitleContainer}>
          <Text style={styles.basketTitle}>
            Cesto (
            <Currency price={price} style={styles.basketTitle} />)
          </Text>
        </View>
      </RectButton>
    </Animated.View>
  );
};

export default memo(BasketButton);
