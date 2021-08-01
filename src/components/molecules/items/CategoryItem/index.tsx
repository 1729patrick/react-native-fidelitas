import React from 'react';
import { Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MenuItemType } from '~/screens/menu/Menu';

import styles from './styles';

type CategoryProps = {
  onPress: (args: MenuItemType) => void;
} & MenuItemType;

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
