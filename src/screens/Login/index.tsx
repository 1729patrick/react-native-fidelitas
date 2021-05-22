import { useNavigation } from '@react-navigation/core';
import React from 'react';
import Logo from '../../components/atoms/Logo';
import LoginForm from '../../components/molecules/forms/Login';
import Login from '../../components/templates/Login';

export default () => {
  const { replace } = useNavigation();

  const onLogin = () => {
    replace('Auth');
  };

  return <Login logo={<Logo />} form={<LoginForm onLogin={onLogin} />} />;
};
