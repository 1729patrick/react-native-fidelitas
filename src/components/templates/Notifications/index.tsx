import React, { ReactNode } from 'react';

type NotificationsProps = {
  header: ReactNode;
  list: ReactNode;
};

const Notifications: React.FC<NotificationsProps> = ({ list, header }) => {
  return (
    <>
      {header}
      {list}
    </>
  );
};

export default Notifications;
