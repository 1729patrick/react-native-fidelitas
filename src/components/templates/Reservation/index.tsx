import React, { ReactNode } from 'react';

type ReservationProps = {
  statusBar: ReactNode;
  header: ReactNode;
  list: ReactNode;
  action: ReactNode;
};

const Reservation: React.FC<ReservationProps> = ({
  statusBar,
  header,
  list,
  action,
}) => {
  return (
    <>
      {statusBar}
      {header}
      {list}
      {action}
    </>
  );
};

export default Reservation;
