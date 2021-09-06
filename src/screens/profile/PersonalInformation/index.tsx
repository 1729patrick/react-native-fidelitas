import React, { useRef, useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { mask } from 'react-native-mask-text';
import TextButton from '~/components/atoms/buttons/TextButton';
import Header from '~/components/atoms/Header';
import Input from '~/components/atoms/Input';
import Password from '~/components/molecules/Password';
import { useAuth } from '~/contexts/Auth';
import useHideTabBar from '~/hooks/useHideTabBar';
import { RegisterFormType } from '~/screens/public/Register';
import { validateEmail } from '~/util/validations';
import styles from './styles';

const PersonalInformation = () => {
  const { user } = useAuth();

  useHideTabBar();
  const lastNameRef = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const currentPasswordRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const initialForm = {
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    phone: `${user?.phone}` || '',
    email: user?.email || '',
    currentPassword: '',
    password: '',
    restaurantId: 1,
  };

  const [values, setValues] = useState<RegisterFormType>(initialForm);

  const onChange = (key: string, value: string) => {
    setValues(values => ({ ...values, [key]: value }));
  };

  const isValid =
    !!values.firstName &&
    !!values.lastName &&
    !!values.phone &&
    validateEmail(values.email) &&
    !!values.currentPassword &&
    JSON.stringify(values) !== JSON.stringify(initialForm);

  return (
    <View>
      <Header
        title="Informações Pessoais"
        close
        RightContent={
          <TextButton
            title="Salvar"
            onPress={() => console.log('save')}
            disabled={!isValid}
          />
        }
      />
      <ScrollView
        overScrollMode="never"
        scrollEventThrottle={16}
        contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Seu nome</Text>
        <Input
          placeholder="Nome"
          onChangeText={value => onChange('firstName', value)}
          value={values.firstName}
          returnKeyType="next"
          onSubmitEditing={() => lastNameRef.current?.focus()}
          autoCompleteType="name"
          style={styles.firstInput}
        />
        <Input
          placeholder="Apelido"
          onChangeText={value => onChange('lastName', value)}
          value={values.lastName}
          ref={lastNameRef}
          returnKeyType="next"
          onSubmitEditing={() => phoneRef.current?.focus()}
          autoCompleteType="name"
          style={styles.firstInput}
        />

        <Text style={styles.title}>Seus contatos</Text>
        <Input
          placeholder="Telemóvel"
          returnKeyType="next"
          onChangeText={value => onChange('phone', value)}
          value={mask(values.phone, '+999 99999999999')}
          ref={phoneRef}
          onSubmitEditing={() => emailRef.current?.focus()}
          autoCompleteType="tel"
          keyboardType="phone-pad"
          mask="+999 99999999999"
          style={styles.firstInput}
        />
        <Input
          placeholder="E-mail"
          ref={emailRef}
          returnKeyType="next"
          value={values.email}
          onSubmitEditing={() => currentPasswordRef.current?.focus()}
          onChangeText={value => onChange('email', value)}
          autoCompleteType="email"
          keyboardType="email-address"
          autoCapitalize={'none'}
        />

        <Text style={styles.title}>Sua palavra-passe</Text>
        <Password
          onChangeText={value => onChange('currentPassword', value)}
          label="currentPassword"
          value={values.currentPassword}
          ref={currentPasswordRef}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current?.focus()}
          autoCompleteType="password"
          autoCorrect={false}
          style={styles.firstInput}
        />
        <Password
          onChangeText={value => onChange('password', value)}
          value={values.password}
          label="newPassword"
          ref={passwordRef}
          onSubmitEditing={() => {}}
          returnKeyType="send"
          autoCompleteType="password"
          autoCorrect={false}
          required={false}
        />
      </ScrollView>
    </View>
  );
};

export default PersonalInformation;
