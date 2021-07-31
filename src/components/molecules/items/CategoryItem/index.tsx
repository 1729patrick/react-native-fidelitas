import React from 'react';
import { Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Item } from '~/screens/menu/Products';

import styles from './styles';

type CategoryProps = {
  onPress: (args: Item) => void;
} & Item;

const CategoryItem: React.FC<CategoryProps> = ({
  id,
  title,
  image,
  items,
  type,
  description,
  price,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        onPress({ id, title, image, items, type, description, price })
      }
      activeOpacity={0.7}
      style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
