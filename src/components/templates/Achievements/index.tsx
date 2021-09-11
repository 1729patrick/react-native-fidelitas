import React, { ReactNode } from 'react';

type AchievementsProps = {
  statusBar: ReactNode;
  header: ReactNode;
  list: ReactNode;
  action: ReactNode;
  bottomSheet: ReactNode;
  dialog: ReactNode;
};

const Achievements: React.FC<AchievementsProps> = ({
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

export default Achievements;
