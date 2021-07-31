import React from 'react';
import { AlertType, StyleProp, ViewStyle } from 'react-native';
import ProductItem from '~/components/molecules/items/ProductItem';
import { Item } from '~/screens/menu/Products';
import List from '../../../atoms/List';

type ProductsListProps = {
  style?: StyleProp<ViewStyle>;
  onPress?: (args: AlertType) => void;
  data: Item[];
};

const ProductsList: React.FC<ProductsListProps> = ({
  style,
  onPress,
  data,
}) => {
  return (
    <List item={ProductItem} data={data} style={style} onPress={onPress} />
  );
};

export default ProductsList;
