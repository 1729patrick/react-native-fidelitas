import React, { ReactElement } from 'react';
import { AlertType, StyleProp, ViewStyle } from 'react-native';

import NotificationConfigItem, {
  NotificationConfigType,
} from '~/components/molecules/items/NotificationConfigItem';
import List from '../../../atoms/List';

type NotificationsConfigProps = {
  style?: StyleProp<ViewStyle>;
  onPress?: (args: AlertType) => void;
  data: NotificationConfigType[];
  header?: ReactElement;
};

const NotificationsConfig: React.FC<NotificationsConfigProps> = ({
  style,
  data,
  header,
}) => {
  return (
    <List
      item={NotificationConfigItem}
      data={data}
      style={style}
      header={header}
    />
  );
};

export default NotificationsConfig;
