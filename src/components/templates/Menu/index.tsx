import React, { ReactNode } from 'react';

type MenuProps = {
  statusBar: ReactNode;
  content: ReactNode;
  search: ReactNode;
};

const Menu: React.FC<MenuProps> = ({ statusBar, search, content }) => {
  return (
    <>
      {statusBar}
      {content}
      {search}
    </>
  );
};

export default Menu;
