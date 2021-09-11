import { useRoute } from '@react-navigation/core';
import React, { useRef, useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { AddressType } from '~/api/useAddresses';

import TextButton from '~/components/atoms/buttons/TextButton';
import Checkbox from '~/components/atoms/Checkbox';
import Header from '~/components/atoms/Header';
import Input from '~/components/atoms/Input';
import useHideTabBar from '~/hooks/useHideTabBar';
import { formatPhone, formatPostalCode } from '~/util/Formatters';
import {
  PHONE_MASK,
  POSTAL_CODE_MASK,
  validatePhone,
  validatePostalCode,
} from '~/util/validations';
import styles from './styles';

const AddressForm = () => {
  useHideTabBar();

  const phoneRef = useRef<TextInput>(null);
  const line1Ref = useRef<TextInput>(null);
  const line2Ref = useRef<TextInput>(null);
  const postalCodeRef = useRef<TextInput>(null);
  const cityRef = useRef<TextInput>(null);
  const countryRef = useRef<TextInput>(null);
  const notesRef = useRef<TextInput>(null);

  const { params } = useRoute();

  const initialForm = params?.initialForm || {};

  const [values, setValues] = useState<AddressType>(initialForm);

  const onChange = (
    key: string,
    value: string | boolean,
    valid: boolean = true,
  ) => {
    if (valid) {
      setValues(values => ({ ...values, [key]: value }));
    }
  };

  const isValid =
    !!values.line1 &&
    !!values.city &&
    !!values.country &&
    !!values.responsible &&
    validatePhone(values.phone) &&
    validatePostalCode(values.postalCode) &&
    JSON.stringify(values) !== JSON.stringify(initialForm);

  const onSave = () => {
    console.log(values);
  };

  return (
    <View>
      <Header
        title="Adicionar morada"
        close
        RightContent={
          <TextButton title="Salvar" onPress={onSave} disabled={!isValid} />
        }
      />
      <ScrollView
        overScrollMode="never"
        scrollEventThrottle={16}
        contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Responsável</Text>
        <Input
          placeholder="Nome"
          onChangeText={value => onChange('responsible', value)}
          value={values.responsible}
          returnKeyType="next"
          onSubmitEditing={() => phoneRef.current?.focus()}
          autoCompleteType="name"
          style={styles.firstInput}
        />
        <Input
          placeholder="Telemóvel"
          returnKeyType="next"
          onChangeText={value =>
            onChange('phone', value, validatePhone(value, 'change'))
          }
          value={formatPhone(values.phone)}
          ref={phoneRef}
          onSubmitEditing={() => line1Ref.current?.focus()}
          autoCompleteType="tel"
          keyboardType="phone-pad"
          mask={PHONE_MASK}
        />
        <Text style={styles.title}>Morada de entrega</Text>
        <Input
          placeholder="Morada linha 1"
          onChangeText={value => onChange('line1', value)}
          value={values.line1}
          returnKeyType="next"
          autoCompleteType="street-address"
          ref={line1Ref}
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
          onChangeText={value =>
            onChange('postalCode', value, validatePostalCode(value, 'change'))
          }
          value={formatPostalCode(values.postalCode)}
          ref={postalCodeRef}
          onSubmitEditing={() => cityRef.current?.focus()}
          keyboardType="numeric"
          mask={POSTAL_CODE_MASK}
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
          required={false}
        />

        <Checkbox
          checked={values.primary}
          onChange={value => onChange('primary', value)}
          type={'square'}
          label={'Morada principal'}
        />
      </ScrollView>
    </View>
  );
};

export default AddressForm;
