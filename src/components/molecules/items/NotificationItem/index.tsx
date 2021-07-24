import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';
import Switch from '~/components/atoms/Switch';

import styles from './styles';

export type NotificationType = {
  icon: ReactElement;
  title: string;
  onPress: () => void;
};

type NotificationProps = {} & NotificationType;

const NotificationItem: React.FC<NotificationProps> = ({
  title,
  icon,
  onPress,
}) => {
  return (
    <View style={styles.container} key={title}>
      {icon}
      <Text style={styles.title}>{title}</Text>

      <Switch onPress={onPress} style={styles.toggle} />
    </View>
  );
};

export default NotificationItem;
