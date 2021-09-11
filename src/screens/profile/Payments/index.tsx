import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useRef } from 'react';
import TextButton from '~/components/atoms/buttons/TextButton';
import Dialog, { DialogHandler } from '~/components/atoms/Dialog';
import Header from '~/components/atoms/Header';
import SplashScreen from '~/components/atoms/SplashScreen';
import { ModalTypes } from '~/components/molecules/items/ModalItem';
import Modal, { ModalHandler } from '~/components/molecules/modals/FlatList';
import ModalList from '~/components/organisms/lists/Modal';
import Payments from '~/components/templates/Payments';
import useHideTabBar from '~/hooks/useHideTabBar';

import styles from './styles';
import usePayments, { PaymentType } from '~/api/usePayments';
import PaymentsList from '~/components/organisms/lists/Payments';

export default () => {
  useHideTabBar();
  const modalRef = useRef<ModalHandler>(null);
  const dialogRef = useRef<DialogHandler>(null);
  const paymentSelectedRef = useRef<PaymentType>();

  const { payments, isLoading } = usePayments();
  const { navigate } = useNavigation<StackNavigationProp<any>>();

  if (isLoading) {
    return <SplashScreen />;
  }

  const openPaymentForm = () => {
    navigate('PaymentForm', { initialForm: paymentSelectedRef.current });
  };

  const onDelete = () => {
    dialogRef.current?.hidden();
  };

  const onModalPress = (type: ModalTypes) => {
    modalRef.current?.hidden();

    if (type === 'edit') {
      openPaymentForm();
      return;
    } else if (type === 'delete') {
      dialogRef.current?.show();
      return;
    }
  };

  const onPaymentPress = (payment: PaymentType) => {
    paymentSelectedRef.current = payment;
    modalRef.current?.show();
  };

  const onAddPress = () => {
    paymentSelectedRef.current = undefined;
    openPaymentForm();
  };

  return (
    <Payments
      header={
        <Header
          title="Cartões"
          close
          RightContent={<TextButton title="Adicionar" onPress={onAddPress} />}
        />
      }
      list={
        <PaymentsList
          data={payments}
          style={styles.contentContainer}
          onPress={onPaymentPress}
        />
      }
      bottomSheet={
        <Modal
          ref={modalRef}
          onContinue={() => {}}
          title={'Selecione o Estado'}
          confirm={'OK'}
          itemHeight={64}
          itemsSize={2}>
          <ModalList
            data={[{ type: 'edit' }, { type: 'delete' }]}
            onPress={onModalPress}
          />
        </Modal>
      }
      dialog={
        <Dialog
          ref={dialogRef}
          title="Card delete"
          description="Do you want to delete this card? You cannot undo this action."
          confirmTitle="Delete"
          onConfirm={onDelete}
        />
      }
    />
  );
};
