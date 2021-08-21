import React, { useMemo } from 'react';
import Header from '~/components/atoms/Header';
import styles from './styles';
import ProductsList from '~/components/organisms/lists/Products';
import useHideTabBar from '~/hooks/useHideTabBar';
import useStatusBar from '~/hooks/useStatusBar';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import StyleGuide from '~/util/StyleGuide';
import { useBasket } from '~/contexts/Basket';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const Basket = () => {
  const { basket, addToBasket, price } = useBasket();
  const { navigate } = useNavigation<StackNavigationProp<any>>();

  useStatusBar(true);
  useHideTabBar();

  const data = useMemo(() => {
    return basket.map(({ product }) => product);
  }, [basket]);

  const onConfirm = () => {
    navigate('Checkout');
  };

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
          rippleColor={StyleGuide.palette.secondary}
          onPress={onConfirm}>
          <Text style={styles.checkoutTitle}>
            Confirmar ({(price * 0.9).toFixed(2)} €)
          </Text>
        </RectButton>
      </View>
    </View>
  );
};

export default Basket;
