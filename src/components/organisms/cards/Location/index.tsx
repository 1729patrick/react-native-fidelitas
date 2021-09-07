import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Map from '~/components/molecules/Map';
import { useRestaurant } from '~/contexts/Restaurant';
import { formatAddress } from '~/util/Formatters';

import StyleGuide from '~/util/StyleGuide';
import styles from './styles';

const { width } = Dimensions.get('window');

type LocationProps = {
  openMap: () => void;
};

const Location: React.FC<LocationProps> = ({ openMap }) => {
  const { restaurant } = useRestaurant();

  const address = formatAddress(restaurant?.address);

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
