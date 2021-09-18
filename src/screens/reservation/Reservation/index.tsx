import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useRef, useState } from 'react';
import { StatusBar } from 'react-native';
import FloatingButton, {
  FloatingButtonHandler,
} from '~/components/atoms/buttons/FloatingButton';
import Header from '~/components/atoms/Header';
import ReservationList from '~/components/organisms/lists/Reservation';
import Reservation from '~/components/templates/Reservation';
import useStatusBar from '~/hooks/useStatusBar';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import useReservation, {
  GET_RESERVATION_URL,
  ReservationType,
} from '~/api/useReservation';
import ModalList from '~/components/organisms/lists/Modal';
import Dialog, { DialogHandler } from '~/components/atoms/Dialog';
import Modal, { ModalHandler } from '~/components/molecules/modals/FlatList';
import { ModalTypes } from '~/components/molecules/items/ModalItem';
import api from '~/util/api';
import { mutate } from 'swr';
import { Alert } from '~/util/Alert';
import { translate } from '~/i18n';
import { ResponseError } from '~/types/Api';
import { formatHumanTime2Time } from '~/util/Formatters';

export enum Status {
  Canceled,
  Confirmed,
  InReview,
}

export default () => {
  const { reservations } = useReservation();
  const modalRef = useRef<ModalHandler>(null);
  const dialogRef = useRef<DialogHandler>(null);
  const reservationRef = useRef<ReservationType>();

  const floatingButtonRef = useRef<FloatingButtonHandler>(null);
  const { navigate } = useNavigation<StackNavigationProp<any>>();

  useStatusBar(true);

  const openCreate = () => {
    navigate('ReservationCreate');
  };

  const openReservationForm = () => {
    navigate('ReservationForm', { reservation: reservationRef.current });
  };

  const onCancel = async () => {
    try {
      dialogRef.current?.setLoading(true);
      const { date, type, adults, kids, babies, clientNotes, time, id } =
        reservationRef.current!;

      const valuesFormatted = {
        date,
        type,
        adults,
        kids,
        babies,
        clientNotes,
        time: formatHumanTime2Time(time),
        status: 'canceled',
      };

      await api.put(`user/reservations/${id}`, valuesFormatted);

      dialogRef.current?.hidden();
      Alert.success(translate('reservationCanceled'));
      mutate(GET_RESERVATION_URL);
    } catch ({ response }) {
      const { data } = response as ResponseError;

      Alert.error(translate(data.message, 'UNHANDLED_ERROR'));
      dialogRef.current?.setLoading(false);
    }
  };

  const onModalPress = (type: ModalTypes) => {
    modalRef.current?.hidden();

    if (type === 'cancel') {
      dialogRef.current?.show();
    } else if (type === 'edit') {
      openReservationForm();
    }
  };

  const onReservationPress = (reservation: ReservationType) => {
    reservationRef.current = reservation;
    modalRef.current?.show();
  };

  return (
    <Reservation
      statusBar={
        <StatusBar
          translucent
          backgroundColor="rgba(0, 0, 0, 0)"
          barStyle="dark-content"
        />
      }
      header={<Header showBack={false} title="Reservas" />}
      list={
        <ReservationList
          data={reservations}
          style={styles.contentContainer}
          onPress={onReservationPress}
          onScrollUp={() => floatingButtonRef.current?.show()}
          onScrollDown={() => floatingButtonRef.current?.hide()}
        />
      }
      action={
        <FloatingButton
          ref={floatingButtonRef}
          onPress={openCreate}
          icon={<Icon name="plus" color="#fff" size={30} />}
        />
      }
      bottomSheet={
        <Modal ref={modalRef} itemHeight={64} itemsSize={2}>
          <ModalList
            data={[{ type: 'edit' }, { type: 'cancel' }]}
            onPress={onModalPress}
          />
        </Modal>
      }
      dialog={
        <Dialog
          ref={dialogRef}
          title="Book table cancel"
          description="Do you want to cancel this book table? You cannot undo this action."
          confirmTitle="Cancel"
          onConfirm={onCancel}
        />
      }
    />
  );
};
