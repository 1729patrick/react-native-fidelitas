import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useNotifications, { NotificationType } from '~/api/useNotifications';
import RoundButton from '~/components/atoms/buttons/RoundButton';
import Header from '~/components/atoms/Header';
import NotificationsList from '~/components/organisms/lists/Notifications';
import Notifications from '~/components/templates/Notifications';
import useHideTabBar from '~/hooks/useHideTabBar';
import StyleGuide from '~/util/StyleGuide';

import styles from './styles';

export default () => {
  const { notifications } = useNotifications();
  const { navigate } = useNavigation<StackNavigationProp<any>>();
  useHideTabBar();

  const openSettings = () => {
    navigate('NotificationsConfig');
  };

  const onNotificationPress = (notification: NotificationType) => {
    console.log(notification);
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
      list={
        <NotificationsList
          data={notifications || []}
          style={styles.contentContainer}
          onPress={onNotificationPress}
        />
      }
    />
  );
};
