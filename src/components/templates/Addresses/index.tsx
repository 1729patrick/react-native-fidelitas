import React, { ReactNode } from 'react';

type AddressesProps = {
  header: ReactNode;
  list: ReactNode;
  bottomSheet: ReactNode;
  dialog: ReactNode;
};

const Addresses: React.FC<AddressesProps> = ({
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

export default Addresses;
