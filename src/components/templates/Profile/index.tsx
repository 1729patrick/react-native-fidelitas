import React, { ReactNode } from 'react';

type ProfileProps = {
  list: ReactNode;
};

const Profile: React.FC<ProfileProps> = ({ list }) => {
  return <>{list}</>;
};

export default Profile;
