import React from 'react';
import Header from '~/components/atoms/Header';
import TermsAndPrivacy from '~/components/templates/TermsAndPrivacy';
import useHideTabBar from '~/hooks/useHideTabBar';

export default () => {
  useHideTabBar();

  return (
    <>
      <Header title="Termos e Privacidade" />
      <TermsAndPrivacy />
    </>
  );
};
