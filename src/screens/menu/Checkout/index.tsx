import React, { useMemo } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import Header from '~/components/atoms/Header';
import useHideTabBar from '~/hooks/useHideTabBar';
import useStatusBar from '~/hooks/useStatusBar';
import styles from './styles';
import IonIcon from 'react-native-vector-icons/Ionicons';

import StyleGuide from '~/util/StyleGuide';
import Checkbox from '~/components/atoms/Checkbox';
import { RectButton } from 'react-native-gesture-handler';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useBasket } from '~/contexts/Basket';
import Currency from '~/components/atoms/Currency';

type RootStackParamList = {
  Checkout: {
    editable?: boolean;
  };
};

type RouteProps = RouteProp<RootStackParamList, 'Checkout'>;

const Checkout = () => {
  const { params } = useRoute<RouteProps>();

  const { clearBasket, basket, price } = useBasket();
  const { popToTop } = useNavigation<StackNavigationProp<any>>();
  useStatusBar(true);
  useHideTabBar();

  const onComplete = () => {
    clearBasket();
    popToTop();
  };

  const paddingBottom = useMemo(
    () => (params.editable ? 55 : 0),
    [params.editable],
  );

  const quantity = useMemo(() => {
    return basket.reduce((acc, { quantity }) => quantity + acc, 0);
  }, [basket]);

  return (
    <>
      <Header title="Confirmar" close />
      <ScrollView contentContainerStyle={[styles.container, { paddingBottom }]}>
        <View style={styles.card}>
          <Text style={styles.title}>Forma de entrega</Text>
          <View style={styles.deliveryType}>
            <Text style={styles.description}>Delivery</Text>
            <Checkbox onChange={() => {}} checked={true} />
          </View>
          {params.editable && (
            <>
              <View style={styles.deliveryType}>
                <Text style={styles.description}>Take Away</Text>
                <Checkbox onChange={() => {}} checked={false} />
              </View>
              <View style={styles.deliveryType}>
                <Text style={styles.description}>Na Mesa</Text>
                <Checkbox onChange={() => {}} checked={false} />
              </View>
            </>
          )}
        </View>

        <View style={styles.card}>
          <View style={styles.line}>
            <Text style={styles.title}>Morada de entrega</Text>
            {params.editable && <Text style={styles.action}>Alterar</Text>}
          </View>
          <View style={styles.addressLine}>
            <IonIcon
              name="ios-location-sharp"
              size={18}
              color={StyleGuide.palette.secondary}
              style={styles.icon}
            />
            <Text style={styles.description}>
              Avenida Roque Ribeiro, 2910-278
            </Text>
          </View>

          <View style={styles.addressLine}>
            <IonIcon
              name="ios-person-sharp"
              size={18}
              color={StyleGuide.palette.secondary}
              style={styles.icon}
            />
            <Text style={styles.description}>Cristiano Rolando</Text>
          </View>

          <View style={styles.addressLine}>
            <IonIcon
              name="call"
              size={18}
              color={StyleGuide.palette.secondary}
              style={styles.icon}
            />
            <Text style={styles.description}>+351 92140176243</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Detalhes do pedido</Text>

          <View style={[styles.basketLine]}>
            <Text style={styles.basketTitle}>Produtos</Text>
            <View style={styles.items}>
              <Text style={styles.basketDescription}>
                {quantity}
                {quantity > 1 ? ' itens' : ' item'}
              </Text>
              <IonIcon
                name="ios-chevron-down-outline"
                size={18}
                color={StyleGuide.palette.secondary}
                style={styles.itemsIcon}
              />
            </View>
          </View>
          <View style={[styles.basketLine]}>
            <Text style={styles.basketTitle}>Preço</Text>
            <Currency price={price} style={styles.basketDescription} />
          </View>

          <View style={[styles.basketLine]}>
            <Text style={styles.basketTitle}>Tem um cupão de desconto?</Text>
            <IonIcon
              name="ios-chevron-forward-outline"
              size={18}
              color={StyleGuide.palette.secondary}
            />
          </View>

          <View style={[styles.basketLine]}>
            <Text style={styles.basketTotal}>Total</Text>
            <Currency price={price} style={styles.basketTotal} />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.line}>
            <Text style={styles.title}>Método de pagamento</Text>
            {params.editable && <Text style={styles.action}>Adicionar</Text>}
          </View>

          <View style={styles.cc}>
            <View style={styles.cardInfo}>
              <Image
                style={styles.cardIcon}
                source={require('~/assets/cc/mastercard.png')}
              />
              <View style={styles.cardNumber}>
                {[1, 2, 3].map(x => (
                  <View key={x} style={styles.dots}>
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                  </View>
                ))}
                <Text style={styles.number}>1234</Text>
              </View>
            </View>
            <Checkbox onChange={() => {}} checked={true} />
          </View>

          {params.editable && (
            <View style={styles.cc}>
              <View style={styles.cardInfo}>
                <Image
                  style={styles.cardIcon}
                  source={require('~/assets/cc/mastercard.png')}
                />
                <View style={styles.cardNumber}>
                  {[1, 2, 3].map(x => (
                    <View key={x} style={styles.dots}>
                      <View style={styles.dot} />
                      <View style={styles.dot} />
                      <View style={styles.dot} />
                      <View style={styles.dot} />
                    </View>
                  ))}
                  <Text style={styles.number}>3242</Text>
                </View>
              </View>
              <Checkbox onChange={() => {}} checked={false} />
            </View>
          )}
        </View>
      </ScrollView>

      {params.editable && (
        <View style={styles.complete}>
          <RectButton
            style={styles.completeButton}
            rippleColor={StyleGuide.palette.secondary}
            onPress={onComplete}>
            <Text style={styles.completeTitle}>Finalizar</Text>
          </RectButton>
        </View>
      )}
    </>
  );
};

export default Checkout;
