import React, { useRef, useState } from 'react';
import { Dimensions, StatusBar, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { TextInput } from 'react-native-gesture-handler';
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
} from 'react-native-reanimated';

import { ScrollView } from 'react-native-gesture-handler';

import Menu from '~/components/templates/Menu';
import { Item, MenuType } from '../Products';
import useStatusBar from '~/hooks/useStatusBar';
import StyleGuide from '~/util/StyleGuide';
import GroupedProductsList from '~/components/organisms/lists/GroupedProducts';
import { IMAGE_HEIGHT } from './constants';
import CategoryIndicator from '~/components/molecules/CategoryIndicator';

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

const image = require('../../../assets/background_home.jpg');

const { width } = Dimensions.get('window');

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
      price: 8,
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
};

const items_: Item[] = [
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
        price: 8,
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
        price: 8,
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
        price: 8,
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
        price: 8,
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

const items: Item[] = [
  ...items_,
  { ...generic, id: '111', title: 'Promoções' },
  { ...generic, id: '222', title: 'Especialidades da casa' },
  { ...generic, id: '333', title: 'Molhos' },
];

export default () => {
  const indicatorsWidthsRef = useRef<number[]>([]);
  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);
  const [dark, setDark] = useState(false);
  useStatusBar(dark);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translationY.value = event.contentOffset.y;
  });

  const searchStyles = useAnimatedStyle(() => {
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

    runOnJS(setDark)(translationY.value >= 34.99);

    return {
      top,
      backgroundColor,
    };
  }, [translationY]);

  const categoryIndicatorStyles = useAnimatedStyle(() => {
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
  }, []);

  const x = useSharedValue(0);

  const onEndDrag = () => {
    const indicatorWidths = indicatorsWidthsRef.current;

    const widthsAcc = indicatorWidths.map((_, index) =>
      indicatorWidths.slice(0, index).reduce((a, b) => a + b, 8),
    );
    const widths = indicatorWidths.map((_, index) => index * width);
    const left = interpolate(translationX.value, widths, widthsAcc);
    const width_ = interpolate(translationX.value, widths, indicatorWidths);
    const center = (width - width_) / 2;
    if (!indicatorWidths.length) {
      return {};
    }
    const translateX = interpolate(
      -(left - center),
      [width - 763, 0],
      [width - 763, 0],
      Extrapolate.CLAMP,
    );
    x.value = translateX - 8;
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
      categoryIndicator={
        <CategoryIndicator
          data={items}
          translationX={translationX}
          x={x}
          categoryIndicatorStyles={categoryIndicatorStyles}
          indicatorsWidthsRef={indicatorsWidthsRef}
        />
      }
      content={
        <AnimatedScrollView
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
            translationX={translationX}
            x={x}
          />
        </AnimatedScrollView>
      }
    />
  );
};
