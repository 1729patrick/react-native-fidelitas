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

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Notifications
      header={
        <Header
          title="Endereços"
          close
          RightContent={
            <TextButton title="Adicionar" onPress={() => console.log('save')} />
          }
        />
      }
      list={<AddressesList data={addresses} style={styles.contentContainer} />}
    />
  );
};
