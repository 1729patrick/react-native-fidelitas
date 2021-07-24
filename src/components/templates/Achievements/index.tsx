import React, { ReactNode } from 'react';

type AchievementsProps = {
  statusBar: ReactNode;
  header: ReactNode;
  list: ReactNode;
  action: ReactNode;
};

const Achievements: React.FC<AchievementsProps> = ({
  statusBar,
  header,
  list,
  action,
}) => {
  return (
    <>
      {statusBar}
      {header}
      {list}
      {action}
    </>
  );
};

export default Achievements;
