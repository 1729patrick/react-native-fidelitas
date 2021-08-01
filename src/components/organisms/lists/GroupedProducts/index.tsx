import React from 'react';
import { Dimensions, View } from 'react-native';
import { StyleProp, Text, ViewStyle } from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import ProductItem from '~/components/molecules/items/ProductItem';
import { Item } from '~/screens/menu/Products';

import styles from './styles';

type GroupedProductsListProps = {
  cardTranslationX: Animated.SharedValue<number>;
  indicatorTranslationX: Animated.SharedValue<number>;
  style?: StyleProp<ViewStyle>;
  onPress?: (args: Item) => void;
  data: Item[];
  onEndDrag: () => void;
};

const { width } = Dimensions.get('window');

const GroupedProductsList: React.FC<GroupedProductsListProps> = ({
  cardTranslationX,
  style,
  onPress,
  data,
  onEndDrag,
  indicatorTranslationX,
}) => {
  const scrollHandler = useAnimatedScrollHandler(
    {
      onScroll: event => {
        cardTranslationX.value = event.contentOffset.x;
      },
      onMomentumEnd: () => {
        runOnJS(onEndDrag)();
      },
    },
    [indicatorTranslationX.value],
  );

  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      horizontal
      snapToInterval={width}
      disableIntervalMomentum
      scrollEventThrottle={16}
      contentContainerStyle={[styles.contentContainer, style]}
      overScrollMode="never">
      {data.map(category => (
        <View style={[styles.group, { width }]} key={category.id}>
          <Text style={styles.title}>{category.title}</Text>
          {(category.items || []).map(product => (
            <ProductItem
              {...product}
              key={product.id}
              onPress={() => onPress?.(product)}
            />
          ))}
        </View>
      ))}
    </Animated.ScrollView>
  );
};

export default GroupedProductsList;
