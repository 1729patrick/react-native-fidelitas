import React, { ReactElement, useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import StyleGuide from '~/util/StyleGuide';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

export type NotificationType = {
  icon: string;
  title: string;
  description: string;
  date: string;
  read: boolean;
  onPress: (args: boolean) => void;
};

type NotificationProps = {} & NotificationType;

const NotificationItem: React.FC<NotificationProps> = ({
  title,
  description,
  icon,
  date,
  read: initialRead,
  onPress,
}) => {
  const [read, setRead] = useState(initialRead);
  const color = read ? StyleGuide.palette.primary : StyleGuide.palette.app;

  const opacity = read ? 0.6 : 1;

  return (
    <View style={[styles.border, { opacity }]}>
      <RectButton
        style={styles.container}
        key={title}
        onPress={() => setRead(true)}
        rippleColor={StyleGuide.palette.secondary}>
        <Icon name={icon} color={color} size={23} />
        <View style={styles.info}>
          <Text style={[styles.title]}>{title}</Text>
          <Text style={styles.description}>{description}</Text>

          <Text style={[styles.description, styles.date]}>{date}</Text>
        </View>
      </RectButton>
    </View>
  );
};

export default NotificationItem;
