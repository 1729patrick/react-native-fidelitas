import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Map from '~/components/molecules/Map';
import { useRestaurant } from '~/contexts/Restaurant';
import StyleGuide from '~/util/StyleGuide';
import styles from './styles';

const { width } = Dimensions.get('window');

type LocationProps = {
  openMap: () => void;
};

const Location: React.FC<LocationProps> = ({ openMap }) => {
  const { restaurant } = useRestaurant();

  const address = [
    restaurant?.address.line1,
    restaurant?.address.line2,
    restaurant?.address.postalCode,
    restaurant?.address.city,
    restaurant?.address.country,
  ]
    .filter(v => v)
    .join(', ');

  return (
    <View>
      <Text style={styles.subtitle}>Localização</Text>

      <Text style={styles.address}>{address}</Text>
      <Map
        width={width - StyleGuide.spacing * 6}
        height={width - StyleGuide.spacing * 6}
        openMap={openMap}
      />
    </View>
  );
};

export default Location;
