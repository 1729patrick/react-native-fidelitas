import React, { ReactNode } from 'react';

type HomeProps = {
  statusBar: ReactNode;
  header: ReactNode;
  content: ReactNode;
};

const Home: React.FC<HomeProps> = ({ statusBar, header, content }) => {
  return (
    <>
      {statusBar}
      {header}
      {content}
    </>
  );
};

export default Home;
