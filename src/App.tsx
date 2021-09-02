import React from 'react';
import { StatusBar } from 'react-native';
import { AuthProvider } from './contexts/Auth';
import { BasketProvider } from './contexts/Basket';
import Routes from './routes';

const App = () => {
  return (
    <AuthProvider>
      <BasketProvider>
        <StatusBar
          translucent
          backgroundColor="rgba(0, 0, 0, 0)"
          barStyle="dark-content"
        />
        <Routes />
      </BasketProvider>
    </AuthProvider>
  );
};

export default App;
