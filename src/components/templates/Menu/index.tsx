import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { Item } from '../../../screens/Menu';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

type MenuProps = {
  openProducts: (args: Item) => void;
  items: Item[];
};

const Menu: React.FC<MenuProps> = ({ items, openProducts }) => {
  return (
    <>
      {items.map(item => (
        <View key={item.title}>
          <Text style={styles.title}>{item.title}</Text>
          <AnimatedScrollView
            overScrollMode="never"
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={styles.contentContainer}>
            <View style={styles.categories}>
              {item.items?.map(category => (
                <TouchableOpacity
                  onPress={() => openProducts(category)}
                  activeOpacity={0.7}
                  style={styles.category}>
                  <Image source={category.image} style={styles.categoryImage} />
                  <Text style={styles.categoryTitle}>{category.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </AnimatedScrollView>
        </View>
      ))}
    </>
  );
};

export default Menu;
