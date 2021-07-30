import React from 'react';
import { StatusBar } from 'react-native';
import Row from './lib/FoldingCell/x/Row';
import Routes from './routes';

const App = () => {
  return <Row />;
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle="dark-content"
      />
      <Routes />
    </>
  );
};

export default App;
