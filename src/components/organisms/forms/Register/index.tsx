import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Input from '../../../atoms/Input';

type RegisterProps = {
  signIn?: (args: any) => void;
};

export const Step1: React.FC<RegisterProps> = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="Nome" />
      <Input placeholder="Apelido" />
    </View>
  );
};

export const Step2: React.FC<RegisterProps> = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="Telemóvel" />
      <Input placeholder="E-mail" />
    </View>
  );
};

export const Step3: React.FC<RegisterProps> = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="Palavra-passe" />
    </View>
  );
};
