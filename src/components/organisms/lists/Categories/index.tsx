import React from 'react';
import { AlertType, View, Text } from 'react-native';
import CategoryItem, {
  CategoryType,
} from '~/components/molecules/items/CategoryItem';
import styles from './styles';

import List from '../../../atoms/List';

type MenuListProps = {
  onPress: (args: CategoryType) => void;
  data: CategoryType[];
};

const Categories: React.FC<MenuListProps> = ({ onPress, data }) => {
  return (
    <>
      {data.map(category => (
        <View key={category.title}>
          <Text style={styles.title}>{category.title}</Text>
          <List
            item={CategoryItem}
            data={category.items || []}
            style={styles.contentContainer}
            onPress={onPress}
            horizontal
          />
        </View>
      ))}
    </>
  );
};

export default Categories;
