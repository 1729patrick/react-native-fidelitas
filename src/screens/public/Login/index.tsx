import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import useStatusBar from '~/hooks/useStatusBar';
import Logo from '~/components/atoms/Logo';
import Login from '~/components/templates/Login';
import LoginForm, { FormType } from '~/components/organisms/forms/Login';
import { useAuth } from '~/contexts/Auth';
import Header from '~/components/atoms/Header';

const { width } = Dimensions.get('window');

export default () => {
  const [loading, setLoading] = useState(false);
  useStatusBar(true);
  const { login } = useAuth();

  const onLogin = async (credentials: FormType) => {
    setLoading(true);

    const success = await login({
      ...credentials,
      type: 'admin',
      restaurantId: 1,
    });

    setLoading(success);
  };

  return (
    <Login
      header={<Header showBack backgroundColor={'transparent'} />}
      logo={<Logo style={{ width }} />}
      form={<LoginForm onLogin={onLogin} loading={loading} />}
    />
  );
};
