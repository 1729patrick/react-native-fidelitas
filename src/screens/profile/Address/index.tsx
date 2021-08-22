import React from 'react';
import TextButton from '~/components/atoms/buttons/TextButton';
import Header from '~/components/atoms/Header';
import AddressesList from '~/components/organisms/lists/Addresses';
import Notifications from '~/components/templates/Notifications';
import useHideTabBar from '~/hooks/useHideTabBar';

import styles from './styles';

export default () => {
  useHideTabBar();

  const items = [
    {
      id: 'pt',
    },
    {
      id: 'en',
    },
    {
      id: 'es',
    },
  ];

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
      list={<AddressesList data={items} style={styles.contentContainer} />}
    />
  );
};
