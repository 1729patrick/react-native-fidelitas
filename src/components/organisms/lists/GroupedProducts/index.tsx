import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Dimensions, Text, View } from 'react-native';
import { StyleProp, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import Loader from '~/components/atoms/Loader';
import ProductItem from '~/components/molecules/items/ProductItem';
import { MenuItemType } from '~/screens/menu/Menu';

import styles from './styles';

export type GroupedProductListHandler = {
  scrollTo: (index: number) => void;
};

type GroupedProductsListProps = {
  cardTranslationX: Animated.SharedValue<number>;
  indicatorTranslationX: Animated.SharedValue<number>;
  style?: StyleProp<ViewStyle>;
  onPress?: (args: MenuItemType) => void;
  data: MenuItemType[];
  onEndDrag: () => void;
};

const { width } = Dimensions.get('window');

const GroupedProductsList: React.ForwardRefRenderFunction<
  GroupedProductListHandler,
  GroupedProductsListProps
> = (
  { cardTranslationX, style, onPress, data, onEndDrag, indicatorTranslationX },
  ref,
) => {
  const [activePage, setActivePage] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const scrollHandler = useAnimatedScrollHandler(
    {
      onScroll: ({ contentOffset }) => {
        cardTranslationX.value = contentOffset.x;
      },
      onMomentumEnd: ({ contentOffset }) => {
        runOnJS(onEndDrag)();
        runOnJS(setActivePage)(contentOffset.x / width);
      },
    },
    [indicatorTranslationX.value],
  );

  const scrollTo = useCallback((index: number) => {
    scrollViewRef.current?.scrollTo({ x: width * index });
    setActivePage(index);
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      scrollTo,
    }),
    [scrollTo],
  );

  return (
    <Animated.ScrollView
      ref={scrollViewRef}
      onScroll={scrollHandler}
      horizontal
      snapToInterval={width}
      disableIntervalMomentum
      scrollEventThrottle={16}
      contentContainerStyle={[styles.contentContainer, style]}
      overScrollMode="never">
      {data.map((category, index) => (
        <View style={[{ width }]} key={category.id}>
          {activePage === index ? (
            <View style={[styles.group]}>
              <Text style={styles.title}>{category.title}</Text>
              {(category.items || []).map(product => (
                <ProductItem
                  {...product}
                  key={product.id}
                  onPress={() => onPress?.(product)}
                />
              ))}
            </View>
          ) : (
            <View style={styles.loader}>
              <Loader />
            </View>
          )}
        </View>
      ))}
    </Animated.ScrollView>
  );
};

export default forwardRef(GroupedProductsList);
