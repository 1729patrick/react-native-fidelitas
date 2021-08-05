import React from 'react';
import Header from '~/components/atoms/Header';
import useHideTabBar from '~/hooks/useHideTabBar';

const Basket = () => {
  useHideTabBar();
  return (
    <>
      <Header title="Cesto" />
    </>
  );
};

export default Basket;
