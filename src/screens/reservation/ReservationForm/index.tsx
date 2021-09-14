import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useMemo } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
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
  const { navigate } = useNavigation<StackNavigationProp<any>>();
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

  const openReservationDate = () => {
    navigate('ReservationDate');
  };

  const openReservationTime = () => {
    navigate('ReservationTime');
  };

  const openReservationMembers = () => {
    navigate('ReservationMembers');
  };

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
          <TouchableOpacity
            style={{
              flex: 2,
              marginRight: 8,
            }}
            onPress={openReservationDate}>
            <View pointerEvents="none">
              <Input
                placeholder="Data"
                value={formatDate(reservation.date)}
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
                value={formatTime(reservation.time)}
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
