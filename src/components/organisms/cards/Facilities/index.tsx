import React from 'react';
import { View, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import styles from './styles';
import RectButton from '~/components/atoms/buttons/RectButton';
import StyleGuide from '~/util/StyleGuide';
import { useRestaurant } from '~/contexts/Restaurant';

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
  let { restaurant } = useRestaurant();

  const size = restaurant?.facilities.length || 0;
  const facilities = restaurant?.facilities.slice(0, 5);

  return (
    <View>
      <Text style={styles.subtitle}>Facilidades</Text>

      {facilities?.map(({ title, icon }) => (
        <View style={styles.item} key={title}>
          <Text style={styles.itemTitle}>{title}</Text>
          {/* {icon} */}
          <MaterialIcon
            name="wifi"
            color={StyleGuide.palette.primary}
            size={27}
          />
        </View>
      ))}

      {size > 5 && (
        <RectButton
          title={`Ver todas as ${size} facilidades`}
          onPress={openAll}
          borderRadius={8}
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
          backgroundColor={StyleGuide.palette.primary}
          outline
        />
      )}
    </View>
  );
};

export default Facilities;
