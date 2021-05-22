import React from 'react';
import Logo from '../../components/atoms/Logo';
import {
  Step1,
  Step2,
  Step3,
  Step4,
} from '../../components/molecules/forms/Register';
import RegisterStep from '../../components/organisms/RegisterStep';
import Register from '../../components/templates/Register';

export default () => {
  return (
    <Register
      logo={<Logo size={0.4} />}
      steps={[
        <RegisterStep
          title="Crie uma Conta Subway"
          description="Introduza o seu nome"
          form={<Step1 />}
        />,
        <RegisterStep
          title="Informações básicas"
          description="Introduza a sua data de nascimento e seu género"
          form={<Step2 />}
        />,
        <RegisterStep
          title="Seus contatos"
          description="Introduza o seu número de telemóvel e e-mail"
          form={<Step3 />}
        />,
        <RegisterStep
          title="Crie a palavra-passe"
          description="Crie uma palavra-passe forte com mistura de letras e números"
          form={<Step4 />}
        />,
      ]}
    />
  );
};
