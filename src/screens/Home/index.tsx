import React from 'react';
import { StatusBar, View } from 'react-native';

const Home = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle="dark-content"
      />
      <View style={{ backgroundColor: 'red', width: 100, height: 100 }} />
    </>
  );
};

export default Home;
