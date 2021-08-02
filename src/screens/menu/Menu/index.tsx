import React, { useRef, useState } from 'react';
import { Dimensions, StatusBar, Text } from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './styles';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { ScrollView } from 'react-native-gesture-handler';

import Menu from '~/components/templates/Menu';
import useStatusBar from '~/hooks/useStatusBar';
import GroupedProductsList, {
  GroupedProductListHandler,
} from '~/components/organisms/lists/GroupedProducts';
import { TOTAL_HEADER_HEIGHT } from './constants';
import CategoryIndicator, {
  CategoryIndicatorHandler,
} from '~/components/molecules/CategoryIndicator';
import MenuSearch from '~/components/organisms/MenuSearch';
import SearchContent from '~/components/organisms/SearchContent';

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

const image = require('../../../assets/background_home.jpg');

const { height } = Dimensions.get('window');

export enum MenuType {
  Category,
  Product,
}

export type MenuItemType = {
  id: string;
  title: string;
  type: MenuType;
  description?: string;
  image: any;
  price?: string;
  items?: MenuItemType[];
};

const generic = {
  id: 'Produtos Naturais',
  title: 'Entrada',
  type: MenuType.Category,
  image,
  items: [
    {
      id: 'Chá Clássico',
      title: 'Chá Clássico',
      description: 'Camomila, Capim Limão, Hortelã',
      type: MenuType.Product,
      image,
      price: '2,00',
    },
    {
      id: 'Chocolate Quente',
      title: 'Chocolate Quente',
      description: 'Chocolate Quente meio amargo - 230ml',
      type: MenuType.Product,
      image,
      price: '4,00',
    },
    {
      id: 'Pão Clássico',
      title: 'Pão Clássico',
      description: 'Camomila, Capim Limão, Hortelã',
      type: MenuType.Product,
      image,
      price: '8,50',
    },
    {
      id: 'Batata Quente',
      title: 'Batata Quente',
      description: 'Chocolate Quente meio amargo - 230ml',
      type: MenuType.Product,
      image,
      price: 16,
    },
    {
      id: 'Batata Fria',
      title: 'Batata Fria',
      description: 'Chocolate Quente meio amargo - 230ml',
      type: MenuType.Product,
      image,
      price: 16,
    },
    {
      id: 'Água',
      title: 'Água',
      description: 'Chocolate Quente meio amargo - 230ml',
      type: MenuType.Product,
      image,
      price: 16,
    },
  ],
};

const items_: MenuItemType[] = [
  {
    id: 'Produtos Naturais',
    title: 'Entrada',
    type: MenuType.Category,
    image,
    items: [
      {
        id: 'Chá Clássico',
        title: 'Chá Clássico',
        description: 'Camomila, Capim Limão, Hortelã',
        type: MenuType.Product,
        image,
        price: '2,00',
      },
      {
        id: 'Chocolate Quente',
        title: 'Chocolate Quente',
        description: 'Chocolate Quente meio amargo - 230ml',
        type: MenuType.Product,
        image,
        price: '4,00',
      },
      {
        id: 'Pão Clássico',
        title: 'Pão Clássico',
        description: 'Camomila, Capim Limão, Hortelã',
        type: MenuType.Product,
        image,
        price: '8,50',
      },
      {
        id: 'Batata Quente',
        title: 'Batata Quente',
        description: 'Chocolate Quente meio amargo - 230ml',
        type: MenuType.Product,
        image,
        price: 16,
      },
    ],
  },
  {
    id: 'Produtos Muito Naturais',
    title: 'Prato Principal',
    type: MenuType.Category,
    image,
    items: [
      {
        id: 'Chá Clássico',
        title: 'Chá Clássico',
        description: 'Camomila, Capim Limão, Hortelã',
        type: MenuType.Product,
        image,
        price: '2,00',
      },
      {
        id: 'Chocolate Quente',
        title: 'Chocolate Quente',
        description: 'Chocolate Quente meio amargo - 230ml',
        type: MenuType.Product,
        image,
        price: '4,00',
      },
      {
        id: 'Pão Clássico',
        title: 'Pão Clássico',
        description: 'Camomila, Capim Limão, Hortelã',
        type: MenuType.Product,
        image,
        price: '8,50',
      },
      {
        id: 'Batata Quente',
        title: 'Batata Quente',
        description: 'Chocolate Quente meio amargo - 230ml',
        type: MenuType.Product,
        image,
        price: 16,
      },
    ],
  },
  {
    id: 'Produtos Muito Mais Naturais',
    title: 'Sobremesa',
    type: MenuType.Category,
    image,
    items: [
      {
        id: 'Chá Clássico',
        title: 'Chá Clássico',
        description: 'Camomila, Capim Limão, Hortelã',
        type: MenuType.Product,
        image,
        price: '2,00',
      },
      {
        id: 'Chocolate Quente',
        title: 'Chocolate Quente',
        description: 'Chocolate Quente meio amargo - 230ml',
        type: MenuType.Product,
        image,
        price: '4,00',
      },
      {
        id: 'Pão Clássico',
        title: 'Pão Clássico',
        description: 'Camomila, Capim Limão, Hortelã',
        type: MenuType.Product,
        image,
        price: '8,50',
      },
      {
        id: 'Batata Quente',
        title: 'Batata Quente',
        description: 'Chocolate Quente meio amargo - 230ml',
        type: MenuType.Product,
        image,
        price: 16,
      },
    ],
  },
  {
    id: 'Bebidas',
    title: 'Bebidas',
    type: MenuType.Category,
    image,
    items: [
      {
        id: 'Chá Clássico',
        title: 'Chá Clássico',
        description: 'Camomila, Capim Limão, Hortelã',
        type: MenuType.Product,
        image,
        price: '2,00',
      },
      {
        id: 'Chocolate Quente',
        title: 'Chocolate Quente',
        description: 'Chocolate Quente meio amargo - 230ml',
        type: MenuType.Product,
        image,
        price: '4,00',
      },
      {
        id: 'Pão Clássico',
        title: 'Pão Clássico',
        description: 'Camomila, Capim Limão, Hortelã',
        type: MenuType.Product,
        image,
        price: '8,50',
      },
      {
        id: 'Batata Quente',
        title: 'Batata Quente',
        description: 'Chocolate Quente meio amargo - 230ml',
        type: MenuType.Product,
        image,
        price: 16,
      },
    ],
  },
];

