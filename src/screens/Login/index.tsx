import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StatusBar } from 'react-native';
import Logo from '../../components/atoms/Logo';
import Header from '../../components/atoms/Header';
import LoginForm from '../../components/molecules/forms/Login';
import Login from '../../components/templates/Login';

export default () => {
  const { replace } = useNavigation();

  const onLogin = () => {
    replace('Auth');
  };

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle="dark-content"
      />
      <Header backgroundColor={'transparent'} />
      <Login logo={<Logo />} form={<LoginForm onLogin={onLogin} />} />
    </>
  );
};
