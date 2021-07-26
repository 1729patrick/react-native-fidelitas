import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

import TimeSelect from '~/components/atoms/TimeSelect';
import IncrementDecrement from '~/components/atoms/IncrementDecrement';

export const Step2: React.FC<{}> = () => {
  return (
    <View>
      <TimeSelect
        title="Almoço"
        slots={[
          '12h:00m',
          '12h:30m',
          '13h:00m',
          '13h:30m',
          '14h:00m',
          '14h:30m',
        ]}
      />

      <TimeSelect
        title="Jantar"
        style={styles.dinner}
        slots={[
          '17h:00m',
          '17h:30m',
          '18h:00m',
          '18h:30m',
          '19h:00m',
          '19h:30m',
        ]}
      />
    </View>
  );
};

export const Step3: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <IncrementDecrement
        title="Adultos"
        description="Idades a partir dos 13"
      />

      <IncrementDecrement
        title="Crianças"
        description="Entre os 2 e 12"
        style={styles.incrementDecrement}
      />
      <IncrementDecrement
        title="Bebés"
        description="Menor de 2"
        style={styles.incrementDecrement}
      />
    </View>
  );
};
