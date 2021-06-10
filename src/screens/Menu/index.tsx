import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import React, { useRef } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Header from '../../components/atoms/Header';
import Menu from '../../components/templates/Menu';
import useStatusBar from '../../hooks/useStatusBar';
import StyleGuide from '../../util/StyleGuide';
import styles from './styles';

export type Item = {
  title: string;
  type: 'category' | 'product';
  description?: string;
  image: any;
  price?: number;
  items?: Item[];
};

const image = require('../../assets/background_home.jpg');

const items_ = [
  {
    title: 'Produtos Naturais',
    type: 'category',
    image,
    items: [
      {
        title: 'Chá Clássico',
        description: 'Camomila, Capim Limão, Hortelã',
        type: 'product',
        image,
        price: 2,
      },
      {
        title: 'Chocolate Quente',
        description: 'Chocolate Quente meio amargo - 230ml',
        type: 'product',
        image,
        price: 4,
      },
      {
        title: 'Pão Clássico',
        description: 'Camomila, Capim Limão, Hortelã',
        type: 'product',
        image,
        price: 8,
      },
      {
        title: 'Batata Quente',
        description: 'Chocolate Quente meio amargo - 230ml',
        type: 'product',
        image,
        price: 16,
      },
    ],
  },
  {
    title: 'Produtos Muito Naturais',
    type: 'category',
    image,
    items: [
      {
        title: 'Chá Clássico',
        description: 'Camomila, Capim Limão, Hortelã',
        type: 'product',
        image,
        price: 2,
      },
      {
        title: 'Chocolate Quente',
        description: 'Chocolate Quente meio amargo - 230ml',
        type: 'product',
        image,
        price: 4,
      },
      {
        title: 'Pão Clássico',
        description: 'Camomila, Capim Limão, Hortelã',
        type: 'product',
        image,
        price: 8,
      },
      {
        title: 'Batata Quente',
        description: 'Chocolate Quente meio amargo - 230ml',
        type: 'product',
        image,
        price: 16,
      },
    ],
  },
  {
    title: 'Produtos Muito Mais Naturais',
    type: 'category',
    image,
    items: [
      {
        title: 'Chá Clássico',
        description: 'Camomila, Capim Limão, Hortelã',
        type: 'product',
        image,
        price: 2,
      },
      {
        title: 'Chocolate Quente',
        description: 'Chocolate Quente meio amargo - 230ml',
        type: 'product',
        image,
        price: 4,
      },
      {
        title: 'Pão Clássico',
        description: 'Camomila, Capim Limão, Hortelã',
        type: 'product',
        image,
        price: 8,
      },
      {
        title: 'Batata Quente',
        description: 'Chocolate Quente meio amargo - 230ml',
        type: 'product',
        image,
        price: 16,
      },
    ],
  },
];

const items: Item[] = [
  {
    title: 'Para Veganos',
    type: 'category',
    image,
    items: items_,
  },
  {
    title: 'Carnes',
    type: 'category',
    image,
    items: items_,
  },
  {
    title: 'Bebidas',
    type: 'category',
    image,
    items: items_,
  },
];

type ParamList = {
  Menu: { title: string; items: Item[] };
};

export default () => {
  useStatusBar(true);
  const { push } = useNavigation();
  const { params } = useRoute<RouteProp<ParamList, 'Menu'>>();

  const preventDuplicateNavigationRef = useRef<number>(0);

  const openCategory = ({ items, title }: Item) => {
    const fiveSeconds = 600 * 2;
    if (
      new Date().getTime() - preventDuplicateNavigationRef.current <=
      fiveSeconds
    ) {
      return;
    }

    preventDuplicateNavigationRef.current = new Date().getTime();

    push('Category', { items, title });
  };

  const openProduct = (product: Item) => {
    console.log('product', product);
  };

  return (
    <>
      <Header title={params?.title || 'Ementa'} showBack={!!params?.title} />
      <View style={styles.container}>
        <ScrollView horizontal>
          {items.map(item => (
            <View
              key={item.title}
              style={{
                width: 100,
                height: 100,
                borderRadius: StyleGuide.borderRadius * 2,
                elevation: 5,
                backgroundColor: '#fff',
                margin: 10,
              }}>
              <Text style={{ color: 'red' }}>{item.title}</Text>
            </View>
          ))}
        </ScrollView>
        {/* <Menu
          items={params?.items || items}
          openCategory={openCategory}
          openProduct={openProduct}
        /> */}
      </View>
    </>
  );
};
