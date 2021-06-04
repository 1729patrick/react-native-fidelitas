import { useNavigation, useRoute } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/native';
import React, { useRef } from 'react';
import Menu from '../../components/templates/Menu';

const menu = [
  {
    title: 'Para Veganos',
    type: 'category',
    items: [
      {
        title: 'Produtos Naturais',
        type: 'category',
        items: [
          {
            title: 'Bebidas Naturais',
            type: 'category',
            items: [
              {
                title: 'Chá Clássico',
                description: 'Camomila, Capim Limão, Hortelã',
                type: 'product',
              },
              {
                title: 'Chocolate Quente',
                description: 'Chocolate Quente meio amargo - 230ml',
                type: 'product',
              },
            ],
          },
          {
            title: 'Comidas Naturais',
            type: 'category',
            items: [
              {
                title: 'Pão Clássico',
                description: 'Camomila, Capim Limão, Hortelã',
                type: 'product',
              },
              {
                title: 'Batata Quente',
                description: 'Chocolate Quente meio amargo - 230ml',
                type: 'product',
              },
            ],
          },
        ],
      },
      {
        title: 'Produtos Muito Naturais',
        type: 'category',
        items: [
          {
            title: 'Bebidas Naturais',
            type: 'category',
            items: [
              {
                title: 'Chá Clássico',
                description: 'Camomila, Capim Limão, Hortelã',
                type: 'product',
              },
              {
                title: 'Chocolate Quente',
                description: 'Chocolate Quente meio amargo - 230ml',
                type: 'product',
              },
            ],
          },
          {
            title: 'Comidas Naturais',
            type: 'category',
            items: [
              {
                title: 'Pão Clássico',
                description: 'Camomila, Capim Limão, Hortelã',
                type: 'product',
              },
              {
                title: 'Batata Quente',
                description: 'Chocolate Quente meio amargo - 230ml',
                type: 'product',
              },
            ],
          },
        ],
      },
    ],
  },
];

export default () => {
  const { dispatch } = useNavigation();
  const { params } = useRoute();

  const preventDuplicateNavigationRef = useRef(false);

  const openCategory = menu => {
    // if (preventDuplicateNavigationRef.current) {
    //   return;
    // }

    // preventDuplicateNavigationRef.current = true;

    dispatch(
      CommonActions.navigate({
        name: 'Category',
        params: {
          menu,
        },
      }),
    );
  };

  const openProduct = product => {
    console.log('product', product);
  };

  return (
    <Menu
      data={params?.menu || menu}
      openCategory={openCategory}
      openProduct={openProduct}
    />
  );
};
