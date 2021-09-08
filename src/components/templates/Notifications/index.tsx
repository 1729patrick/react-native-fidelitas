import React, { ReactNode } from 'react';

type NotificationsProps = {
  header: ReactNode;
  list: ReactNode;
  bottomSheet: ReactNode;
};

const Notifications: React.FC<NotificationsProps> = ({
  list,
  header,
  bottomSheet,
}) => {
  return (
    <>
      {header}
      {list}
      {bottomSheet}
    </>
  );
};

export default Notifications;
