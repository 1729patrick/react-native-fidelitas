import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CategoryItem from '~/components/molecules/items/CategoryItem';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

import List from '../../../atoms/List';
import StyleGuide from '~/util/StyleGuide';
import RoundButton from '~/components/atoms/buttons/RoundButton';
import { MenuItemType } from '~/screens/menu/Menu';

type MenuListProps = {
  onPress: (args: MenuItemType) => void;
  data: MenuItemType[];
};

const Categories: React.FC<MenuListProps> = ({ onPress, data }) => {
  return (
    <>
      {data.map(category => (
        <View key={category.title}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => onPress(category)}>
              <Text style={styles.title}>{category.title}</Text>
            </TouchableOpacity>

            <RoundButton
              Icon={Icon}
              name={'navigate-next'}
              size={25}
              color={StyleGuide.palette.primary}
              onPress={() => onPress(category)}
            />
          </View>
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
