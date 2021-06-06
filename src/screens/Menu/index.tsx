import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import React, { useRef } from 'react';
import Header from '../../components/atoms/Header';
import Menu from '../../components/templates/Menu';
import useStatusBar from '../../hooks/useStatusBar';

export type Item = {
  title: string;
  type: 'category' | 'product';
  description?: string;
  image: any;
  price?: number;
  items?: Item[];
};

const image = require('../../assets/background_home.jpg');
const items: Item[] = [
  {
    title: 'Para Veganos',
    type: 'category',
    image,

    items: [
      {
        title: 'Produtos Naturais',
        type: 'category',
        image,
        items: [
          {
            title: 'Bebidas Naturais',
            type: 'category',
            image,
            items: [
              {
                title: 'Chá Clássico',
                description: 'Camomila, Capim Limão, Hortelã',
                type: 'product',
                image,
              },
              {
                title: 'Chocolate Quente',
                description: 'Chocolate Quente meio amargo - 230ml',
                type: 'product',
                image,
              },
            ],
          },
          {
            title: 'Comidas Naturais',
            type: 'category',
            image,
            items: [
              {
                title: 'Pão Clássico',
                description: 'Camomila, Capim Limão, Hortelã',
                type: 'product',
                image,
              },
              {
                title: 'Batata Quente',
                description: 'Chocolate Quente meio amargo - 230ml',
                type: 'product',
                image,
              },
            ],
          },
        ],
      },
      {
        title: 'Produtos Muito Naturais',
        type: 'category',
        image,
        items: [
          {
            title: 'Bebidas Naturais',
            type: 'category',
            image,
            items: [
              {
                title: 'Chá Clássico',
                description: 'Camomila, Capim Limão, Hortelã',
                type: 'product',
                image,
                price: 12,
              },
              {
                title: 'Chocolate Quente',
                description: 'Chocolate Quente meio amargo - 230ml',
                type: 'product',
                image,
                price: 2,
              },
            ],
          },
          {
            title: 'Comidas Naturais',
            type: 'category',
            image,
            items: [
              {
                title: 'Pão Clássico',
                description: 'Camomila, Capim Limão, Hortelã',
                type: 'product',
                image,
                price: 2,
              },
              {
                title: 'Batata Quente',
                description: 'Chocolate Quente meio amargo - 230ml',
                type: 'product',
                image,
                price: 12,
              },
            ],
          },
        ],
      },
      {
        title: 'Produtos Muito Mais Naturais',
        type: 'category',
        image,
        items: [
          {
            title: 'Bebidas Naturais',
            type: 'category',
            image,
            items: [
              {
                title: 'Chá Clássico',
                description: 'Camomila, Capim Limão, Hortelã',
                type: 'product',
                image,
                price: 12,
              },
              {
                title: 'Chocolate Quente',
                description: 'Chocolate Quente meio amargo - 230ml',
                type: 'product',
                image,
                price: 5,
              },
            ],
          },
          {
            title: 'Comidas Naturais',
            type: 'category',
            image,
            items: [
              {
                title: 'Pão Clássico',
                description: 'Camomila, Capim Limão, Hortelã',
                type: 'product',
                image,
                price: 7,
              },
              {
                title: 'Batata Quente',
                description: 'Chocolate Quente meio amargo - 230ml',
                type: 'product',
                image,
                price: 9,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Para Vegetarianos',
    type: 'category',
    image,

    items: [
      {
        title: 'Produtos Naturais',
        type: 'category',
        image,
        items: [
          {
            title: 'Bebidas Naturais',
            type: 'category',
            image,
            items: [
              {
                title: 'Chá Clássico',
                description: 'Camomila, Capim Limão, Hortelã',
                type: 'product',
                image,
              },
              {
                title: 'Chocolate Quente',
                description: 'Chocolate Quente meio amargo - 230ml',
                type: 'product',
                image,
              },
            ],
          },
          {
            title: 'Comidas Naturais',
            type: 'category',
            image,
            items: [
              {
                title: 'Pão Clássico',
                description: 'Camomila, Capim Limão, Hortelã',
                type: 'product',
                image,
              },
              {
                title: 'Batata Quente',
                description: 'Chocolate Quente meio amargo - 230ml',
                type: 'product',
                image,
              },
            ],
          },
        ],
      },
      {
        title: 'Produtos Muito Naturais',
        type: 'category',
        image,
        items: [
          {
            title: 'Bebidas Naturais',
            type: 'category',
            image,
            items: [
              {
                title: 'Chá Clássico',
                description: 'Camomila, Capim Limão, Hortelã',
                type: 'product',
                image,
                price: 12,
              },
              {
                title: 'Chocolate Quente',
                description: 'Chocolate Quente meio amargo - 230ml',
                type: 'product',
                image,
                price: 2,
              },
            ],
          },
          {
            title: 'Comidas Naturais',
            type: 'category',
            image,
            items: [
              {
                title: 'Pão Clássico',
                description: 'Camomila, Capim Limão, Hortelã',
                type: 'product',
                image,
                price: 2,
              },
              {
                title: 'Batata Quente',
                description: 'Chocolate Quente meio amargo - 230ml',
                type: 'product',
                image,
                price: 12,
              },
            ],
          },
        ],
      },
      {
        title: 'Produtos Muito Mais Naturais',
        type: 'category',
        image,
        items: [
          {
            title: 'Bebidas Naturais',
            type: 'category',
            image,
            items: [
              {
                title: 'Chá Clássico',
                description: 'Camomila, Capim Limão, Hortelã',
                type: 'product',
                image,
                price: 12,
              },
              {
                title: 'Chocolate Quente',
                description: 'Chocolate Quente meio amargo - 230ml',
                type: 'product',
                image,
                price: 5,
              },
            ],
          },
          {
            title: 'Comidas Naturais',
            type: 'category',
            image,
            items: [
              {
                title: 'Pão Clássico',
                description: 'Camomila, Capim Limão, Hortelã',
                type: 'product',
                image,
                price: 7,
              },
              {
                title: 'Batata Quente',
                description: 'Chocolate Quente meio amargo - 230ml',
                type: 'product',
                image,
                price: 9,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Carnes',
    type: 'category',
    image,

    items: [
      {
        title: 'Produtos Naturais',
        type: 'category',
        image,
        items: [
          {
            title: 'Bebidas Naturais',
            type: 'category',
            image,
            items: [
              {
                title: 'Chá Clássico',
                description: 'Camomila, Capim Limão, Hortelã',
                type: 'product',
                image,
              },
              {
                title: 'Chocolate Quente',
                description: 'Chocolate Quente meio amargo - 230ml',
                type: 'product',
                image,
              },
            ],
          },
          {
            title: 'Comidas Naturais',
            type: 'category',
            image,
            items: [
              {
                title: 'Pão Clássico',
                description: 'Camomila, Capim Limão, Hortelã',
                type: 'product',
                image,
              },
              {
                title: 'Batata Quente',
                description: 'Chocolate Quente meio amargo - 230ml',
                type: 'product',
                image,
              },
            ],
          },
        ],
      },
      {
        title: 'Produtos Muito Naturais',
        type: 'category',
        image,
        items: [
          {
            title: 'Bebidas Naturais',
            type: 'category',
            image,
            items: [
              {
                title: 'Chá Clássico',
                description: 'Camomila, Capim Limão, Hortelã',
                type: 'product',
                image,
                price: 12,
              },
              {
                title: 'Chocolate Quente',
                description: 'Chocolate Quente meio amargo - 230ml',
                type: 'product',
                image,
                price: 2,
              },
            ],
          },
          {
            title: 'Comidas Naturais',
            type: 'category',
            image,
            items: [
              {
                title: 'Pão Clássico',
                description: 'Camomila, Capim Limão, Hortelã',
                type: 'product',
                image,
                price: 2,
              },
              {
                title: 'Batata Quente',
                description: 'Chocolate Quente meio amargo - 230ml',
                type: 'product',
                image,
                price: 12,
              },
            ],
          },
        ],
      },
      {
        title: 'Produtos Muito Mais Naturais',
        type: 'category',
        image,
        items: [
          {
            title: 'Bebidas Naturais',
            type: 'category',
            image,
            items: [
              {
                title: 'Chá Clássico',
                description: 'Camomila, Capim Limão, Hortelã',
                type: 'product',
                image,
                price: 12,
              },
              {
                title: 'Chocolate Quente',
                description: 'Chocolate Quente meio amargo - 230ml',
                type: 'product',
                image,
                price: 5,
              },
            ],
          },
          {
            title: 'Comidas Naturais',
            type: 'category',
            image,
            items: [
              {
                title: 'Pão Clássico',
                description: 'Camomila, Capim Limão, Hortelã',
                type: 'product',
                image,
                price: 7,
              },
              {
                title: 'Batata Quente',
                description: 'Chocolate Quente meio amargo - 230ml',
                type: 'product',
                image,
                price: 9,
              },
            ],
          },
        ],
      },
    ],
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
      <Header
        title={params?.title || 'Ementa'}
        showBack={!!params?.title}
        elevation={1}
      />
      <Menu
        items={params?.items || items}
        openCategory={openCategory}
        openProduct={openProduct}
      />
    </>
  );
};
