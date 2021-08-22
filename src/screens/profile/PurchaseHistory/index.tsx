import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import Header from '~/components/atoms/Header';
import PurchaseHistoriesList from '~/components/organisms/lists/PurchaseHistories';

import useHideTabBar from '~/hooks/useHideTabBar';
import styles from './styles';

const PurchaseHistory = () => {
  const { navigate } = useNavigation<StackNavigationProp<any>>();
  useHideTabBar();

  const openDetails = () => {
    navigate('PurchaseDetails', { editable: false });
  };

  return (
    <>
      <Header title="Histórico de Pedidos" close />
      <PurchaseHistoriesList
        onPress={openDetails}
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        style={styles.contentContainer}
      />
    </>
  );
};

export default PurchaseHistory;
