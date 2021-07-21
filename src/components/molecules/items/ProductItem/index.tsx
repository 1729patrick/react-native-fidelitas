import React from 'react';
import { Image } from 'react-native';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import StyleGuide from '~/util/StyleGuide';
import styles from './styles';

export type ProductType = {
  id: string;
  title: string;
  type: 'category' | 'product';
  description?: string;
  image: any;
  price?: number;
};

type ProductProps = {
  onPress: (args: Partial<ProductType>) => void;
} & ProductType;

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
