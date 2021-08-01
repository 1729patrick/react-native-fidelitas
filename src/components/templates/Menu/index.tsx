import React, { ReactNode } from 'react';

type MenuProps = {
  statusBar: ReactNode;
  content: ReactNode;
  search: ReactNode;
  categoryIndicator: ReactNode;
  searchContent: ReactNode;
};

const Menu: React.FC<MenuProps> = ({
  statusBar,
  search,
  content,
  categoryIndicator,
  searchContent,
}) => {
  return (
    <>
      {statusBar}
      {content}
      {search}
      {categoryIndicator}
      {searchContent}
    </>
  );
};

export default Menu;
