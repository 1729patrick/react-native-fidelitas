import React from 'react';
import { Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

export type CategoryType = {
  id: string;
  title: string;
  type: 'category' | 'product';
  description?: string;
  image: any;
  price?: number;
  items?: CategoryType[];
};

type CategoryProps = {
  onPress: (args: CategoryType) => void;
} & CategoryType;

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
