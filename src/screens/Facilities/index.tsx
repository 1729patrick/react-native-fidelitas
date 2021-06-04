import React from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import styles from './styles';
import StyleGuide from '../../util/StyleGuide';
import Header from '../../components/atoms/Header';

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
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle="dark-content"
      />
      <Header title="Facilidades" elevation={1} />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        overScrollMode="never">
        {[...facilities, ...facilities, ...facilities, ...facilities].map(
          ({ title, icon }, index) => (
            <View style={styles.item} key={index}>
              <Text style={styles.itemTitle}>{title}</Text>
              {icon}
            </View>
          ),
        )}
      </ScrollView>
    </>
  );
};

export default Facilities;
