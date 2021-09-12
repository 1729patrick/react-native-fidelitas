import { RouteProp, useRoute } from '@react-navigation/core';
import React, { useMemo } from 'react';
import { ScrollView, View } from 'react-native';
import { ReservationType } from '~/api/useReservation';
import TextButton from '~/components/atoms/buttons/TextButton';
import Header from '~/components/atoms/Header';
import Input from '~/components/atoms/Input';
import useHideTabBar from '~/hooks/useHideTabBar';
import { formatDate, formatTime } from '~/util/Formatters';
import styles from './styles';

type RootStackParamList = {
  ReservationForm: {
    reservation: ReservationType;
  };
};

type RouteProps = RouteProp<RootStackParamList, 'ReservationForm'>;

const ReservationForm = () => {
  const { params } = useRoute<RouteProps>();
  const { reservation } = params;
  useHideTabBar();

  const size = useMemo(() => {
    let numberOfPeople: string[] = [];

    if (reservation.adults) {
      let suffix = reservation.adults > 1 ? 'adultos' : 'adulto';
      numberOfPeople = [...numberOfPeople, `${reservation.adults} ${suffix}`];
    }

    if (reservation.kids) {
      let suffix = reservation.kids > 1 ? 'crianças' : 'criança';
      numberOfPeople = [...numberOfPeople, `${reservation.kids} ${suffix}`];
    }

    if (reservation.babies) {
      let suffix = reservation.babies > 1 ? 'bebê' : 'bebês';
      numberOfPeople = [...numberOfPeople, `${reservation.babies} ${suffix}`];
    }

    return numberOfPeople.join(', ');
  }, []);

  return (
    <>
      <Header
        title="Editar reserva"
        close
        RightContent={
          <TextButton title="Salvar" onPress={() => {}} disabled={false} />
        }
      />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <Input
            placeholder="Data"
            style={{ flex: 2, marginRight: 8 }}
            value={formatDate(reservation.date)}
            returnKeyType="next"
            autoCompleteType="name"
            editable={false}
          />
          <Input
            placeholder="Horário"
            style={{ flex: 1, marginLeft: 8 }}
            value={formatTime(reservation.time)}
            returnKeyType="next"
            autoCompleteType="name"
            editable={false}
          />
        </View>
        <Input
          placeholder="Número de pessoas"
          value={size}
          returnKeyType="next"
          autoCompleteType="name"
          editable={false}
        />
        <Input
          placeholder="Notas"
          value={reservation.clientNotes}
          multiline
          style={{ height: 70 }}
          returnKeyType="next"
          autoCompleteType="name"
        />
      </ScrollView>
    </>
  );
};

export default ReservationForm;