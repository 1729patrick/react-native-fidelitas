import React from 'react';
import Logo from '../../components/atoms/Logo';
import RegisterForm from '../../components/molecules/forms/Register';
import Register from '../../components/templates/Register';

export default () => {
  return <Register logo={<Logo />} form={<RegisterForm signIn={() => {}} />} />;
};
