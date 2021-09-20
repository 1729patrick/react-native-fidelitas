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
import { useBasket } from '~/contexts/Basket';
import useProducts from '~/api/useProducts';
import SplashScreen from '~/components/atoms/SplashScreen';

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

export type ProductType = {
  id: number;
  title: string;
  description: string;
  ingredients: string;
  allergens: string;
  price: number;
  type: 'starter' | 'main' | 'salad' | 'side' | 'drink' | 'dessert' | 'special';
  image: {
    url: string;
  };
};

export type CategoryType = {
  type: string;
  products: ProductType[];
};

export default () => {
  const { products, isLoading } = useProducts();
  const { basket, addToBasket } = useBasket();

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
    if (basket.length) {
      return StyleGuide.spacing + BASKET_HEIGHT + StyleGuide.spacing * 4;
    }

    return StyleGuide.spacing * 4;
  }, [basket.length]);

  const openBasket = () => {
    navigate('Basket');
  };

  const categories = useMemo(() => {
    const types = [
      'starter',
      'main',
      'dessert',
      'salad',
      'side',
      'drink',
      'special',
    ];

    return types
      .map(type => {
        return {
          type,
          products: products?.filter(product => product.type === type),
        };
      })
      .filter(item => item.products?.length) as CategoryType[];
  }, [products]);

  if (isLoading) {
    return <SplashScreen />;
  }
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
          searchTerm={searchTerm}
          basket={basket}
          addToBasket={addToBasket}
        />
      }
      categoryIndicator={
        <CategoryIndicator
          categories={categories}
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
            categories={categories}
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
