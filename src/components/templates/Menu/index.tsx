import React, { ReactNode } from 'react';

type MenuProps = {
  statusBar: ReactNode;
  content: ReactNode;
  search: ReactNode;
  categoryIndicator: ReactNode;
  searchContent: ReactNode;
  basketButton: ReactNode;
};

const Menu: React.FC<MenuProps> = ({
  statusBar,
  search,
  content,
  categoryIndicator,
  searchContent,
  basketButton,
}) => {
  return (
    <>
      {statusBar}
      {content}
      {search}
      {categoryIndicator}
      {searchContent}
      {basketButton}
    </>
  );
};

export default Menu;
