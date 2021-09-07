import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import useAddresses from '~/api/useAddresses';
import TextButton from '~/components/atoms/buttons/TextButton';
import Header from '~/components/atoms/Header';
import SplashScreen from '~/components/atoms/SplashScreen';
import AddressesList from '~/components/organisms/lists/Addresses';
import Notifications from '~/components/templates/Notifications';
import useHideTabBar from '~/hooks/useHideTabBar';

import styles from './styles';

export default () => {
  useHideTabBar();
  const { addresses, isLoading } = useAddresses();
  const { navigate } = useNavigation<StackNavigationProp<any>>();

  if (isLoading) {
    return <SplashScreen />;
  }

  const openCreateAddress = () => {
    navigate('CreateAddress');
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
      list={<AddressesList data={addresses} style={styles.contentContainer} />}
    />
  );
};
