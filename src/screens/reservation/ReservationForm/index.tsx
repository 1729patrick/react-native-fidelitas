import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useMemo, useState } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { ReservationType } from '~/api/useReservation';
import TextButton from '~/components/atoms/buttons/TextButton';
import Header from '~/components/atoms/Header';
import Input from '~/components/atoms/Input';
import useHideTabBar from '~/hooks/useHideTabBar';
import {
  formatDate,
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

  const onSave = () => {
    console.log(values);
    pop();
  };

  return (
    <>
      <Header
        title="Editar reserva"
        close
        RightContent={
          <TextButton title="Salvar" onPress={onSave} disabled={false} />
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
