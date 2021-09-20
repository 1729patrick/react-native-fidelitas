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
import { Step2 } from '~/components/organisms/forms/Reservation';
import { ReservationType } from '~/api/useReservation';

import { isToday } from 'date-fns';
import { formatHumanTime2Time, formatTime } from '~/util/Formatters';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { FOOTER_HEIGHT } from './constants';
import { TOTAL_HEADER_HEIGHT } from '~/components/atoms/Header/constants';

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

  const [values, setValues] = useState({
    ...params.reservation,
    time: formatTime(params.reservation.time),
  });

  const onChange = (key: string, value: string) => {
    setValues(values => ({ ...values, [key]: value }));
  };

  const onConfirm = () => {
    const valuesFormatted = {
      ...values,
      time: formatHumanTime2Time(values.time),
    };

    params.onConfirm(valuesFormatted);
    pop();
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle="dark-content"
      />
      <Header backgroundColor={'transparent'} title="Escolha o horário" />
      <RegisterStep
        title=""
        confirmTitle={'Confirmar'}
        confirmIcon={<Icon name="check" size={23} color="#fff" />}
        form={
          <Step2
            value={{
              type: values.type,
              time: values.time,
            }}
            onChange={onChange}
            height={CONTENT_HEIGHT}
            isToday={isToday(new Date(values.date))}
          />
        }
        onNext={onConfirm}
        contentStyle={styles.content}
        nextEnabled={values.time !== params.reservation.time}
      />
    </View>
  );
};
