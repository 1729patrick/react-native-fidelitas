import { RouteProp, useRoute } from '@react-navigation/core';
import React from 'react';

import useStatusBar from '../../hooks/useStatusBar';

import Products from '../../components/templates/Products';
import Header from '../../components/atoms/Header';

export type Item = {
  title: string;
  type: 'category' | 'product';
  description?: string;
  image: any;
  price?: number;
  items?: Item[];
};

type ParamList = {
  Products: { title: string; items: Item[] };
};

export default () => {
  useStatusBar(true);
  const { params } = useRoute<RouteProp<ParamList, 'Products'>>();

  return (
    <>
      <Header title={params.title} elevation={2} />
      <Products items={params.items} />
    </>
  );
};
