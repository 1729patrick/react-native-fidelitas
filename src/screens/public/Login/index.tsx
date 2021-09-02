import React from 'react';
import { Dimensions } from 'react-native';
import useStatusBar from '~/hooks/useStatusBar';
import Logo from '~/components/atoms/Logo';
import Login from '~/components/templates/Login';
import LoginForm from '~/components/organisms/forms/Login';
import { useAuth } from '~/contexts/Auth';

const { width } = Dimensions.get('window');

export default () => {
  useStatusBar(true);
  const { login } = useAuth();

  const onLogin = async () => {
    await login({
      email: 'pbf',
      password: 'pbf',
      type: 'admin',
      restaurantId: 1,
    });
  };

  return (
    <Login
      logo={<Logo style={{ width }} />}
      form={<LoginForm onLogin={onLogin} />}
    />
  );
};
