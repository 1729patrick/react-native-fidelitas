import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import Logo from '../../components/atoms/Logo';
import { Step1, Step2, Step3 } from '../../components/molecules/forms/Register';
import RegisterStep from '../../components/organisms/RegisterStep';
import Register, { RegisterHandler } from '../../components/templates/Register';

export default () => {
  const registerRef = useRef<RegisterHandler>(null);
  const { replace } = useNavigation();

  const onComplete = () => {
    replace('Auth');
  };

  const onScrollTo = (index: number) => {
    registerRef.current?.scrollToIndex(index);
  };

  return (
    <Register
      ref={registerRef}
      logo={<Logo size={0.4} style={{ width: '100%' }} />}
      steps={[
        <RegisterStep
          title="Crie uma Conta Subway"
          description="Introduza o seu nome"
          confirmTitle={'Prosseguir'}
          form={<Step1 />}
          onNext={() => onScrollTo(1)}
        />,
        <RegisterStep
          title="Seus contatos"
          description="Introduza o seu número de telemóvel e e-mail"
          confirmTitle={'Prosseguir'}
          form={<Step2 />}
          onNext={() => onScrollTo(2)}
        />,
        <RegisterStep
          title="Crie a palavra-passe"
          description="Crie uma palavra-passe forte com mistura de letras e números"
          confirmTitle={'Finalizar'}
          form={<Step3 />}
          onNext={onComplete}
        />,
      ]}
    />
  );
};
