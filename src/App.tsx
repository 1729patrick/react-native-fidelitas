import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="rgba(0, 0, 0, 0.25)"
        barStyle="light-content"
      />
      <Routes />
    </>
  );
};

export default App;
