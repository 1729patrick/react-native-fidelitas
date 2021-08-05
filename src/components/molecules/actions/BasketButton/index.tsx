import React, { useMemo } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { BasketType } from '~/screens/menu/Menu';

type BasketButtonProps = {
  searchContentAnimation: Animated.SharedValue<number>;
  basket: BasketType;
};

const BasketButton: React.FC<BasketButtonProps> = ({
  searchContentAnimation,
  basket,
}) => {
  const animation = useSharedValue(0);
  const { navigate } = useNavigation<StackNavigationProp<any>>();

  const quantity = useMemo(() => {
    return basket.reduce((acc, { quantity }) => quantity + acc, 0);
  }, [basket]);

  const price = useMemo(() => {
    return basket.reduce(
      (acc, { quantity, product }) => (product.price || 0) * quantity + acc,
      0,
    );
  }, [basket]);

  const openBasket = () => {
    navigate('Basket');
  };

  const basketStyle = useAnimatedStyle(() => {
    const elevation = interpolate(
      searchContentAnimation.value,
      [0, 0.1],
      [5, 0],
      Extrapolate.CLAMP,
    );

    return { elevation };
  }, [searchContentAnimation.value]);

  return (
    <Animated.View style={[styles.basket, basketStyle]}>
      <RectButton style={styles.basketButton} onPress={openBasket}>
        <Icon
          style={styles.basketIcon}
          name="ios-basket"
          size={28}
          color="#fff"
        />
        <View style={styles.basketBadge}>
          <Text style={styles.basketBadgeTitle}>{quantity}</Text>
        </View>
        <View style={styles.basketTitleContainer}>
          <Text style={styles.basketTitle}>Cesto (€ {price})</Text>
        </View>
      </RectButton>
    </Animated.View>
  );
};

export default BasketButton;
