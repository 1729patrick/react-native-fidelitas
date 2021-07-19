import React, { ReactNode } from 'react';

type AchievementsProps = {
  statusBar: ReactNode;
  header: ReactNode;
  list: ReactNode;
};

const Achievements: React.FC<AchievementsProps> = ({
  statusBar,
  header,
  list,
}) => {
  return (
    <>
      {statusBar}
      {header}
      {list}
    </>
  );
};

export default Achievements;
