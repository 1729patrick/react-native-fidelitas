import React from 'react';
import { StatusBar, View } from 'react-native';
import Home from '../../components/templates/Home';

export default () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle="dark-content"
      />
      <Home />
    </>
  );
};
