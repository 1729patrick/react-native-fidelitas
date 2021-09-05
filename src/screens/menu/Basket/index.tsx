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
import Currency from '~/components/atoms/Currency';

const Basket = () => {
  const { basket, addToBasket, price } = useBasket();
  const { navigate } = useNavigation<StackNavigationProp<any>>();

  useStatusBar(true);
  useHideTabBar();

  const data = useMemo(() => {
    return basket.map(({ product }) => product);
  }, [basket]);

  const onConfirm = () => {
    navigate('Checkout', { editable: true });
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
              <Currency price={price} style={styles.subtotal} />
            </View>

            <View style={styles.line}>
              <Text style={styles.subtotal}>Desconto de 10%</Text>
              <Currency price={price * 0.1} style={styles.subtotal} />
            </View>

            <View style={styles.line}>
              <Text style={styles.total}>Total</Text>
              <Currency price={price * 0.9} style={styles.total} />
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
            Confirmar (
            <Currency price={price * 0.9} style={styles.checkoutTitle} />)
          </Text>
        </RectButton>
      </View>
    </View>
  );
};

export default Basket;
