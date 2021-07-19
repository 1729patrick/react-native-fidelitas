import React from 'react';
import { Image, Text, View } from 'react-native';
import { Item } from '../../../screens/Products';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import StyleGuide from '../../../util/StyleGuide';

type MenuProps = {
  items: Item[];
};

const Products: React.FC<MenuProps> = ({ items }) => {
  return (
    <View style={styles.container}>
      {items.map(item => (
        <View style={styles.border} key={item.title}>
          <RectButton
            style={styles.product}
            key={item.title}
            onPress={() => {}}
            activeOpacity={0.7}
            rippleColor={StyleGuide.palette.secondary}>
            <Image source={item.image} style={styles.image1} />

            <View style={styles.productInfo}>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productDescription}>{item.description}</Text>
              <Text style={styles.productPrice}>€ {item.price}</Text>
            </View>
          </RectButton>
        </View>
      ))}
    </View>
  );
};

export default Products;
