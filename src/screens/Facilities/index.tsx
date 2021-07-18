import React from 'react';
import { Text, ScrollView, StatusBar } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import styles from './styles';
import StyleGuide from '../../util/StyleGuide';
import Header from '../../components/atoms/Header';
import useHideTabBar from '../../hooks/useHideTabBar';
import { RectButton } from 'react-native-gesture-handler';

const facilities = [
  {
    title: 'Wifi',
    icon: (
      <MaterialIcon name="wifi" color={StyleGuide.palette.primary} size={27} />
    ),
  },
  {
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
    title: 'Bebidas alcoólica',
    icon: (
      <EntypoIcon name="drink" color={StyleGuide.palette.primary} size={23} />
    ),
  },
  {
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

type FacilitiesProps = {};

const Facilities: React.FC<FacilitiesProps> = () => {
  useHideTabBar();

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle="dark-content"
      />
      <Header title="Facilidades" elevation={2} />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        overScrollMode="never">
        {[...facilities, ...facilities, ...facilities, ...facilities].map(
          ({ title, icon }, index) => (
            <RectButton
              style={styles.item}
              key={index}
              rippleColor={StyleGuide.palette.primary}>
              <Text style={styles.itemTitle}>{title}</Text>
              {icon}
            </RectButton>
          ),
        )}
      </ScrollView>
    </>
  );
};

export default Facilities;
