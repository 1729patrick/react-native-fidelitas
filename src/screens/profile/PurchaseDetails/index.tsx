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
import { PurchaseType } from '~/api/usePurchases';
import CC from '~/components/atoms/CC';
import { formatAddress, formatPhone } from '~/util/Formatters';
import TextButton from '~/components/atoms/buttons/TextButton';
import { translate, TranslationKeyType } from '~/i18n';

type RootStackParamList = {
  Checkout: {
    purchase: PurchaseType;
  };
};

type RouteProps = RouteProp<RootStackParamList, 'Checkout'>;

const PurchaseDetails = () => {
  const { params } = useRoute<RouteProps>();
  const { purchase } = params;

  const { clearBasket, basket, price } = useBasket();
  const { popToTop } = useNavigation<StackNavigationProp<any>>();
  useStatusBar(true);
  useHideTabBar();

  const onComplete = () => {
    clearBasket();
    popToTop();
  };

  const quantity = useMemo(() => {
    return purchase.products.length || 0;
  }, [basket]);

  return (
    <>
      <Header
        title={'Detalhes'}
        close
        RightContent={<TextButton title="Ver fatura" onPress={() => {}} />}
      />
      <ScrollView contentContainerStyle={[styles.container]}>
        <View style={styles.card}>
          <Text style={styles.title}>Forma de entrega</Text>
          <View style={styles.deliveryType}>
            <Text style={styles.description}>
              {translate(purchase.deliveryType as TranslationKeyType)}
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.line}>
            <Text style={styles.title}>Morada de entrega</Text>
          </View>
          <View style={styles.addressLine}>
            <IonIcon
              name="ios-person-sharp"
              size={18}
              color={StyleGuide.palette.secondary}
              style={styles.icon}
            />
            <Text style={styles.description}>
              {purchase.address.responsible}
            </Text>
          </View>

          <View style={styles.addressLine}>
            <IonIcon
              name="call"
              size={18}
              color={StyleGuide.palette.secondary}
              style={styles.icon}
            />
            <Text style={styles.description}>
              {formatPhone(purchase.address.phone)}
            </Text>
          </View>

          <View style={styles.addressLine}>
            <IonIcon
              name="ios-location-sharp"
              size={18}
              color={StyleGuide.palette.secondary}
              style={styles.icon}
            />
            <Text style={styles.description}>
              {formatAddress(purchase.address)}
            </Text>
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
            <Currency
              price={purchase.subTotal}
              style={styles.basketDescription}
            />
          </View>

          {purchase.promotionCode && (
            <View style={[styles.basketLine]}>
              <Text style={styles.basketTitle}>Desconto</Text>
              <Currency
                price={purchase.discount}
                style={styles.basketDescription}
              />
            </View>
          )}

          <View style={[styles.basketLine]}>
            <Text style={styles.basketTotal}>Total</Text>
            <Currency price={purchase.total} style={styles.basketTotal} />
          </View>
        </View>

        {purchase.payment.number && (
          <View style={styles.card}>
            <View style={styles.line}>
              <Text style={styles.title}>Método de pagamento</Text>
            </View>

            <View>
              <CC number={purchase.payment.number} />
            </View>
          </View>
        )}
      </ScrollView>
    </>
  );
};

export default PurchaseDetails;
