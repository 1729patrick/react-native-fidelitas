import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Dimensions, View, Text } from 'react-native';
import { StyleProp, ViewStyle } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import Loader from '~/components/atoms/Loader';
import ProductItem from '~/components/molecules/items/ProductItem';
import { BasketType, MenuItemType } from '~/screens/menu/Menu';

import styles from './styles';

export type GroupedProductListHandler = {
  scrollTo: (index: number) => void;
};

type GroupedProductsListProps = {
  cardTranslationX: Animated.SharedValue<number>;
  indicatorTranslationX: Animated.SharedValue<number>;
  style?: StyleProp<ViewStyle>;
  data: MenuItemType[];
  onEndDrag: () => void;
  addToBasket: (quantity: number, product: MenuItemType) => void;
  basket: BasketType;
};

const { width } = Dimensions.get('window');

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const GroupedProductsList: React.ForwardRefRenderFunction<
  GroupedProductListHandler,
  GroupedProductsListProps
> = (
  {
    cardTranslationX,
    style,
    addToBasket,
    data,
    onEndDrag,
    indicatorTranslationX,
    basket,
  },
  ref,
) => {
  const [activePage, setActivePage] = useState(0);
  const scrollViewRef = useRef<FlatList<MenuItemType>>(null);

  const scrollHandler = useAnimatedScrollHandler(
    {
      onScroll: ({ contentOffset }) => {
        cardTranslationX.value = contentOffset.x;

        if (!(contentOffset.x % width)) {
          runOnJS(setActivePage)(contentOffset.x / width);
          runOnJS(onEndDrag)();
        }
      },
    },
    [indicatorTranslationX.value],
  );

  const scrollTo = useCallback((index: number) => {
    scrollViewRef.current?.scrollToOffset({ offset: width * index });
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      scrollTo,
    }),
    [scrollTo],
  );

  const getQuantity = useCallback(
    (id: string) => {
      const { quantity } = basket.find(({ product }) => product.id === id) || {
        quantity: 0,
      };

      return quantity;
    },
    [basket],
  );

  const renderItem = useCallback(
    (category: MenuItemType, index: number) => {
      return (
        <View style={[{ width }]} key={category.id}>
          {activePage === index ? (
            <View style={[styles.group]}>
              <Text style={styles.title} numberOfLines={1}>
                {category.title}
              </Text>
              {(category.items || []).map(product => (
                <ProductItem
                  {...product}
                  key={product.id}
                  addToBasket={quantity => addToBasket(quantity, product)}
                  quantity={getQuantity(product.id)}
                />
              ))}
            </View>
          ) : (
            <View style={styles.loader}>
              <Loader />
            </View>
          )}
        </View>
      );
    },
    [activePage, addToBasket, getQuantity],
  );

  return (
    <AnimatedFlatList
      ref={scrollViewRef}
      onScroll={scrollHandler}
      horizontal
      snapToInterval={width}
      disableIntervalMomentum
      scrollEventThrottle={16}
      contentContainerStyle={[styles.contentContainer, style]}
      overScrollMode="never"
      data={data}
      initialNumToRender={1}
      renderItem={({ item, index }) => renderItem(item, index)}
    />
  );
};

export default forwardRef(GroupedProductsList);
