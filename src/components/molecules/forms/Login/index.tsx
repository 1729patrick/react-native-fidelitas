import React from 'react';
import { View } from 'react-native';
import RectButton from '../../../atoms/buttons/Rect';
import Input from '../../../atoms/Input';

type LoginProps = {
  onLogin: () => void;
};

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <View style={{ width: '100%' }}>
      <Input placeholder="E-mail" />
      <Input placeholder="Password" />
      <RectButton onPress={onLogin} title="Acessar" />
    </View>
  );
};

export default Login;
