import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import React, { useRef } from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import useStatusBar from '../../hooks/useStatusBar';

import styles from './styles';
import StyleGuide from '../../util/StyleGuide';
import Menu from '../../components/templates/Menu';
import { StackNavigationProp } from '@react-navigation/stack';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColors,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  interpolateColor,
} from 'react-native-reanimated';

import { ScrollView } from 'react-native-gesture-handler';

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

export type Item = {
  title: string;
  type: 'category' | 'product';
  description?: string;
  image: any;
  price?: number;
  items?: Item[];
};

const image = require('../../assets/background_home.jpg');

const items_: Item[] = [
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
  const { push } = useNavigation<StackNavigationProp<any>>();
  const { params } = useRoute<RouteProp<ParamList, 'Menu'>>();
  const translationY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translationY.value = event.contentOffset.y;
  });

  const preventDuplicateNavigationRef = useRef<number>(0);

  const openProducts = ({ items, title }: Item) => {
    const fiveSeconds = 600 * 2;
    if (
      new Date().getTime() - preventDuplicateNavigationRef.current <=
      fiveSeconds
    ) {
      return;
    }

    preventDuplicateNavigationRef.current = new Date().getTime();

    push('Products', { items, title });
  };

  const searchStyles = useAnimatedStyle(() => {
    const top = interpolate(
      translationY.value,
      [0, 35],
      [35, 0],
      Extrapolate.CLAMP,
    );

    const backgroundColor = interpolateColor(
      translationY.value,
      [34.99, 35],
      ['transparent', 'white'],
    );

    const elevation = interpolate(
      translationY.value,
      [34.99, 35],
      [0, 2],
      Extrapolate.CLAMP,
    );

    return {
      top,
      backgroundColor,
      elevation,
    };
  }, [translationY]);

  return (
    <>
      <View style={styles.container}>
        <AnimatedScrollView
          overScrollMode="never"
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}>
          <FastImage
            source={require('../../assets/background_menu.jpg')}
            resizeMode={FastImage.resizeMode.cover}
            style={[styles.image]}>
            <Text style={styles.title}>
              Encontre as melhores comidas de Setúbal
            </Text>
          </FastImage>

          <Menu items={params?.items || items} openProducts={openProducts} />
        </AnimatedScrollView>

        <Animated.View style={[styles.searchContainer, searchStyles]}>
          <View style={[styles.search]}>
            <Icon name="search1" size={23} color={StyleGuide.palette.app} />
            <TextInput
              placeholder={'O que você quer comer?'}
              placeholderTextColor={StyleGuide.palette.secondary}
              style={styles.input}
            />
          </View>
        </Animated.View>
      </View>
    </>
  );
};
