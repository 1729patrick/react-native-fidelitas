import React, { memo, useCallback, useMemo } from 'react';
import { Dimensions, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import ProductItem from '~/components/molecules/items/ProductItem';
import { useKeyboard } from '~/hooks/useKeyboard';
import { BasketType, MenuItemType } from '~/screens/menu/Menu';
import { PADDING_TOP } from './constants';
import styles from './styles';

const { height } = Dimensions.get('window');

type SearchContentProps = {
  searchContentAnimation: Animated.SharedValue<number>;
  data?: MenuItemType[];
  searchTerm: string;
  addToBasket: (quantity: number, product: MenuItemType) => void;
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

  const getQuantity = useCallback(
    (id: string) => {
      const { quantity } = basket.find(({ product }) => product.id === id) || {
        quantity: 0,
      };

      return quantity;
    },
    [basket],
  );

  const renderResult = () => {
    return (
      <ScrollView
        contentContainerStyle={[styles.contentContainer, { paddingBottom }]}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}>
        {data.map(product => (
          <ProductItem
            {...product}
            key={product.id}
            addToBasket={quantity => addToBasket(quantity, product)}
            quantity={getQuantity(product.id)}
          />
        ))}
      </ScrollView>
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

export default SearchContent;
