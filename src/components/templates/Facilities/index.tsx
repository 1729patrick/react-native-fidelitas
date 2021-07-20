import React, { ReactNode } from 'react';

type FacilitiesProps = {
  statusBar: ReactNode;
  header: ReactNode;
  list: ReactNode;
};

const Facilities: React.FC<FacilitiesProps> = ({ statusBar, header, list }) => {
  return (
    <>
      {statusBar}
      {header}
      {list}
    </>
  );
};

export default Facilities;
