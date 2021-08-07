import React, { useMemo, useRef, useState } from 'react';
import { StatusBar, Text } from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './styles';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import { ScrollView } from 'react-native-gesture-handler';

import Menu from '~/components/templates/Menu';
import useStatusBar from '~/hooks/useStatusBar';
import GroupedProductsList, {
  GroupedProductListHandler,
} from '~/components/organisms/lists/GroupedProducts';
import { BASKET_HEIGHT, TOTAL_HEADER_HEIGHT } from './constants';
import CategoryIndicator, {
  CategoryIndicatorHandler,
} from '~/components/molecules/CategoryIndicator';
import MenuSearch from '~/components/organisms/MenuSearch';
import SearchContent from '~/components/organisms/SearchContent';

import StyleGuide from '~/util/StyleGuide';
import BasketButton from '~/components/molecules/actions/BasketButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

const image = require('../../../assets/background_home.jpg');

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
  price?: number;
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
      price: 2,
    },
    {
      id: 'Chocolate Quente',
      title: 'Chocolate Quente',
      description: 'Chocolate Quente meio amargo - 230ml',
      type: MenuType.Product,
      image,
      price: 4,
    },
    {
      id: 'Pão Clássico',
      title: 'Pão Clássico',
      description: 'Camomila, Capim Limão, Hortelã',
      type: MenuType.Product,
      image,
      price: 8.5,
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
        price: 2,
      },
      {
        id: 'Chocolate Quente',
        title: 'Chocolate Quente',
        description: 'Chocolate Quente meio amargo - 230ml',
        type: MenuType.Product,
        image,
        price: 4,
      },
      {
        id: 'Pão Clássico',
        title: 'Pão Clássico',
        description: 'Camomila, Capim Limão, Hortelã',
        type: MenuType.Product,
        image,
        price: 8.5,
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
        price: 2,
      },
      {
        id: 'Chocolate Quente',
        title: 'Chocolate Quente',
        description: 'Chocolate Quente meio amargo - 230ml',
        type: MenuType.Product,
        image,
        price: 4,
      },
      {
        id: 'Pão Clássico',
        title: 'Pão Clássico',
        description: 'Camomila, Capim Limão, Hortelã',
        type: MenuType.Product,
        image,
        price: 8.5,
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
        price: 2,
      },
      {
        id: 'Chocolate Quente',
        title: 'Chocolate Quente',
        description: 'Chocolate Quente meio amargo - 230ml',
        type: MenuType.Product,
        image,
        price: 4,
      },
      {
        id: 'Pão Clássico',
        title: 'Pão Clássico',
        description: 'Camomila, Capim Limão, Hortelã',
        type: MenuType.Product,
        image,
        price: 8.5,
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
        price: 2,
      },
      {
        id: 'Chocolate Quente',
        title: 'Chocolate Quente',
        description: 'Chocolate',
        type: MenuType.Product,
        image,
        price: 4,
      },
      {
        id: 'Pão Clássico',
        title: 'Pão Clássico',
        description: 'Camomila, Capim Limão, Hortelã',
        type: MenuType.Product,
        image,
        price: 8.5,
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

export type BasketType = {
  product: MenuItemType;
  quantity: number;
}[];

export default () => {
  const [basket, setBasket] = useState<BasketType>([]);

  const indicatorsWidthsRef = useRef<number[]>([]);
  const categoryIndicatorRef = useRef<CategoryIndicatorHandler>(null);
  const groupedProductsListRef = useRef<GroupedProductListHandler>(null);
  const verticalScrollViewRef = useRef<ScrollView>(null);

  const searchContentAnimation = useSharedValue(0);
  const translationY = useSharedValue(0);
  const [searchTerm, setSearchTerm] = useState('');

  const cardTranslationX = useSharedValue(0);
  const indicatorTranslationX = useSharedValue(0);

  const { navigate } = useNavigation<StackNavigationProp<any>>();

  const [dark, setDark] = useState(false);
  useStatusBar(dark);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translationY.value = event.contentOffset.y;
  });

  const onEndDrag = () => {
    categoryIndicatorRef.current?.updateIndicatorTranslationX();

    if (translationY.value < TOTAL_HEADER_HEIGHT) {
      return;
    }

    verticalScrollViewRef.current?.scrollTo({
      y: TOTAL_HEADER_HEIGHT,
      animated: false,
    });
  };

  const scrollTo = (index: number) => {
    groupedProductsListRef.current?.scrollTo(index);
  };

  const onSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const paddingBottom = useMemo(() => {
    const basketLength = 1;

    if (basketLength) {
      return StyleGuide.spacing + BASKET_HEIGHT + StyleGuide.spacing * 4;
    }

    return StyleGuide.spacing * 4;
  }, []);

  const addToBasket = (quantity: number, product: MenuItemType) => {
    setBasket(basket => {
      const index = basket.findIndex(({ product: p }) => p.id === product.id);

      if (index === -1) {
        return [...basket, { quantity, product }];
      }

      const newBasket = [...basket];
      newBasket.splice(index, 1, { product, quantity });

      return newBasket;
    });
  };

  const openBasket = () => {
    navigate('Basket', { initialBasket: basket });
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
          basket={basket}
          addToBasket={addToBasket}
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
            style={{ ...styles.contentContainer, paddingBottom }}
            addToBasket={addToBasket}
            onEndDrag={() => onEndDrag()}
            cardTranslationX={cardTranslationX}
            indicatorTranslationX={indicatorTranslationX}
            ref={groupedProductsListRef}
            basket={basket}
          />
        </AnimatedScrollView>
      }
      basketButton={
        <BasketButton
          searchContentAnimation={searchContentAnimation}
          basket={basket}
          openBasket={openBasket}
        />
      }
    />
  );
};
