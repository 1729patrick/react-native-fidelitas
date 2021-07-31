import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import React, { useRef, useState } from 'react';
import { StatusBar, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  interpolateColor,
  runOnJS,
} from 'react-native-reanimated';

import { ScrollView } from 'react-native-gesture-handler';
import Categories from '~/components/organisms/lists/Categories';
import { CategoryType } from '~/components/molecules/items/CategoryItem';
import Menu from '~/components/templates/Menu';
import { Item } from '../Products';
import useStatusBar from '~/hooks/useStatusBar';
import StyleGuide from '~/util/StyleGuide';

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

const image = require('../../../assets/background_home.jpg');

const items_: CategoryType[] = [
  {
    id: 'Produtos Naturais',
    title: 'Produtos Naturais',
    type: 'category',
    image,
    items: [
      {
        id: 'Chá Clássico',
        title: 'Chá Clássico',
        description: 'Camomila, Capim Limão, Hortelã',
        type: 'product',
        image,
        price: 2,
      },
      {
        id: 'Chocolate Quente',
        title: 'Chocolate Quente',
        description: 'Chocolate Quente meio amargo - 230ml',
        type: 'product',
        image,
        price: 4,
      },
      {
        id: 'Pão Clássico',
        title: 'Pão Clássico',
        description: 'Camomila, Capim Limão, Hortelã',
        type: 'product',
        image,
        price: 8,
      },
      {
        id: 'Batata Quente',
        title: 'Batata Quente',
        description: 'Chocolate Quente meio amargo - 230ml',
        type: 'product',
        image,
        price: 16,
      },
    ],
  },
  {
    id: 'Produtos Muito Naturais',
    title: 'Produtos Muito Naturais',
    type: 'category',
    image,
    items: [
      {
        id: 'Chá Clássico',
        title: 'Chá Clássico',
        description: 'Camomila, Capim Limão, Hortelã',
        type: 'product',
        image,
        price: 2,
      },
      {
        id: 'Chocolate Quente',
        title: 'Chocolate Quente',
        description: 'Chocolate Quente meio amargo - 230ml',
        type: 'product',
        image,
        price: 4,
      },
      {
        id: 'Pão Clássico',
        title: 'Pão Clássico',
        description: 'Camomila, Capim Limão, Hortelã',
        type: 'product',
        image,
        price: 8,
      },
      {
        id: 'Batata Quente',
        title: 'Batata Quente',
        description: 'Chocolate Quente meio amargo - 230ml',
        type: 'product',
        image,
        price: 16,
      },
    ],
  },
  {
    id: 'Produtos Muito Mais Naturais',
    title: 'Produtos Muito Mais Naturais',
    type: 'category',
    image,
    items: [
      {
        id: 'Chá Clássico',
        title: 'Chá Clássico',
        description: 'Camomila, Capim Limão, Hortelã',
        type: 'product',
        image,
        price: 2,
      },
      {
        id: 'Chocolate Quente',
        title: 'Chocolate Quente',
        description: 'Chocolate Quente meio amargo - 230ml',
        type: 'product',
        image,
        price: 4,
      },
      {
        id: 'Pão Clássico',
        title: 'Pão Clássico',
        description: 'Camomila, Capim Limão, Hortelã',
        type: 'product',
        image,
        price: 8,
      },
      {
        id: 'Batata Quente',
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
  Menu: { title: string; items: CategoryType[] };
};

export default () => {
  const { push } = useNavigation<StackNavigationProp<any>>();
  const { params } = useRoute<RouteProp<ParamList, 'Menu'>>();
  const translationY = useSharedValue(0);
  const [dark, setDark] = useState(false);
  useStatusBar(dark);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translationY.value = event.contentOffset.y;
  });

  const preventDuplicateNavigationRef = useRef<number>(0);

  const openProducts = ({ items, title }: CategoryType) => {
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

    runOnJS(setDark)(translationY.value >= 34.99);

    return {
      top,
      backgroundColor,
      elevation,
    };
  }, [translationY]);

  return (
    <Menu
      statusBar={
        <StatusBar
          translucent
          backgroundColor="rgba(0, 0, 0, 0)"
          barStyle={dark ? 'dark-content' : 'light-content'}
        />
      }
      search={
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
      }
      content={
        <AnimatedScrollView
          overScrollMode="never"
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}>
          <FastImage
            source={require('../../../assets/background_menu.jpg')}
            resizeMode={FastImage.resizeMode.cover}
            style={[styles.image]}>
            <Text style={styles.title}>
              Encontre as melhores comidas de Setúbal
            </Text>
          </FastImage>

          <Categories data={params?.items || items} onPress={openProducts} />
        </AnimatedScrollView>
      }
    />
  );
};