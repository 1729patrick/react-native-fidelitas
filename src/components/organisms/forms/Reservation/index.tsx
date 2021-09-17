import React, { useMemo } from 'react';
import { View } from 'react-native';
import styles from './styles';

import TimeSelect from '~/components/atoms/TimeSelect';
import IncrementDecrement from '~/components/atoms/IncrementDecrement';
import { useRestaurant } from '~/contexts/Restaurant';
import { getDay } from '~/util/Date';
import { add } from 'date-fns';
import { formatHumanTime } from '~/util/Formatters';

type Step2Props = {
  value: string;
  onChange: (value: string) => void;
};

export const Step2: React.FC<Step2Props> = ({ value, onChange }) => {
  const { restaurant } = useRestaurant();

  const hours = useMemo(() => {
    return restaurant?.workHours[getDay()] || {};
  }, [restaurant?.workHours]);

  const getSlots = ([start, end]: string[]) => {
    if (!start || !end) {
      return null;
    }

    const [startHours, startMinutes] = start.split(':');
    const [endHours, endMinutes] = end.split(':');

    const startDate = new Date();
    startDate.setHours(+startHours, +startMinutes);

    let endDate = new Date();
    endDate.setHours(+endHours, +endMinutes);
    endDate = add(endDate, { minutes: -30 });

    let slots = [];

    let date = startDate;

    while (date <= endDate) {
      slots.push(formatHumanTime(date));
      date = add(date, { minutes: 30 });
    }

    return slots;
  };

  const times = [
    {
      title: 'Pequeno almoço',
      style: {},
      slots: getSlots(hours.breakfast || []),
    },
    {
      title: 'Almoço',
      style: styles.dinner,
      slots: getSlots(hours.lunch || []),
    },
    {
      title: 'Jantar',
      style: styles.dinner,
      slots: getSlots(hours.dinner || []),
    },
  ];

  return (
    <>
      {times.map(time => (
        <View>
          {time.slots && (
            <TimeSelect
              title={time.title}
              value={value}
              onChange={onChange}
              slots={time.slots}
              style={time.style}
            />
          )}
        </View>
      ))}
    </>
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
