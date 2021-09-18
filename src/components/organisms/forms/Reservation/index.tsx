import React, { useMemo } from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';

import TimeSelect from '~/components/atoms/TimeSelect';
import IncrementDecrement from '~/components/atoms/IncrementDecrement';
import { useRestaurant } from '~/contexts/Restaurant';
import { getDay } from '~/util/Date';
import { add } from 'date-fns';
import { formatHumanTime } from '~/util/Formatters';

type Step2Props = {
  value: {
    type: 'breakfast' | 'lunch' | 'dinner';
    time: string;
  };
  onChange: (key: string, value: string) => void;
  height: number;
  isToday: boolean;
};

export const Step2: React.FC<Step2Props> = ({
  value,
  onChange,
  height,
  isToday,
}) => {
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

    let startDate = new Date();
    const now = new Date();
    startDate.setHours(+startHours, +startMinutes);

    if (isToday && now > startDate) {
      startDate = add(now, { minutes: 30 });
    }

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

  const times = useMemo(
    () => [
      {
        title: 'breakfast',
        style: styles.content,
        slots: getSlots(hours.breakfast || []),
      },
      {
        title: 'lunch',
        style: styles.content,
        slots: getSlots(hours.lunch || []),
      },
      {
        title: 'dinner',
        style: styles.content,
        slots: getSlots(hours.dinner || []),
      },
    ],
    [isToday],
  );

  return (
    <View style={{ height }}>
      <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false}>
        {times.map(
          time =>
            !!time.slots?.length && (
              <TimeSelect
                key={time.title}
                title={time.title}
                value={value.time}
                onChange={value => {
                  onChange('time', value);
                  onChange('type', time.title);
                }}
                slots={time.slots}
                style={time.style}
              />
            ),
        )}
      </ScrollView>
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
