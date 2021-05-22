import React from 'react';
import { View } from 'react-native';
import Button from '../../../atoms/Button';
import Input from '../../../atoms/Input';

type RegisterFormProps = {
  signIn?: (args: any) => void;
};

const RegisterForm: React.FC<RegisterFormProps> = ({ signIn }) => {
  const onSubmit = () => {
    // signIn({
    //   user: { name: 'Apple', email: 'general@apple.com' },
    //   token: 'AAPL',
    // });
  };

  return (
    <View style={{ width: '100%' }}>
      <Input placeholder="Nome" />
      <Input placeholder="Apelido" />
      <Input placeholder="NIF" />
      <Input placeholder="E-mail" />
      <Input placeholder="Telemóvel" />
      <Input placeholder="Senha" />
      <Button onPress={onSubmit} title="Submit" />
    </View>
  );
};

export default RegisterForm;
