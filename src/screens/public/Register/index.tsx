import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { StatusBar } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import { StackNavigationProp } from '@react-navigation/stack';
import useStatusBar from '~/hooks/useStatusBar';
import Register, { RegisterHandler } from '~/components/templates/Register';
import Header from '~/components/atoms/Header';
import Logo from '~/components/atoms/Logo';
import { Step1, Step2, Step3 } from '~/components/organisms/forms/Register';
import RegisterStep from '~/components/organisms/RegisterStep';
import { useBackHandler } from '~/hooks/useBackHandler';
import { useAuth } from '~/contexts/Auth';
import { validateEmail, validatePhone } from '~/util/validations';

export type RegisterFormType = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  currentPassword?: string;
  password: string;
  restaurantId: number;
};

export default () => {
  useStatusBar(true);

  const [loading, setLoading] = useState(false);
  const currentIndexRef = useRef(0);
  const registerRef = useRef<RegisterHandler>(null);
  const { pop } = useNavigation<StackNavigationProp<any>>();
  const { register } = useAuth();

  const [values, setValues] = useState<RegisterFormType>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    restaurantId: 1,
  });

  const onComplete = async () => {
    setLoading(true);

    const success = await register(values);

    setLoading(success);
  };

  const onScrollTo = (index: number) => {
    currentIndexRef.current = index;
    registerRef.current?.scrollToIndex(index);
  };

  const onBack = () => {
    if (currentIndexRef.current - 1 < 0) {
      pop();
      return;
    }

    onScrollTo(currentIndexRef.current - 1);
  };

  useBackHandler(() => {
    if (currentIndexRef.current - 1 >= 0) {
      onScrollTo(currentIndexRef.current - 1);
      return true;
    }

    return false;
  });

  const onChange = (key: string, value: string, valid: boolean = true) => {
    if (valid) {
      setValues(values => ({ ...values, [key]: value }));
    }
  };

  const getNextStepEnabled = (step: 1 | 2 | 3) => {
    const validations = {
      1: () => !!values.firstName && !!values.lastName,
      2: () => validatePhone(values.phone) && validateEmail(values.email),
      3: () => !!values.password,
    };

    return validations[step]();
  };

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle="dark-content"
      />
      <Header backgroundColor={'transparent'} onBack={onBack} />
      <Register
        ref={registerRef}
        logo={<Logo size={0.4} style={styles.logo} />}
        steps={[
          <RegisterStep
            title="Crie uma Conta Subway"
            description="Introduza o seu nome"
            confirmTitle={'Prosseguir'}
            confirmIcon={<Icon name="arrowright" size={23} color="#fff" />}
            form={
              <Step1
                onChange={onChange}
                onNext={() => getNextStepEnabled(1) && onScrollTo(1)}
              />
            }
            onNext={() => onScrollTo(1)}
            contentStyle={styles.stepContainer}
            nextEnabled={getNextStepEnabled(1)}
          />,
          <RegisterStep
            title="Seus contatos"
            description="Introduza o seu número de telemóvel e e-mail"
            confirmTitle={'Prosseguir'}
            confirmIcon={<Icon name="arrowright" size={23} color="#fff" />}
            form={
              <Step2
                onChange={onChange}
                onNext={() => getNextStepEnabled(2) && onScrollTo(2)}
              />
            }
            onNext={() => onScrollTo(2)}
            contentStyle={styles.stepContainer}
            nextEnabled={getNextStepEnabled(2)}
          />,
          <RegisterStep
            title="Crie a palavra-passe"
            description="Crie uma palavra-passe forte com mistura de letras e números"
            confirmTitle={'Finalizar'}
            confirmIcon={<Icon name="check" size={23} color="#fff" />}
            form={
              <Step3
                onChange={onChange}
                onNext={() => getNextStepEnabled(3) && onComplete()}
              />
            }
            onNext={onComplete}
            contentStyle={styles.stepContainer}
            nextEnabled={getNextStepEnabled(3)}
            loading={loading}
          />,
        ]}
      />
    </>
  );
};
