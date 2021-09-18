import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useMemo, useState } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { mutate } from 'swr';
import { GET_RESERVATION_URL, ReservationType } from '~/api/useReservation';
import TextButton from '~/components/atoms/buttons/TextButton';
import Header from '~/components/atoms/Header';
import Input from '~/components/atoms/Input';
import useHideTabBar from '~/hooks/useHideTabBar';
import { translate } from '~/i18n';
import { ResponseError } from '~/types/Api';
import { Alert } from '~/util/Alert';
import api from '~/util/api';
import {
  formatDate,
  formatHumanDate,
  formatHumanTime2Time,
  formatNumberOfPerson,
  formatTime,
} from '~/util/Formatters';
import styles from './styles';

type RootStackParamList = {
  ReservationForm: {
    reservation: ReservationType;
  };
};

type RouteProps = RouteProp<RootStackParamList, 'ReservationForm'>;

const ReservationForm = () => {
  const { navigate, pop } = useNavigation<StackNavigationProp<any>>();
  const { params } = useRoute<RouteProps>();
  const [values, setValues] = useState(params.reservation);
  const [loading, setLoading] = useState(false);
  useHideTabBar();

  const size = useMemo(() => {
    return formatNumberOfPerson(values);
  }, [values]);

  const onConfirm = (values: ReservationType) => {
    setValues(values);
  };

  const openReservationDate = () => {
    navigate('ReservationDate', { reservation: values, onConfirm });
  };

  const openReservationTime = () => {
    navigate('ReservationTime', { reservation: values, onConfirm });
  };

  const openReservationMembers = () => {
    navigate('ReservationMembers', { reservation: values, onConfirm });
  };

  const onChange = (key: string, date: string) => {
    setValues({ ...values, [key]: date });
  };

  const onSave = async () => {
    try {
      setLoading(true);
      const { date, type, adults, kids, babies, clientNotes } = values;
      const valuesFormatted = {
        date,
        type,
        adults,
        kids,
        babies,
        clientNotes,
        time: formatHumanTime2Time(values.time),
      };

      await api.put(`user/reservations/${values.id}`, valuesFormatted);
      mutate(GET_RESERVATION_URL);
      pop();
      Alert.success(translate('reservationUpdated'));
    } catch ({ response }) {
      const { data } = response as ResponseError;

      Alert.error(translate(data.message, 'UNHANDLED_ERROR'));
      setLoading(false);
    }
  };

  const isValid =
    formatDate(values.date) !== formatDate(params.reservation.date) ||
    params.reservation.time !== values.time ||
    params.reservation.adults !== values.adults ||
    params.reservation.kids !== values.kids ||
    params.reservation.babies !== values.babies ||
    params.reservation.type !== values.type ||
    params.reservation.clientNotes !== values.clientNotes;

  return (
    <>
      <Header
        title="Editar reserva"
        close
        RightContent={
          <TextButton
            title="Salvar"
            onPress={onSave}
            disabled={!isValid}
            loading={loading}
          />
        }
      />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              flex: 2,
              marginRight: 8,
            }}
            onPress={openReservationDate}>
            <View pointerEvents="none">
              <Input
                placeholder="Data"
                value={formatDate(values.date)}
                returnKeyType="next"
                autoCompleteType="name"
                editable={false}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginLeft: 8 }}
            onPress={openReservationTime}>
            <View pointerEvents="none">
              <Input
                placeholder="Horário"
                value={formatTime(values.time)}
                returnKeyType="next"
                autoCompleteType="name"
                editable={false}
              />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ flex: 1 }} onPress={openReservationMembers}>
          <View pointerEvents="none">
            <Input
              placeholder="Número de pessoas"
              value={size}
              returnKeyType="next"
              autoCompleteType="name"
              editable={false}
            />
          </View>
        </TouchableOpacity>
        <Input
          placeholder="Notas"
          value={values.clientNotes}
          multiline
          style={{ height: 70 }}
          returnKeyType="next"
          autoCompleteType="name"
          onChangeText={value => onChange('clientNotes', value)}
        />
      </ScrollView>
    </>
  );
};

export default ReservationForm;
