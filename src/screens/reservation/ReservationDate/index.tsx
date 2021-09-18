import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import useStatusBar from '~/hooks/useStatusBar';
import Header from '~/components/atoms/Header';
import RegisterStep from '~/components/organisms/RegisterStep';
import useHideTabBar from '~/hooks/useHideTabBar';
import Calendar from '~/components/atoms/Calendar';
import styles from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { CALENDAR_HEIGHT } from './constants';
import { ReservationType } from '~/api/useReservation';
import { formatDate } from '~/util/Formatters';

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

  const onChange = (date: string) => {
    setValues({ ...values, ['date']: date });
  };

  const onConfirm = () => {
    params.onConfirm(values);
    pop();
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle="dark-content"
      />
      <Header backgroundColor={'transparent'} title="Escolha a data" />
      <RegisterStep
        title=""
        contentStyle={styles.content}
        confirmTitle={'Confirmar'}
        confirmIcon={<Icon name="check" size={23} color="#fff" />}
        form={
          <Calendar
            height={CALENDAR_HEIGHT}
            value={values.date}
            onChange={onChange}
          />
        }
        onNext={onConfirm}
        buttonStyle={styles.nextButton}
        nextEnabled={
          formatDate(params.reservation.date) !== formatDate(values.date)
        }
      />
    </View>
  );
};
