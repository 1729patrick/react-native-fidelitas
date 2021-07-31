import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '~/components/atoms/Header';
import NotificationsList from '~/components/organisms/lists/Notifications';
import Notifications from '~/components/templates/Notifications';
import useHideTabBar from '~/hooks/useHideTabBar';
import StyleGuide from '~/util/StyleGuide';

import styles from './styles';

export default () => {
  useHideTabBar();

  const items = [
    {
      id: 'E-mail',
      title: 'E-mail',
      icon: (
        <Ionicons
          name="ios-mail-open-outline"
          color={StyleGuide.palette.primary}
          size={25}
        />
      ),
      onPress: () => console.log('mail'),
    },
    {
      id: 'Push Notification',
      title: 'Push Notification',
      icon: (
        <Ionicons
          name="ios-phone-portrait-outline"
          color={StyleGuide.palette.primary}
          size={25}
        />
      ),
      onPress: () => console.log('push'),
    },
    {
      id: 'Mensagem de texto',
      title: 'Mensagem de texto',
      icon: (
        <Ionicons
          name="ios-chatbox-outline"
          color={StyleGuide.palette.primary}
          size={25}
        />
      ),
      onPress: () => console.log('message'),
    },
  ];

  return (
    <Notifications
      header={<Header title="Notificações" />}
      list={<NotificationsList data={items} style={styles.contentContainer} />}
    />
  );
};
