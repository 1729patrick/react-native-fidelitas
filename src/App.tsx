import React from 'react';
import { StatusBar } from 'react-native';
import { BasketProvider } from './contexts/Basket';
import Routes from './routes';

const App = () => {
  return (
    <BasketProvider>
      <StatusBar
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle="dark-content"
      />
      <Routes />
    </BasketProvider>
  );
};

export default App;
