import React, { ReactNode } from 'react';

type PaymentsProps = {
  header: ReactNode;
  list: ReactNode;
  bottomSheet: ReactNode;
  dialog: ReactNode;
};

const Payments: React.FC<PaymentsProps> = ({
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

export default Payments;
