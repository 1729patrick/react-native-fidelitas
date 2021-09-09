import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useRef } from 'react';
import useAddresses from '~/api/useAddresses';
import TextButton from '~/components/atoms/buttons/TextButton';
import Dialog, { DialogHandler } from '~/components/atoms/Dialog';
import Header from '~/components/atoms/Header';
import SplashScreen from '~/components/atoms/SplashScreen';
import { ModalTypes } from '~/components/molecules/items/ModalItem';
import Modal, { ModalHandler } from '~/components/molecules/modals/FlatList';
import AddressesList from '~/components/organisms/lists/Addresses';
import ModalList from '~/components/organisms/lists/Modal';
import Notifications from '~/components/templates/Notifications';
import useHideTabBar from '~/hooks/useHideTabBar';

import styles from './styles';

export default () => {
  useHideTabBar();
  const modalRef = useRef<ModalHandler>(null);
  const dialogRef = useRef<DialogHandler>(null);
  const { addresses, isLoading } = useAddresses();
  const { navigate } = useNavigation<StackNavigationProp<any>>();

  if (isLoading) {
    return <SplashScreen />;
  }

  const openAddressForm = () => {
    console.log('aa');
    navigate('CreateAddress');
  };

  const onDelete = () => {
    console.log('deleteeee');
  };

  const onModalPress = (type: ModalTypes) => {
    modalRef.current?.hidden();

    if (type === 'edit') {
      return openAddressForm();
    } else if (type === 'delete') {
      dialogRef.current?.show();
    }
  };

  return (
    <Notifications
      header={
        <Header
          title="Moradas"
          close
          RightContent={
            <TextButton title="Adicionar" onPress={openAddressForm} />
          }
        />
      }
      list={
        <AddressesList
          data={addresses}
          style={styles.contentContainer}
          onPress={() => {
            modalRef.current?.show();
          }}
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
          title="Address delete"
          description="Do you want to delete this address? You cannot undo this action."
          confirmTitle="Delete"
          onConfirm={onDelete}
        />
      }
    />
  );
};
