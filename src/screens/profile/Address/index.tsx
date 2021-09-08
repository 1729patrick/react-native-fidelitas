import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useRef } from 'react';
import { Text, View } from 'react-native';
import useAddresses from '~/api/useAddresses';
import TextButton from '~/components/atoms/buttons/TextButton';
import Header from '~/components/atoms/Header';
import SplashScreen from '~/components/atoms/SplashScreen';
import Modal, { ModalHandler } from '~/components/molecules/modals/FlatList';
import AddressesList from '~/components/organisms/lists/Addresses';
import ModalList from '~/components/organisms/lists/Modal';
import Notifications from '~/components/templates/Notifications';
import useHideTabBar from '~/hooks/useHideTabBar';

import styles from './styles';

export default () => {
  useHideTabBar();
  const modalRef = useRef<ModalHandler>(null);
  const { addresses, isLoading } = useAddresses();
  const { navigate } = useNavigation<StackNavigationProp<any>>();

  if (isLoading) {
    return <SplashScreen />;
  }

  const openCreateAddress = () => {
    navigate('CreateAddress');
  };

  const onModalPress = (type: string) => {
    console.log(type);
  };

  return (
    <Notifications
      header={
        <Header
          title="Moradas"
          close
          RightContent={
            <TextButton title="Adicionar" onPress={openCreateAddress} />
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
    />
  );
};
