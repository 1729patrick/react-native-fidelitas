import { useRoute } from '@react-navigation/core';
import React, { useRef, useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { PaymentType } from '~/api/usePayments';

import TextButton from '~/components/atoms/buttons/TextButton';
import Header from '~/components/atoms/Header';
import Input from '~/components/atoms/Input';
import useHideTabBar from '~/hooks/useHideTabBar';
import {
  CC_CODE_MASK,
  CC_EXPIRATION_MASK,
  CC_NUMBER_MASK,
  validatePhone,
} from '~/util/validations';
import styles from './styles';

const PaymentForm = () => {
  useHideTabBar();

  const expirationDate = useRef<TextInput>(null);
  const secureCode = useRef<TextInput>(null);

  const { params } = useRoute();

  const initialForm = params?.initialForm || {};

  const [values, setValues] = useState<PaymentType>(initialForm);

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
    !!values.number &&
    !!values.expirationDate &&
    !!values.secureCode &&
    JSON.stringify(values) !== JSON.stringify(initialForm);

  const onSave = () => {
    console.log(values);
  };

  return (
    <>
      <Header
        title="Adicionar cartão"
        close
        RightContent={
          <TextButton title="Salvar" onPress={onSave} disabled={!isValid} />
        }
      />
      <ScrollView
        overScrollMode="never"
        scrollEventThrottle={16}
        contentContainerStyle={styles.contentContainer}>
        <Input
          placeholder="Número do cartão"
          onChangeText={value => onChange('card', value)}
          // value={values.number}
          returnKeyType="next"
          onSubmitEditing={() => expirationDate.current?.focus()}
          autoCompleteType="cc-number"
          keyboardType="numeric"
          style={styles.firstInput}
          mask={CC_NUMBER_MASK}
        />
        <View style={styles.expirationAndSecureCode}>
          <Input
            placeholder="Data expiração"
            returnKeyType="next"
            onChangeText={value =>
              onChange('phone', value, validatePhone(value, 'change'))
            }
            // value={values.expirationDate}
            ref={expirationDate}
            style={styles.expirationDate}
            onSubmitEditing={() => secureCode.current?.focus()}
            autoCompleteType="cc-exp"
            keyboardType="numeric"
            mask={CC_EXPIRATION_MASK}
          />
          <Input
            placeholder="Cód. segurança"
            onChangeText={value => onChange('line1', value)}
            // value={values.secureCode}
            returnKeyType="send"
            style={styles.secureCode}
            keyboardType="numeric"
            ref={secureCode}
            onSubmitEditing={onSave}
            mask={CC_CODE_MASK}
          />
        </View>

        <Text style={styles.disclaimer}>
          Fidelitas pode cobrar um valor pequeno para confirmar os detalhes do
          cartão. Isso vai ser imediatamente estornado.
        </Text>
      </ScrollView>
    </>
  );
};

export default PaymentForm;
