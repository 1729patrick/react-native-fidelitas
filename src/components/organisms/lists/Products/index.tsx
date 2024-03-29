import React, { ReactElement, useCallback } from 'react';
import { AlertType, StyleProp, ViewStyle } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ProductItem from '~/components/molecules/items/ProductItem';
import { BasketType } from '~/contexts/Basket';
import { ProductType } from '~/screens/menu/Menu';

import styles from './styles';

type ProductsListProps = {
  style?: StyleProp<ViewStyle>;
  onPress?: (args: AlertType) => void;
  data?: ProductType[];
  addToBasket: (quantity: number, product: ProductType) => void;
  basket: BasketType;
  simpleContent?: boolean;
  footer?: ReactElement;
};

const ProductsList: React.FC<ProductsListProps> = ({
  style,
  data,
  addToBasket,
  basket,
  simpleContent,
  footer,
}) => {
  const getQuantity = useCallback(
    (id: string) => {
      const { quantity } = basket.find(({ product }) => product.id === id) || {
        quantity: 0,
      };

      return quantity;
    },
    [basket],
  );

  return (
    <FlatList
      contentContainerStyle={[styles.contentContainer, style]}
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      data={data}
      initialNumToRender={10}
      ListFooterComponent={footer}
      renderItem={({ item }) => (
        <ProductItem
          {...item}
          key={item.id}
          addToBasket={quantity => addToBasket(quantity, item)}
          quantity={getQuantity(item.id)}
          simpleContent={simpleContent}
        />
      )}
    />
  );
};

export default ProductsList;
