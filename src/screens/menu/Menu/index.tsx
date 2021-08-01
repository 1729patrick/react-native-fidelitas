import React, { useRef, useState } from 'react';
import { Dimensions, StatusBar, Text, View, TextInput } from 'react-native';
import FastImage from 'react-native-fast-image';

import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  interpolateColor,
  runOnJS,
  withTiming,
} from 'react-native-reanimated';

import { ScrollView } from 'react-native-gesture-handler';

import Menu from '~/components/templates/Menu';
import useStatusBar from '~/hooks/useStatusBar';
import StyleGuide from '~/util/StyleGuide';
import GroupedProductsList, {
  GroupedProductListHandler,
} from '~/components/organisms/lists/GroupedProducts';
import { IMAGE_HEIGHT, SEARCH_WIDTH, TOTAL_HEADER_HEIGHT } from './constants';
import CategoryIndicator, {
  CategoryIndicatorHandler,
} from '~/components/molecules/CategoryIndicator';
import RoundButton from '~/components/atoms/buttons/RoundButton';
import useHideTabBar from '~/hooks/useHideTabBar';

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

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export default () => {
  const indicatorsWidthsRef = useRef<number[]>([]);
  const translationYWhenSearchOpenRef = useRef<number>(0);
  const searchRef = useRef<TextInput>(null);
  const categoryIndicatorRef = useRef<CategoryIndicatorHandler>(null);
  const groupedProductsListRef = useRef<GroupedProductListHandler>(null);
  const verticalScrollViewRef = useRef<ScrollView>(null);
  const { hideTabBar, showTabBar } = useHideTabBar(false);

  const searchContentAnimation = useSharedValue(0);
  const translationY = useSharedValue(0);

  const cardTranslationX = useSharedValue(0);
  const indicatorTranslationX = useSharedValue(0);

  const [dark, setDark] = useState(false);
  useStatusBar(dark);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translationY.value = event.contentOffset.y;
  });

  const searchStyle = useAnimatedStyle(() => {
    const top = interpolate(
      translationY.value,
      [0, 40],
      [40, 0],
      Extrapolate.CLAMP,
    );

    const backgroundColor = interpolateColor(
      translationY.value,
      [34.99, 35],
      ['transparent', 'white'],
    );

    const borderColor = interpolateColor(
      searchContentAnimation.value,
      [0.99, 1],
      ['transparent', StyleGuide.palette.border],
    );

    runOnJS(setDark)(translationY.value >= 34.99);

    return {
      top,
      backgroundColor,
      borderColor,
    };
  }, [translationY.value, searchContentAnimation.value]);

  const searchIconStyle = useAnimatedStyle(() => {
    return {
      opacity: 1 - searchContentAnimation.value,
    };
  }, [translationY.value, searchContentAnimation.value]);

  const searchBackStyle = useAnimatedStyle(() => {
    return {
      opacity: searchContentAnimation.value,
    };
  }, [translationY.value, searchContentAnimation.value]);

  const categoryIndicatorStyle = useAnimatedStyle(() => {
    const top = interpolate(
      translationY.value,
      [0, IMAGE_HEIGHT - 93],
      [IMAGE_HEIGHT, 93],
      Extrapolate.CLAMP,
    );

    const borderColor = interpolateColor(
      translationY.value,
      [IMAGE_HEIGHT - 93.1, IMAGE_HEIGHT - 93],
      ['transparent', StyleGuide.palette.border],
    );

    const backgroundColor = interpolateColor(
      translationY.value,
      [IMAGE_HEIGHT - 93.1, IMAGE_HEIGHT - 93],
      ['transparent', 'white'],
    );

    return { top, borderColor, backgroundColor };
  }, [translationY.value]);

  const searchContentStyle = useAnimatedStyle(() => {
    const height_ = interpolate(
      searchContentAnimation.value,
      [0, 1],
      [0, height],
    );

    return { height: height_ };
  }, [searchContentAnimation.value]);

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

  const onSearchFocus = () => {
    if (translationY.value < 40) {
      verticalScrollViewRef.current?.scrollTo({
        y: 40,
      });
    }

    translationYWhenSearchOpenRef.current = translationY.value;
    searchContentAnimation.value = withTiming(1);

    StatusBar.setBarStyle('dark-content');

    hideTabBar();
  };

  const onSearchBlur = () => {
    searchContentAnimation.value = withTiming(0);

    verticalScrollViewRef.current?.scrollTo({
      y: translationYWhenSearchOpenRef.current,
    });

    searchRef.current?.blur();

    if (translationYWhenSearchOpenRef.current <= 34.99) {
      StatusBar.setBarStyle('light-content');
    }

    showTabBar();
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
        <Animated.View style={[styles.searchContainer, searchStyle]}>
          <View style={[styles.search]}>
            <View style={styles.iconContainer}>
              <AnimatedIcon
                name="search1"
                size={23}
                color={StyleGuide.palette.app}
                style={[styles.icon, searchIconStyle]}
              />

              <Animated.View style={[styles.icon, searchBackStyle]}>
                <RoundButton
                  onPress={onSearchBlur}
                  name={'arrowleft'}
                  size={23}
                  Icon={AnimatedIcon}
                  color={StyleGuide.palette.primary}
                  rippleColor={'transparent'}
                />
              </Animated.View>
            </View>
            <TextInput
              placeholder={'O que você quer comer?'}
              placeholderTextColor={StyleGuide.palette.secondary}
              style={styles.input}
              onFocus={onSearchFocus}
              ref={searchRef}
            />
          </View>
        </Animated.View>
      }
      searchContent={
        <Animated.View style={[styles.searchContent, searchContentStyle]}>
          <Text style={{ marginTop: 200 }}>carr</Text>
        </Animated.View>
      }
      categoryIndicator={
        <CategoryIndicator
          data={items}
          cardTranslationX={cardTranslationX}
          indicatorTranslationX={indicatorTranslationX}
          categoryIndicatorStyle={categoryIndicatorStyle}
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
