import React from 'react';
import { StatusBar } from 'react-native';

import FacilitiesList from '~/components/organisms/lists/Facilities';
import styles from './styles';
import Facilities from '~/components/templates/Facilities';
import useHideTabBar from '~/hooks/useHideTabBar';
import Header from '~/components/atoms/Header';
import { useRestaurant } from '~/contexts/Restaurant';

export default () => {
  const { restaurant } = useRestaurant();
  useHideTabBar();

  return (
    <>
      <Facilities
        statusBar={
          <StatusBar
            translucent
            backgroundColor="rgba(0, 0, 0, 0)"
            barStyle="dark-content"
          />
        }
        header={<Header title="Facilidades" close />}
        list={
          <FacilitiesList
            data={restaurant?.facilities || []}
            style={styles.contentContainer}
          />
        }
      />
    </>
  );
};
