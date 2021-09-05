import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import RectButton from '~/components/atoms/buttons/RectButton';
import StyleGuide from '~/util/StyleGuide';
import { useRestaurant } from '~/contexts/Restaurant';
import FacilityItem from '~/components/molecules/items/FacilityItem';

type FacilitiesProps = {
  openAll: () => void;
};

const Facilities: React.FC<FacilitiesProps> = ({ openAll }) => {
  let { restaurant } = useRestaurant();

  const size = useMemo(
    () => restaurant?.facilities.length || 0,
    [restaurant?.facilities.length],
  );

  const facilities = useMemo(
    () => restaurant?.facilities.slice(0, 5),
    [restaurant?.facilities],
  );

  return (
    <View>
      <Text style={styles.subtitle}>Facilidades</Text>

      {facilities?.map(facility => (
        <FacilityItem
          key={facility.title}
          style={styles.facility}
          {...facility}
        />
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
