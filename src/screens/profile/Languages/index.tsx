import React from 'react';
import Header from '~/components/atoms/Header';
import LanguagesList from '~/components/organisms/lists/Languages';
import Notifications from '~/components/templates/Notifications';
import useHideTabBar from '~/hooks/useHideTabBar';

import styles from './styles';

export default () => {
  useHideTabBar();

  const items = [
    {
      id: 'pt',
      title: 'Português',

      onPress: () => console.log('pt'),
    },
    {
      id: 'en',
      title: 'Inglês',
      onPress: () => console.log('en'),
    },
    {
      id: 'es',
      title: 'Espanhol',
      onPress: () => console.log('es'),
    },
  ];

  return (
    <Notifications
      header={<Header title="Idioma" close />}
      list={<LanguagesList data={items} style={styles.contentContainer} />}
    />
  );
};
