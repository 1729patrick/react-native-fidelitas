import React from 'react';
import { View } from 'react-native';
import { StyleProp, Text, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ProductItem from '~/components/molecules/items/ProductItem';
import { Item } from '~/screens/menu/Products';

import styles from './styles';

type GroupedProductsListProps = {
  style?: StyleProp<ViewStyle>;
  onPress?: (args: Item) => void;
  data: Item[];
};

const GroupedProductsList: React.FC<GroupedProductsListProps> = ({
  style,
  onPress,
  data,
}) => {
  return (
    <ScrollView
      contentContainerStyle={[styles.contentContainer, style]}
      overScrollMode="never">
      {data.map(category => (
        <View style={styles.group} key={category.id}>
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
    </ScrollView>
  );
};

export default GroupedProductsList;
