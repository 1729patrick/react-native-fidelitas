import React, { ReactNode } from 'react';

type MenuProps = {
  statusBar: ReactNode;
  content: ReactNode;
  search: ReactNode;
  categoryIndicator: ReactNode;
  searchContent: ReactNode;
  basket: ReactNode;
};

const Menu: React.FC<MenuProps> = ({
  statusBar,
  search,
  content,
  categoryIndicator,
  searchContent,
  basket,
}) => {
  return (
    <>
      {statusBar}
      {content}
      {search}
      {categoryIndicator}
      {searchContent}
      {basket}
    </>
  );
};

export default Menu;
