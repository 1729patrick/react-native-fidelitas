import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Dimensions, StatusBar } from 'react-native';
import Logo from '../../components/atoms/Logo';
import Header from '../../components/atoms/Header';
import LoginForm from '../../components/organisms/forms/Login';
import Login from '../../components/templates/Login';
import { StackNavigationProp } from '@react-navigation/stack';
import useStatusBar from '~/hooks/useStatusBar';

const { width } = Dimensions.get('window');

export default () => {
  useStatusBar(true);
  const { replace } = useNavigation<StackNavigationProp<any>>();

  const onLogin = () => {
    replace('Auth');
  };

  return (
    <Login
      statusBar={
        <StatusBar
          translucent
          backgroundColor="rgba(0, 0, 0, 0)"
          barStyle="dark-content"
        />
      }
      header={<Header backgroundColor={'transparent'} />}
      logo={<Logo style={{ width }} />}
      form={<LoginForm onLogin={onLogin} />}
    />
  );
};
