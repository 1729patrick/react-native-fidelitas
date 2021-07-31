import React, { ReactNode } from 'react';

type MenuProps = {
  statusBar: ReactNode;
  content: ReactNode;
  search: ReactNode;
  categoryIndicator: ReactNode;
};

const Menu: React.FC<MenuProps> = ({
  statusBar,
  search,
  content,
  categoryIndicator,
}) => {
  return (
    <>
      {statusBar}
      {content}
      {search}
      {categoryIndicator}
    </>
  );
};

export default Menu;
