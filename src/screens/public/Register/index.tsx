import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
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

export default () => {
  useStatusBar(true);

  const currentIndexRef = useRef(0);
  const registerRef = useRef<RegisterHandler>(null);
  const { replace, pop } = useNavigation<StackNavigationProp<any>>();

  const onComplete = () => {
    replace('Auth');
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
            form={<Step1 />}
            onNext={() => onScrollTo(1)}
            contentStyle={styles.stepContainer}
          />,
          <RegisterStep
            title="Seus contatos"
            description="Introduza o seu número de telemóvel e e-mail"
            confirmTitle={'Prosseguir'}
            confirmIcon={<Icon name="arrowright" size={23} color="#fff" />}
            form={<Step2 />}
            onNext={() => onScrollTo(2)}
            contentStyle={styles.stepContainer}
          />,
          <RegisterStep
            title="Crie a palavra-passe"
            description="Crie uma palavra-passe forte com mistura de letras e números"
            confirmTitle={'Finalizar'}
            confirmIcon={<Icon name="check" size={23} color="#fff" />}
            form={<Step3 />}
            onNext={onComplete}
            contentStyle={styles.stepContainer}
          />,
        ]}
      />
    </>
  );
};