const items: MenuItemType[] = [
  ...items_,
  { ...generic, id: '111', title: 'Promoções' },
  { ...generic, id: '222', title: 'Especialidades da casa' },
  { ...generic, id: '333', title: 'Molhos' },
];

export default () => {
  const indicatorsWidthsRef = useRef<number[]>([]);
  const categoryIndicatorRef = useRef<CategoryIndicatorHandler>(null);
  const groupedProductsListRef = useRef<GroupedProductListHandler>(null);
  const verticalScrollViewRef = useRef<ScrollView>(null);

  const searchContentAnimation = useSharedValue(0);
  const translationY = useSharedValue(0);
  const [searchTerm, setSearchTerm] = useState('');

  const cardTranslationX = useSharedValue(0);
  const indicatorTranslationX = useSharedValue(0);

  const [dark, setDark] = useState(false);
  useStatusBar(dark);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translationY.value = event.contentOffset.y;
  });

  const onEndDrag = () => {
    categoryIndicatorRef.current?.updateIndicatorTranslationX();

    verticalScrollViewRef.current?.scrollTo({
      y: TOTAL_HEADER_HEIGHT,
      animated: false,
    });
  };

  const scrollTo = (index: number) => {
    groupedProductsListRef.current?.scrollTo(index);
    verticalScrollViewRef.current?.scrollTo({
      y: TOTAL_HEADER_HEIGHT,
      animated: false,
    });
  };

  const onSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

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
        <MenuSearch
          verticalScrollViewRef={verticalScrollViewRef}
          translationY={translationY}
          searchContentAnimation={searchContentAnimation}
          setDark={setDark}
          onSearch={onSearch}
        />
      }
      searchContent={
        <SearchContent
          searchContentAnimation={searchContentAnimation}
          data={items[0].items}
          searchTerm={searchTerm}
        />
      }
      categoryIndicator={
        <CategoryIndicator
          data={items}
          cardTranslationX={cardTranslationX}
          indicatorTranslationX={indicatorTranslationX}
          translationY={translationY}
          indicatorsWidthsRef={indicatorsWidthsRef}
          ref={categoryIndicatorRef}
          scrollTo={scrollTo}
        />
      }
      content={
        <AnimatedScrollView
          ref={verticalScrollViewRef}
          overScrollMode="never"
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}>
          <FastImage
            source={require('../../../assets/background_menu.jpg')}
            resizeMode={FastImage.resizeMode.cover}
            style={[styles.image]}>
            <Text style={styles.title}>
              Encontre as melhores comidas de Setúbal
            </Text>
          </FastImage>

          <GroupedProductsList
            data={items}
            style={styles.contentContainer}
            onPress={x => console.log(x)}
            onEndDrag={() => onEndDrag()}
            cardTranslationX={cardTranslationX}
            indicatorTranslationX={indicatorTranslationX}
            ref={groupedProductsListRef}
          />
        </AnimatedScrollView>
      }
    />
  );
};
