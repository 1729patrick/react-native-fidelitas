import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { RectButton } from 'react-native-gesture-handler';
import { Item } from '../../../screens/Menu';
import StyleGuide from '../../../util/StyleGuide';
import styles from './styles';

type MenuProps = {
  openCategory: (args: Item) => void;
  openProduct: (args: Item) => void;
  items: Item[];
};

const Menu: React.FC<MenuProps> = ({ items, openCategory, openProduct }) => {
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      overScrollMode="never">
      {items.map(item => {
        if (item.type === 'category') {
          return (
            <View style={styles.category} key={item.title}>
              <TouchableOpacity
                onPress={() => openCategory(item)}
                activeOpacity={0.7}>
                <FastImage source={item.image} style={styles.image} />

                <Text style={styles.categoryTitle}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          );
        }

        if (item.type === 'product') {
          return (
            <RectButton
              style={styles.product}
              key={item.title}
              onPress={() => openProduct(item)}
              activeOpacity={0.7}
              rippleColor={StyleGuide.palette.secondary}>
              <FastImage source={item.image} style={styles.image1} />

              <View style={styles.productInfo}>
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productDescription}>
                  {item.description}
                </Text>
                <Text style={styles.productPrice}>€ {item.price}</Text>
              </View>
            </RectButton>
          );
        }
      })}
    </ScrollView>
  );
};

export default Menu;
