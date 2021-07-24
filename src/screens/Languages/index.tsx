import React from 'react';
import Header from '~/components/atoms/Header';
import LanguagesList from '~/components/organisms/lists/Languages';
import NotificationsList from '~/components/organisms/lists/Notifications';
import Notifications from '~/components/templates/Notifications';
import useHideTabBar from '~/hooks/useHideTabBar';

import styles from './styles';

export default () => {
  useHideTabBar();

  const items = [
    {
      title: 'Português',

      onPress: () => console.log('pt'),
    },
    {
      title: 'Inglês',
      onPress: () => console.log('en'),
    },
    {
      title: 'Espanhol',
      onPress: () => console.log('es'),
    },
  ];

  return (
    <Notifications
      header={<Header title="Idioma" elevation={2} />}
      list={<LanguagesList data={items} style={styles.contentContainer} />}
    />
  );
};
