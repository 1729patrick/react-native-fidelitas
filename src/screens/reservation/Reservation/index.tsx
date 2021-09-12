import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useRef } from 'react';
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
import useReservation, { ReservationType } from '~/api/useReservation';
import ModalList from '~/components/organisms/lists/Modal';
import Dialog, { DialogHandler } from '~/components/atoms/Dialog';
import Modal, { ModalHandler } from '~/components/molecules/modals/FlatList';

export enum Status {
  Canceled,
  Confirmed,
  InReview,
}

export default () => {
  const { reservations } = useReservation();
  const modalRef = useRef<ModalHandler>(null);
  const dialogRef = useRef<DialogHandler>(null);

  const floatingButtonRef = useRef<FloatingButtonHandler>(null);
  const { navigate } = useNavigation<StackNavigationProp<any>>();

  useStatusBar(true);

  const openCreate = () => {
    navigate('Create');
  };

  const onModalPress = () => {};

  const onReservationPress = (reservation: ReservationType) => {
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
          title="Address delete"
          description="Do you want to delete this address? You cannot undo this action."
          confirmTitle="Delete"
          onConfirm={() => {}}
        />
      }
    />
  );
};
