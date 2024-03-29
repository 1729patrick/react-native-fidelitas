import React, { useRef } from 'react';
import { TextInput, View } from 'react-native';
import styles from './styles';
import Input from '../../../atoms/Input';

import Password from '~/components/molecules/Password';
import { PHONE_MASK, validatePhone } from '~/util/validations';

type RegisterProps = {
  signIn?: (args: any) => void;
  onNext: () => void;
  onChange: (key: string, value: any, valid?: boolean) => void;
};

export const Step1: React.FC<RegisterProps> = ({ onNext, onChange }) => {
  const lastNameRef = useRef<TextInput>(null);

  return (
    <View style={styles.container}>
      <Input
        placeholder="Nome"
        onChangeText={value => onChange('firstName', value)}
        returnKeyType="next"
        onSubmitEditing={() => lastNameRef.current?.focus()}
        autoCompleteType="name"
      />
      <Input
        placeholder="Apelido"
        onChangeText={value => onChange('lastName', value)}
        ref={lastNameRef}
        returnKeyType="next"
        onSubmitEditing={onNext}
        autoCompleteType="name"
      />
    </View>
  );
};

export const Step2: React.FC<RegisterProps> = ({ onNext, onChange }) => {
  const emailRef = useRef<TextInput>(null);

  return (
    <View style={styles.container}>
      <Input
        placeholder="Telemóvel"
        returnKeyType="next"
        onSubmitEditing={() => emailRef.current?.focus()}
        onChangeText={value =>
          onChange('phone', value, validatePhone(value, 'change'))
        }
        autoCompleteType="tel"
        keyboardType="phone-pad"
        mask={PHONE_MASK}
      />
      <Input
        placeholder="E-mail"
        ref={emailRef}
        returnKeyType="next"
        onSubmitEditing={onNext}
        onChangeText={value => onChange('email', value)}
        autoCompleteType="email"
        keyboardType="email-address"
        autoCapitalize={'none'}
      />
    </View>
  );
};

export const Step3: React.FC<RegisterProps> = ({ onNext, onChange }) => {
  return (
    <View style={styles.container}>
      <Password
        onChangeText={value => onChange('password', value)}
        onSubmitEditing={onNext}
        autoCompleteType="password"
        autoCorrect={false}
      />
    </View>
  );
};
