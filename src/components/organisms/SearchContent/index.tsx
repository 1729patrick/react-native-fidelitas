import React, { memo, useMemo } from 'react';
import { Dimensions, Text, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { BasketType } from '~/contexts/Basket';
import { useKeyboard } from '~/hooks/useKeyboard';
import { ProductType } from '~/screens/menu/Menu';
import ProductsList from '../lists/Products';
import { PADDING_TOP } from './constants';
import styles from './styles';

const { height } = Dimensions.get('window');

type SearchContentProps = {
  searchContentAnimation: Animated.SharedValue<number>;
  data?: ProductType[];
  searchTerm: string;
  addToBasket: (quantity: number, product: ProductType) => void;
  basket: BasketType;
};

const SearchContent: React.FC<SearchContentProps> = ({
  searchContentAnimation,
  data = [],
  searchTerm,
  addToBasket,
  basket,
}) => {
  const { keyboardShown, keyboardHeight } = useKeyboard();

  const containerStyle = useAnimatedStyle(() => {
    const height_ = interpolate(
      searchContentAnimation.value,
      [0, 1],
      [0, height],
    );

    return { height: height_ };
  }, [searchContentAnimation.value]);

  const paddingBottom = useMemo(() => {
    return keyboardShown ? keyboardHeight : 0;
  }, [keyboardHeight, keyboardShown]);

  const renderResult = () => {
    return (
      <ProductsList
        addToBasket={addToBasket}
        data={data}
        basket={basket}
        style={{ ...styles.contentContainer, paddingBottom }}
      />
    );
  };

  const renderNotFound = () => {
    return (
      <View
        style={[
          styles.notFound,
          { paddingBottom: paddingBottom - PADDING_TOP },
        ]}>
        <Text style={styles.notFoundTitle}>
          Nenhuma comida encontrada para "{searchTerm}"
        </Text>
      </View>
    );
  };

  return (
    <Animated.View style={[styles.container, containerStyle]}>
      {searchTerm ? renderNotFound() : renderResult()}
    </Animated.View>
  );
};

export default memo(SearchContent);
