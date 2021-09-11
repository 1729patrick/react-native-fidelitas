import React, { ReactElement, useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import StyleGuide from '~/util/StyleGuide';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import { NotificationType } from '~/api/useNotifications';
import { formatDate } from '~/util/Formatters';

type NotificationProps = NotificationType & {
  onPress: (args: NotificationType) => void;
};

const icons = {
  sms: 'ios-chatbox-outline',
  pushNotification: 'ios-phone-portrait-outline',
  email: 'ios-mail-outline',
};

const NotificationItem: React.FC<NotificationProps> = ({
  onPress,
  ...notification
}) => {
  const color = notification.read
    ? StyleGuide.palette.primary
    : StyleGuide.palette.app;

  const opacity = notification.read ? 0.6 : 1;

  return (
    <View style={[styles.border, { opacity }]}>
      <RectButton
        style={styles.container}
        onPress={() => onPress(notification)}
        rippleColor={StyleGuide.palette.secondary}>
        <Icon name={icons[notification.type]} color={color} size={23} />
        <View style={styles.info}>
          <Text style={[styles.title]}>{notification.title}</Text>
          <Text style={styles.description}>{notification.description}</Text>

          <Text style={[styles.description, styles.date]}>
            {formatDate(notification.createdAt)}
          </Text>
        </View>
      </RectButton>
    </View>
  );
};

export default NotificationItem;
