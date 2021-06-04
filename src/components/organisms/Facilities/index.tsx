import React from 'react';
import { View, Text } from 'react-native';
import RectButton from '../../atoms/buttons/RectButton';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import StyleGuide from '../../../util/StyleGuide';
import styles from './styles';

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
];

type FacilitiesProps = {
  openAll: () => void;
};

const Facilities: React.FC<FacilitiesProps> = ({ openAll }) => {
  return (
    <View>
      <Text style={styles.subtitle}>Facilidades</Text>

      {facilities.map(({ title, icon }) => (
        <View style={styles.item} key={title}>
          <Text style={styles.itemTitle}>{title}</Text>
          {icon}
        </View>
      ))}

      <RectButton
        title="Ver todas as 23 facilidades"
        onPress={openAll}
        borderRadius={8}
        containerStyle={styles.buttonContainer}
        titleStyle={styles.buttonTitle}
        backgroundColor={StyleGuide.palette.primary}
        outline
      />
    </View>
  );
};

export default Facilities;
