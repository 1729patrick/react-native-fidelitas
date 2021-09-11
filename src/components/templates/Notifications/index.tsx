import React, { ReactNode } from 'react';

type NotificationsProps = {
  header: ReactNode;
  list: ReactNode;
  bottomSheet?: ReactNode;
  dialog?: ReactNode;
};

const Notifications: React.FC<NotificationsProps> = ({
  list,
  header,
  bottomSheet,
  dialog,
}) => {
  return (
    <>
      {header}
      {list}
      {bottomSheet}
      {dialog}
    </>
  );
};

export default Notifications;
