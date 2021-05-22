import React from 'react';
import { View } from 'react-native';
import Button from '../../../atoms/Button';
import Input from '../../../atoms/Input';

type LoginFormProps = {
  signIn?: (args: any) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ signIn }) => {
  const onSubmit = () => {
    // signIn({
    //   user: { name: 'Apple', email: 'general@apple.com' },
    //   token: 'AAPL',
    // });
  };

  return (
    <View style={{ width: '100%' }}>
      <Input placeholder="E-mail" />
      <Input placeholder="Password" />
      <Button onPress={onSubmit} title="Submit" />
    </View>
  );
};

export default LoginForm;
