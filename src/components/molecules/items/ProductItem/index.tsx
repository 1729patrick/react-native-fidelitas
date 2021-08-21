import React, { useMemo, useState } from 'react';
import { Image } from 'react-native';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import FieldInformation from '~/components/atoms/FieldInformation';
import IncrementDecrement from '~/components/atoms/IncrementDecrement';
import { MenuItemType } from '~/screens/menu/Menu';

import StyleGuide from '~/util/StyleGuide';
import { CARD_HEIGHT } from './constants';
import styles from './styles';

type ProductProps = {
  addToBasket: (quantity: number) => void;
  quantity?: number;
  simpleContent?: boolean;
} & MenuItemType;

const ProductItem: React.FC<ProductProps> = ({
  title,
  description,
  price,
  image,
  addToBasket,
  quantity = 0,
  simpleContent = false,
}) => {
  const [footerHeight, setFooterHeight] = useState(0);

  const animation = useSharedValue(+simpleContent);

  const containerStyle = useAnimatedStyle(() => {
    const height = interpolate(
      animation.value,
      [0, 1],
      [CARD_HEIGHT, CARD_HEIGHT + footerHeight],
    );

    return {
      height,
    };
  }, [animation, footerHeight]);

  const onCollapse = () => {
    animation.value = withSpring(+!animation.value);
  };

  const total = useMemo(() => {
    return (price || 0) * quantity;
  }, [price, quantity]);

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Image source={image} style={styles.image} />

        <View style={styles.info}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {description}
          </Text>

          <Text style={styles.price}>{price} €</Text>
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={styles.footer}
        onLayout={({ nativeEvent }) =>
          setFooterHeight(nativeEvent.layout.height)
        }>
        {!simpleContent && (
          <>
            <FieldInformation
              title={'Ingredientes'}
              description="Arroz com vegetais"
              containerStyle={styles.fieldInformation}
            />
            <FieldInformation
              title={'Alérgenos'}
              description="Ovo e Lipídios"
              containerStyle={styles.fieldInformation}
            />
          </>
        )}

        <View
          style={[
            styles.basket,
            simpleContent ? styles.basketWithoutSpacing : {},
          ]}>
          <Text style={styles.total}>
            Total: <Text style={styles.totalValue}>{total} €</Text>
          </Text>

          <IncrementDecrement
            onChange={addToBasket}
            initialValue={quantity}
            value={quantity}
            size={28}
          />
        </View>
      </View>
    );
  };

  return (
    <Animated.View
      style={[styles.container, containerStyle]}
      // onLayout={e => console.log(e.nativeEvent.layout.height)}
    >
      <RectButton
        style={styles.item}
        onPress={onCollapse}
        activeOpacity={0.7}
        rippleColor={StyleGuide.palette.secondary}>
        {renderHeader()}
        {renderFooter()}
      </RectButton>
    </Animated.View>
  );
};

export default ProductItem;
