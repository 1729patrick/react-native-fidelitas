import React, { memo, useMemo } from 'react';
import { Dimensions, Text, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import useSearchProducts from '~/api/useSearchProducts';
import { BasketType } from '~/contexts/Basket';
import { useKeyboard } from '~/hooks/useKeyboard';
import { ProductType } from '~/screens/menu/Menu';
import ProductsList from '../lists/Products';
import { PADDING_TOP } from './constants';
import styles from './styles';

const { height } = Dimensions.get('window');

type SearchContentProps = {
  searchContentAnimation: Animated.SharedValue<number>;
  searchTerm: string;
  addToBasket: (quantity: number, product: ProductType) => void;
  basket: BasketType;
};

const SearchContent: React.FC<SearchContentProps> = ({
  searchContentAnimation,
  searchTerm,
  addToBasket,
  basket,
}) => {
  const { products, isLoading } = useSearchProducts(searchTerm);

  console.log(products);
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
        data={products}
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
          Comida "{searchTerm}" não encontrada
        </Text>
        <Text style={styles.notFoundDescription}>
          Tente de novo com um novo termo de busca
        </Text>
      </View>
    );
  };

  const renderContent = () => {
    if (products?.length) {
      return renderResult();
    }

    if (searchTerm && !isLoading) {
      return renderNotFound();
    }

    return null;
  };
  return (
    <Animated.View style={[styles.container, containerStyle]}>
      {renderContent()}
    </Animated.View>
  );
};

export default memo(SearchContent);
