import React, { ReactElement } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { NotificationType } from '~/api/useNotifications';

import NotificationItem from '~/components/molecules/items/NotificationItem';
import List from '../../../atoms/List';

type NotificationsListProps = {
  style?: StyleProp<ViewStyle>;
  onPress: (args: NotificationType) => void;
  data: NotificationType[];
  header?: ReactElement;
};

const NotificationsList: React.FC<NotificationsListProps> = ({
  style,
  data,
  header,
  onPress,
}) => {
  return (
    <List
      item={NotificationItem}
      data={data}
      style={style}
      header={header}
      onPress={onPress}
    />
  );
};

export default NotificationsList;
