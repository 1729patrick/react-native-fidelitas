import React from 'react';
import { View } from 'react-native';
import styles from './styles';

import TimeSelect from '~/components/atoms/TimeSelect';
import IncrementDecrement from '~/components/atoms/IncrementDecrement';

type Step2Props = {
  value: string;
  onChange: (value: string) => void;
};

export const Step2: React.FC<Step2Props> = ({ value, onChange }) => {
  return (
    <View>
      <TimeSelect
        title="Almoço"
        value={value}
        onChange={onChange}
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
        value={value}
        onChange={onChange}
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

type Step3Props = {
  onChange: (key: 'kids' | 'babies' | 'adults', value: number) => void;
  value: { kids: number; babies: number; adults: number };
};

export const Step3: React.FC<Step3Props> = ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <IncrementDecrement
        title="Adultos"
        description="Idades a partir dos 13"
        onChange={value => onChange('adults', value)}
        value={value.adults}
      />

      <IncrementDecrement
        title="Crianças"
        description="Entre os 2 e 12"
        style={styles.incrementDecrement}
        onChange={value => onChange('kids', value)}
        value={value.kids}
      />
      <IncrementDecrement
        title="Bebés"
        description="Menor de 2"
        style={styles.incrementDecrement}
        onChange={value => onChange('babies', value)}
        value={value.babies}
      />
    </View>
  );
};
