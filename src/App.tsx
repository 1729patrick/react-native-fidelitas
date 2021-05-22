import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Routes />
    </>
  );
};

export default App;
