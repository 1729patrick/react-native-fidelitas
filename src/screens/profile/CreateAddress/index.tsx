import React, { useRef, useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { AddressType } from '~/api/useAddresses';

import TextButton from '~/components/atoms/buttons/TextButton';
import Header from '~/components/atoms/Header';
import Input from '~/components/atoms/Input';
import Password from '~/components/molecules/Password';
import useHideTabBar from '~/hooks/useHideTabBar';
import { RegisterFormType } from '~/screens/public/Register';
import { formatPhone, formatPostalCode } from '~/util/Formatters';
import { validateEmail } from '~/util/validations';
import styles from './styles';

const CreateAddress = () => {
  useHideTabBar();

  const line2Ref = useRef<TextInput>(null);
  const postalCodeRef = useRef<TextInput>(null);
  const cityRef = useRef<TextInput>(null);
  const countryRef = useRef<TextInput>(null);
  const notesRef = useRef<TextInput>(null);
  const responsibleRef = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);

  const initialForm = {
    password: '',
    restaurantId: 1,
  };

  const [values, setValues] = useState<AddressType>(initialForm);

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
        title="Adicionar morada"
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
        <Text style={styles.title}>Morada de entrega</Text>
        <Input
          placeholder="Morada linha 1"
          onChangeText={value => onChange('line1', value)}
          value={values.line1}
          returnKeyType="next"
          autoCompleteType="street-address"
          onSubmitEditing={() => line2Ref.current?.focus()}
          style={styles.firstInput}
        />
        <Input
          placeholder="Morada linha 2"
          onChangeText={value => onChange('line2', value)}
          value={values.line2}
          ref={line2Ref}
          returnKeyType="next"
          onSubmitEditing={() => postalCodeRef.current?.focus()}
          autoCompleteType="street-address"
          required={false}
        />

        <Input
          placeholder="Código postal"
          returnKeyType="next"
          onChangeText={value => onChange('postalCode', value)}
          value={formatPostalCode(values.postalCode)}
          ref={postalCodeRef}
          onSubmitEditing={() => cityRef.current?.focus()}
          keyboardType="numeric"
          mask="9999-999"
          autoCompleteType="postal-code"
        />
        <Input
          placeholder="Cidade"
          onChangeText={value => onChange('city', value)}
          value={values.city}
          ref={cityRef}
          returnKeyType="next"
          onSubmitEditing={() => countryRef.current?.focus()}
        />

        <Input
          placeholder="País"
          onChangeText={value => onChange('country', value)}
          value={values.country}
          ref={countryRef}
          returnKeyType="next"
          onSubmitEditing={() => notesRef.current?.focus()}
        />
        <Input
          placeholder="Observações"
          onChangeText={value => onChange('notes', value)}
          value={values.notes}
          ref={notesRef}
          returnKeyType="next"
          onSubmitEditing={() => responsibleRef.current?.focus()}
          required={false}
        />
        <Text style={styles.title}>Responsável</Text>
        <Input
          placeholder="Nome"
          onChangeText={value => onChange('responsible', value)}
          value={values.responsible}
          ref={responsibleRef}
          returnKeyType="next"
          onSubmitEditing={() => phoneRef.current?.focus()}
          autoCompleteType="name"
          style={styles.firstInput}
        />
        <Input
          placeholder="Telemóvel"
          returnKeyType="next"
          onChangeText={value => onChange('phone', value)}
          value={formatPhone(values.phone)}
          ref={phoneRef}
          onSubmitEditing={() => {}}
          autoCompleteType="tel"
          keyboardType="phone-pad"
          mask="+999 99999999999"
        />
      </ScrollView>
    </View>
  );
};

export default CreateAddress;
