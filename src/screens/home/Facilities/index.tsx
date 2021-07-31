import React from 'react';
import { StatusBar } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FacilitiesList from '~/components/organisms/lists/Facilities';
import styles from './styles';
import Facilities from '~/components/templates/Facilities';
import StyleGuide from '~/util/StyleGuide';
import useHideTabBar from '~/hooks/useHideTabBar';
import Header from '~/components/atoms/Header';

const facilities = [
  {
    id: 'Wifi',
    title: 'Wifi',
    icon: (
      <MaterialIcon name="wifi" color={StyleGuide.palette.primary} size={27} />
    ),
  },
  {
    id: 'Permitido Fumar',
    title: 'Permitido Fumar',
    icon: (
      <MaterialIcon
        name="smoking-rooms"
        color={StyleGuide.palette.primary}
        size={27}
      />
    ),
  },
  {
    id: 'Bebidas alcoólica',
    title: 'Bebidas alcoólica',
    icon: (
      <EntypoIcon name="drink" color={StyleGuide.palette.primary} size={23} />
    ),
  },
  {
    id: 'Bom para almoçar',
    title: 'Bom para almoçar',
    icon: (
      <MaterialIcon
        name="local-dining"
        color={StyleGuide.palette.primary}
        size={27}
      />
    ),
  },
  {
    id: 'Bom para jantar',
    title: 'Bom para jantar',
    icon: (
      <MaterialIcon
        name="brunch-dining"
        color={StyleGuide.palette.primary}
        size={27}
      />
    ),
  },
  {
    id: 'Aceitamos Multibanco',
    title: 'Aceitamos Multibanco',
    icon: (
      <MaterialIcon
        name="credit-card"
        color={StyleGuide.palette.primary}
        size={27}
      />
    ),
  },
  {
    id: 'Aceitamos Dinheiro',
    title: 'Aceitamos Dinheiro',
    icon: (
      <MaterialIcon
        name="attach-money"
        color={StyleGuide.palette.primary}
        size={27}
      />
    ),
  },
];

export default () => {
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
        header={<Header title="Facilidades" />}
        list={
          <FacilitiesList data={facilities} style={styles.contentContainer} />
        }
      />
    </>
  );
};
