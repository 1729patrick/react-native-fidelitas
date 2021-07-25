import { RouteProp, useRoute } from '@react-navigation/core';
import React from 'react';

import ProductsList from '~/components/organisms/lists/Products';
import { ProductType } from '~/components/molecules/items/ProductItem';
import Product from '~/components/templates/Products';
import styles from './styles';
import useStatusBar from '~/hooks/useStatusBar';
import Header from '~/components/atoms/Header';

export type Item = {
  title: string;
  type: 'category' | 'product';
  description?: string;
  image: any;
  price?: number;
  items?: Item[];
};

type ParamList = {
  Products: { title: string; items: ProductType[] };
};

export default () => {
  useStatusBar(true);
  const { params } = useRoute<RouteProp<ParamList, 'Products'>>();

  return (
    <Product
      header={<Header title={params.title} elevation={2} />}
      list={
        <ProductsList
          data={params.items || []}
          style={styles.contentContainer}
          onPress={x => console.log(x)}
        />
      }
    />
  );
};
