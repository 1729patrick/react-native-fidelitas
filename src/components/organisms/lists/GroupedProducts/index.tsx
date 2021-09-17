import React, {
  forwardRef,
  memo,
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
import { BasketType } from '~/contexts/Basket';
import { translate, TranslationKeyType } from '~/i18n';
import { CategoryType, ProductType } from '~/screens/menu/Menu';

import styles from './styles';

export type GroupedProductListHandler = {
  scrollTo: (index: number) => void;
};

type GroupedProductsListProps = {
  cardTranslationX: Animated.SharedValue<number>;
  indicatorTranslationX: Animated.SharedValue<number>;
  style?: StyleProp<ViewStyle>;
  categories: CategoryType[];
  onEndDrag: () => void;
  addToBasket: (quantity: number, product: ProductType) => void;
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
    categories,
    onEndDrag,
    indicatorTranslationX,
    basket,
  },
  ref,
) => {
  const [activePage, setActivePage] = useState(0);
  const scrollViewRef = useRef<FlatList<CategoryType>>(null);

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
    (id: number) => {
      const { quantity } = basket.find(({ product }) => product.id === id) || {
        quantity: 0,
      };

      return quantity;
    },
    [basket],
  );

  const renderItem = useCallback(
    (category: CategoryType, index: number) => {
      return (
        <View style={[{ width }]}>
          {activePage === index ? (
            <View style={[styles.group]}>
              <Text style={styles.title} numberOfLines={1}>
                {translate(category.type as TranslationKeyType)}
              </Text>
              {(category.products || []).map(product => (
                <ProductItem
                  {...product}
                  key={product.id}
                  addToBasket={(quantity: number) =>
                    addToBasket(quantity, product)
                  }
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
      //@ts-ignore
      ref={scrollViewRef}
      onScroll={scrollHandler}
      horizontal
      snapToInterval={width}
      disableIntervalMomentum
      scrollEventThrottle={16}
      contentContainerStyle={[styles.contentContainer, style]}
      overScrollMode="never"
      data={categories}
      initialNumToRender={1}
      keyExtractor={item => item.type}
      renderItem={({ item, index }) => renderItem(item, index)}
    />
  );
};

export default memo(forwardRef(GroupedProductsList));
