import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import Header from '~/components/atoms/Header';
import styles from './styles';
import ProductsList from '~/components/organisms/lists/Products';
import useHideTabBar from '~/hooks/useHideTabBar';
import useStatusBar from '~/hooks/useStatusBar';
import { BasketType, MenuItemType } from '../Menu';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import StyleGuide from '~/util/StyleGuide';

type RouteProps = RouteProp<
  {
    Basket: {
      initialBasket: BasketType;
      data: MenuItemType[];
    };
  },
  'Basket'
>;

const Basket = () => {
  const { params } = useRoute<RouteProps>();
  const [basket, setBasket] = useState<BasketType>(params.initialBasket);

  useStatusBar(true);
  useHideTabBar();

  const addToBasket = (quantity: number, product: MenuItemType) => {
    setBasket(basket => {
      const index = basket.findIndex(({ product: p }) => p.id === product.id);

      if (index === -1) {
        return [...basket, { quantity, product }];
      }

      const newBasket = [...basket];
      newBasket.splice(index, 1, { product, quantity });

      return newBasket;
    });
  };

  const data = useMemo(() => {
    return params.initialBasket.map(({ product }) => product);
  }, [params.initialBasket]);

  const price = useMemo(() => {
    return basket.reduce(
      (acc, { quantity, product }) => (product.price || 0) * quantity + acc,
      0,
    );
  }, [basket]);

  return (
    <View>
      <Header title="Cesto" close />

      <ProductsList
        addToBasket={addToBasket}
        data={data}
        basket={basket}
        style={styles.contentContainer}
        simpleContent={true}
        footer={
          <View style={styles.totalContainer}>
            <View style={styles.line}>
              <Text style={styles.subtotal}>Subtotal</Text>
              <Text style={styles.subtotal}>{price} €</Text>
            </View>

            <View style={styles.line}>
              <Text style={styles.subtotal}>Desconto de 10%</Text>
              <Text style={styles.subtotal}>{(price * 0.1).toFixed(2)} €</Text>
            </View>

            <View style={styles.line}>
              <Text style={styles.total}>Total</Text>
              <Text style={styles.total}>{(price * 0.9).toFixed(2)} €</Text>
            </View>
          </View>
        }
      />

      <View style={styles.checkout}>
        <RectButton
          style={styles.checkoutButton}
          rippleColor={StyleGuide.palette.secondary}>
          <Text style={styles.checkoutTitle}>
            Confirmar ({(price * 0.9).toFixed(2)} €)
          </Text>
        </RectButton>
      </View>
    </View>
  );
};

export default Basket;
