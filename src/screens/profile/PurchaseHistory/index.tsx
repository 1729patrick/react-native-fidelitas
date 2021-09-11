import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import Header from '~/components/atoms/Header';
import PurchaseHistoriesList from '~/components/organisms/lists/PurchaseHistories';
import usePurchases, { PurchaseType } from '~/api/usePurchases';
import useHideTabBar from '~/hooks/useHideTabBar';
import styles from './styles';

const PurchaseHistory = () => {
  const { purchases } = usePurchases();
  const { navigate } = useNavigation<StackNavigationProp<any>>();
  useHideTabBar();

  const openDetails = (purchase: PurchaseType) => {
    navigate('PurchaseDetails', { editable: false, purchase });
  };

  return (
    <>
      <Header title="Histórico de pedidos" close />
      <PurchaseHistoriesList
        onPress={openDetails}
        data={purchases || []}
        style={styles.contentContainer}
      />
    </>
  );
};

export default PurchaseHistory;
