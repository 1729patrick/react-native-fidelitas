import React, { useMemo, useState } from 'react';
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
import { FOOTER_HEIGHT } from './constants';
import { ReservationType } from '~/api/useReservation';
import { formatDate } from '~/util/Formatters';
import {
  DURATION_BETWEEN_RESERVE_AND_NOW,
  DURATION_BETWEEN_RESERVE_AND_RESTAURANT_CLOSE,
} from '~/components/organisms/forms/Reservation/constants';
import add from 'date-fns/add';
import { useRestaurant } from '~/contexts/Restaurant';
import { getDay } from '~/util/Date';
import { TOTAL_HEADER_HEIGHT } from '~/components/atoms/Header/constants';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

type RootStackParamList = {
  ReservationForm: {
    reservation: ReservationType;
    onConfirm: (reservation: ReservationType) => void;
  };
};

type RouteProps = RouteProp<RootStackParamList, 'ReservationForm'>;

export default () => {
  const { height } = useSafeAreaFrame();

  const CONTENT_HEIGHT = height - TOTAL_HEADER_HEIGHT - FOOTER_HEIGHT;

  useStatusBar(true);
  useHideTabBar();
  const { pop } = useNavigation<StackNavigationProp<any>>();
  const { params } = useRoute<RouteProps>();

  const [values, setValues] = useState(params.reservation);
  const { restaurant } = useRestaurant();

  const hours = useMemo(() => {
    return restaurant?.workHours[getDay()] || {};
  }, [restaurant?.workHours]);

  const onChange = (date: string) => {
    setValues({ ...values, ['date']: date });
  };

  const onConfirm = () => {
    params.onConfirm(values);
    pop();
  };

  const minDate = useMemo(() => {
    const now = new Date();
    const endDate = new Date();
    const [_, end] = hours.dinner || hours.lunch || hours.breakfast || [];

    if (!end) {
      return now;
    }

    const [hours_, minutes_] = end.split(':');
    endDate.setHours(+hours_, +minutes_);

    if (
      add(now, { minutes: DURATION_BETWEEN_RESERVE_AND_NOW }) >=
      add(endDate, { minutes: -DURATION_BETWEEN_RESERVE_AND_RESTAURANT_CLOSE })
    ) {
      return add(now, { days: 1 });
    }

    return now;
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
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
            height={CONTENT_HEIGHT}
            value={values.date}
            onChange={onChange}
            minDate={minDate}
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
