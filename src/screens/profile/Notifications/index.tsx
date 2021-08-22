import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RoundButton from '~/components/atoms/buttons/RoundButton';
import Header from '~/components/atoms/Header';
import NotificationsList from '~/components/organisms/lists/Notifications';
import Notifications from '~/components/templates/Notifications';
import useHideTabBar from '~/hooks/useHideTabBar';
import StyleGuide from '~/util/StyleGuide';

import styles from './styles';

export default () => {
  const { navigate } = useNavigation<StackNavigationProp<any>>();
  useHideTabBar();

  const items = [
    {
      id: '11/08/2021',
      title: 'Férias entre 12 e 18 de agosto',
      description: 'Foco, força e férias!!',
      date: '11/08/2021',
      read: false,
      icon: 'mail-outline',
      onPress: () => console.log('push'),
    },
    {
      id: '10/08/2021',
      title: 'Compre um vinho e banhe um hambúrguer',
      description:
        'Promoção disponível para os clientes que comprem o vinho da casa.',
      date: '10/08/2021',
      read: true,
      icon: 'gift-outline',
      onPress: () => console.log('mail'),
    },
  ];

  const openSettings = () => {
    navigate('NotificationsConfig');
  };

  return (
    <Notifications
      header={
        <Header
          title="Notificações"
          close
          RightContent={
            <RoundButton
              Icon={Ionicons}
              name="settings-outline"
              size={22}
              color={StyleGuide.palette.app}
              onPress={openSettings}
            />
          }
        />
      }
      list={<NotificationsList data={items} style={styles.contentContainer} />}
    />
  );
};
