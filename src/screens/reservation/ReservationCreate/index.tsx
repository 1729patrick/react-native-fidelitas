import { useNavigation } from '@react-navigation/native';
import React, { useMemo, useRef, useState } from 'react';
import { StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { StackNavigationProp } from '@react-navigation/stack';
import useStatusBar from '~/hooks/useStatusBar';
import Register, { RegisterHandler } from '~/components/templates/Register';
import Header from '~/components/atoms/Header';
import { Step2, Step3, Step4 } from '~/components/organisms/forms/Reservation';
import RegisterStep from '~/components/organisms/RegisterStep';
import useHideTabBar from '~/hooks/useHideTabBar';
import Calendar from '~/components/atoms/Calendar';
import styles from './styles';
import { useBackHandler } from '~/hooks/useBackHandler';
import { CONTENT_HEIGHT, FOOTER_AND_TITLE } from './constants';
import { formatHumanTime2Time } from '~/util/Formatters';
import api from '~/util/api';
import { mutate } from 'swr';
import { isToday } from 'date-fns';
import { ResponseError } from '~/types/Api';
import { translate } from '~/i18n';
import { Alert } from '~/util/Alert';
import { GET_RESERVATION_URL } from '~/api/useReservation';
import { useRestaurant } from '~/contexts/Restaurant';
import { getDay } from '~/util/Date';
import add from 'date-fns/add';
import {
  DURATION_BETWEEN_RESERVE_AND_NOW,
  DURATION_BETWEEN_RESERVE_AND_RESTAURANT_CLOSE,
} from '~/components/organisms/forms/Reservation/constants';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { TOTAL_HEADER_HEIGHT } from '~/components/atoms/Header/constants';

export default () => {
  const { height } = useSafeAreaFrame();

  const CONTENT_HEIGHT = height - TOTAL_HEADER_HEIGHT - FOOTER_AND_TITLE;

  const [values, setValues] = useState({
    date: '',
    time: '',
    adults: 0,
    kids: 0,
    babies: 0,
    type: '' as 'breakfast' | 'lunch' | 'dinner',
    clientNotes: '',
  });

  useStatusBar(true);
  useHideTabBar();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const registerRef = useRef<RegisterHandler>(null);
  const { pop } = useNavigation<StackNavigationProp<any>>();

  const { restaurant } = useRestaurant();

  const hours = useMemo(() => {
    return restaurant?.workHours[getDay()] || {};
  }, [restaurant?.workHours]);

  const onComplete = async () => {
    try {
      setLoading(true);
      const valuesFormatted = {
        ...values,
        time: formatHumanTime2Time(values.time),
      };

      await api.post('user/reservations', valuesFormatted);
      mutate(GET_RESERVATION_URL);
      pop();

      Alert.success(translate('reservationCreated'));
    } catch ({ response }) {
      const { data } = response as ResponseError;

      Alert.error(translate(data.message, 'UNHANDLED_ERROR'));

      setLoading(false);
    }
  };

  const onScrollTo = (index: number) => {
    setCurrentIndex(index);
    registerRef.current?.scrollToIndex(index);
  };

  const onBack = () => {
    if (currentIndex - 1 < 0) {
      pop();
      return;
    }

    onScrollTo(currentIndex - 1);
  };

  useBackHandler(() => {
    if (currentIndex - 1 >= 0) {
      onScrollTo(currentIndex - 1);
      return true;
    }

    return false;
  });

  const onChange = (key: string, value: string | number) => {
    setValues(values => ({ ...values, [key]: value }));
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
      <Header
        backgroundColor={'transparent'}
        onBack={onBack}
        close={!currentIndex}
      />
      <Register
        ref={registerRef}
        scrollable={currentIndex === 3}
        style={{ paddingTop: 80 }}
        steps={[
          <RegisterStep
            title="Escolha a data"
            confirmTitle={'Prosseguir'}
            confirmIcon={<Icon name="arrowright" size={23} color="#fff" />}
            form={
              <Calendar
                height={CONTENT_HEIGHT}
                value={values.date}
                onChange={value => onChange('date', value)}
                minDate={minDate}
              />
            }
            onNext={() => onScrollTo(1)}
            buttonStyle={styles.nextButton}
            titleStyle={styles.stepTitle}
            nextEnabled={!!values.date}
          />,
          <RegisterStep
            title="Escolha o horário"
            confirmTitle={'Prosseguir'}
            confirmIcon={<Icon name="arrowright" size={23} color="#fff" />}
            form={
              <Step2
                height={CONTENT_HEIGHT}
                onChange={onChange}
                value={{ time: values.time, type: values.type }}
                isToday={isToday(new Date(values.date))}
              />
            }
            onNext={() => onScrollTo(2)}
            contentStyle={styles.stepContainer}
            titleStyle={styles.stepTitle}
            nextEnabled={!!values.time}
          />,
          <RegisterStep
            title="Número de pessoas"
            confirmTitle={'Prosseguir'}
            confirmIcon={<Icon name="arrowright" size={23} color="#fff" />}
            form={
              <Step3
                onChange={onChange}
                value={{
                  kids: values.kids,
                  babies: values.babies,
                  adults: values.adults,
                }}
              />
            }
            onNext={() => onScrollTo(3)}
            contentStyle={styles.stepContainer}
            titleStyle={styles.stepTitle}
            nextEnabled={!!+values.adults}
          />,
          <RegisterStep
            title="Confirmação"
            confirmTitle={'Finalizar'}
            confirmIcon={<Icon name="check" size={23} color="#fff" />}
            form={<Step4 onChange={onChange} values={values} />}
            onNext={onComplete}
            contentStyle={styles.stepContainer}
            titleStyle={styles.stepTitle}
            nextEnabled={!!+values.kids || !!+values.adults}
            loading={loading}
          />,
        ]}
      />
    </View>
  );
};
