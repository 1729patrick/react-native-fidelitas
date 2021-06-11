import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import React, { useRef } from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import useStatusBar from '../../hooks/useStatusBar';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import StyleGuide from '../../util/StyleGuide';
import Menu from '../../components/templates/Menu';

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
  useStatusBar(false);
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
      <View style={styles.container}>
        <FastImage
          source={require('../../assets/background_menu.jpg')}
          resizeMode={FastImage.resizeMode.cover}
          style={[styles.image]}
        />
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.1)']}
          style={styles.linearGradient}>
          <Text style={styles.title}>
            {params?.title || 'Encontre as melhores comidas de Setúbal'}
          </Text>
        </LinearGradient>

        <View style={styles.search}>
          <Icon name="search1" size={23} color={StyleGuide.palette.secondary} />
          <TextInput
            placeholder={'Procurar'}
            placeholderTextColor={StyleGuide.palette.secondary}
            style={styles.input}
          />
        </View>
        <Menu
          items={params?.items || items}
          openCategory={openCategory}
          openProduct={openProduct}
        />
      </View>
    </>
  );
};
