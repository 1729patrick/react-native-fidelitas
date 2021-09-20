import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import useStatusBar from '~/hooks/useStatusBar';
import Header from '~/components/atoms/Header';
import RegisterStep from '~/components/organisms/RegisterStep';
import useHideTabBar from '~/hooks/useHideTabBar';
import styles from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { Step3 } from '~/components/organisms/forms/Reservation';
import { ReservationType } from '~/api/useReservation';

type RootStackParamList = {
  ReservationForm: {
    reservation: ReservationType;
    onConfirm: (reservation: ReservationType) => void;
  };
};

type RouteProps = RouteProp<RootStackParamList, 'ReservationForm'>;

export default () => {
  useStatusBar(true);
  useHideTabBar();
  const { pop } = useNavigation<StackNavigationProp<any>>();
  const { params } = useRoute<RouteProps>();

  const [values, setValues] = useState(params.reservation);

  const onChange = (key: 'kids' | 'babies' | 'adults', value: number) => {
    setValues(values => ({ ...values, [key]: value }));
  };

  const onConfirm = () => {
    params.onConfirm(values);
    pop();
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle="dark-content"
      />
      <Header backgroundColor={'transparent'} title="Número de pessoas" />
      <RegisterStep
        title=""
        confirmTitle={'Confirmar'}
        contentStyle={styles.content}
        confirmIcon={<Icon name="check" size={23} color="#fff" />}
        form={
          <Step3
            value={{
              adults: values.adults,
              kids: values.kids,
              babies: values.babies,
            }}
            onChange={onChange}
          />
        }
        onNext={onConfirm}
        nextEnabled={
          !!+values.adults &&
          (params.reservation.adults !== values.adults ||
            params.reservation.kids !== values.kids ||
            params.reservation.babies !== values.babies)
        }
      />
    </View>
  );
};
