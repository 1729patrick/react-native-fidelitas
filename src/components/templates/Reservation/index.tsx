import React, { ReactNode } from 'react';

type ReservationProps = {
  statusBar: ReactNode;
  header: ReactNode;
  list: ReactNode;
  action: ReactNode;
  bottomSheet: ReactNode;
  dialog: ReactNode;
};

const Reservation: React.FC<ReservationProps> = ({
  statusBar,
  header,
  list,
  action,
  bottomSheet,
  dialog,
}) => {
  return (
    <>
      {statusBar}
      {header}
      {list}
      {action}
      {bottomSheet}
      {dialog}
    </>
  );
};

export default Reservation;
