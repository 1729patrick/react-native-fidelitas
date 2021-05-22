import React from 'react';
import { View } from 'react-native';
import Logo from '../../components/atoms/Logo';
import LoginForm from '../../components/molecules/forms/Login';
import Login from '../../components/templates/Login';

export default () => {
  return <Login logo={<Logo />} form={<LoginForm signIn={() => {}} />} />;
};
