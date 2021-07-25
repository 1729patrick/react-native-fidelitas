import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import useStatusBar from '~/hooks/useStatusBar';
import Logo from '~/components/atoms/Logo';
import Login from '~/components/templates/Login';
import LoginForm from '~/components/organisms/forms/Login';

const { width } = Dimensions.get('window');

export default () => {
  useStatusBar(true);
  const { replace } = useNavigation<StackNavigationProp<any>>();

  const onLogin = () => {
    replace('Auth');
  };

  return (
    <Login
      logo={<Logo style={{ width }} />}
      form={<LoginForm onLogin={onLogin} />}
    />
  );
};
