import React from 'react';
import { Image } from 'react-native';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { MenuItemType } from '~/screens/menu/Menu';

import StyleGuide from '~/util/StyleGuide';
import styles from './styles';

type ProductProps = {
  onPress: (args: Partial<MenuItemType>) => void;
} & MenuItemType;

const ProductItem: React.FC<ProductProps> = ({
  title,
  description,
  price,
  image,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <RectButton
        style={styles.content}
        onPress={() => onPress({ title })}
        activeOpacity={0.7}
        rippleColor={StyleGuide.palette.secondary}>
        <Image source={image} style={styles.image} />

        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.price}>€ {price}</Text>
        </View>
      </RectButton>
    </View>
  );
};

export default ProductItem;
