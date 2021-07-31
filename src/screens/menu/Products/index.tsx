import { RouteProp, useRoute } from '@react-navigation/core';
import React from 'react';

import ProductsList from '~/components/organisms/lists/Products';

import Product from '~/components/templates/Products';
import styles from './styles';
import useStatusBar from '~/hooks/useStatusBar';
import Header from '~/components/atoms/Header';
import { Text } from 'react-native';
import ProductItem from '~/components/molecules/items/ProductItem';
import { ScrollView } from 'react-native-gesture-handler';
import GroupedProductsList from '~/components/organisms/lists/GroupedProducts';

export enum MenuType {
  Category,
  Product,
}

export type Item = {
  id: string;
  title: string;
  type: MenuType;
  description?: string;
  image: any;
  price?: number;
  items?: Item[];
};

type ParamList = {
  Products: { title: string; items: Item[]; type: MenuType };
};

export default () => {
  useStatusBar(true);
  const { params } = useRoute<RouteProp<ParamList, 'Products'>>();

  const renderList = () => {
    if (params.type === MenuType.Category) {
      return (
        <GroupedProductsList
          data={params.items || []}
          style={styles.contentContainer}
          onPress={x => console.log(x)}
        />
      );
    }

    return (
      <ProductsList
        data={params.items || []}
        style={styles.contentContainer}
        onPress={x => console.log(x)}
      />
    );
  };

  console.log(params.type);
  return (
    <Product header={<Header title={params.title} />} list={renderList()} />
  );
};
