import React from 'react';
import { View } from 'react-native';
import Input from '../../../atoms/Input';

type RegisterProps = {
  signIn?: (args: any) => void;
};

export const Step1: React.FC<RegisterProps> = () => {
  return (
    <View style={{ width: '100%' }}>
      <Input placeholder="Nome" />
      <Input placeholder="Apelido" />
    </View>
  );
};

export const Step2: React.FC<RegisterProps> = () => {
  return (
    <View style={{ width: '100%' }}>
      <Input placeholder="Data de nascimento" />
      <Input placeholder="Género" />
    </View>
  );
};

export const Step3: React.FC<RegisterProps> = () => {
  return (
    <View style={{ width: '100%' }}>
      <Input placeholder="Telemóvel" />
      <Input placeholder="E-mail" />
    </View>
  );
};

export const Step4: React.FC<RegisterProps> = () => {
  return (
    <View style={{ width: '100%' }}>
      <Input placeholder="Palavra-passe" />
    </View>
  );
};
