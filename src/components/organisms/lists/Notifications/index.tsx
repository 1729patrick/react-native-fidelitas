import React, { ReactElement } from 'react';
import { AlertType, StyleProp, ViewStyle } from 'react-native';

import NotificationItem, {
  NotificationType,
} from '~/components/molecules/items/NotificationItem';
import List from '../../../atoms/List';

type NotificationsListProps = {
  style?: StyleProp<ViewStyle>;
  onPress?: (args: AlertType) => void;
  data: NotificationType[];
  header?: ReactElement;
};

const NotificationsList: React.FC<NotificationsListProps> = ({
  style,
  data,
  header,
}) => {
  return (
    <List item={NotificationItem} data={data} style={style} header={header} />
  );
};

export default NotificationsList;
