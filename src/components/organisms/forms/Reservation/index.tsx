import React, { useMemo } from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './styles';

import TimeSelect from '~/components/atoms/TimeSelect';
import IncrementDecrement from '~/components/atoms/IncrementDecrement';
import { useRestaurant } from '~/contexts/Restaurant';
import { getDay } from '~/util/Date';
import { add } from 'date-fns';
import {
  formatDate,
  formatHumanTime,
  formatNumberOfPerson,
} from '~/util/Formatters';
import Input from '~/components/atoms/Input';
import { translate, TranslationKeyType } from '~/i18n';
import {
  DURATION_BETWEEN_RESERVE_AND_NOW,
  DURATION_BETWEEN_RESERVE_AND_RESTAURANT_CLOSE,
} from './constants';

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

    let now = new Date();

    let startDate = new Date();
    startDate.setHours(+startHours, +startMinutes);

    let endDate = new Date();
    endDate.setHours(+endHours, +endMinutes);
    endDate = add(endDate, {
      minutes: -DURATION_BETWEEN_RESERVE_AND_RESTAURANT_CLOSE,
    });

    let slots = [];

    let date = startDate;

    while (date <= endDate) {
      if (
        !isToday ||
        (isToday &&
          date >= add(now, { minutes: DURATION_BETWEEN_RESERVE_AND_NOW }))
      ) {
        slots.push(formatHumanTime(date));
      }

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
      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        style={styles.contentContainer}>
        {times.map(
          time =>
            !!time.slots?.length && (
              <TimeSelect
                key={time.title}
                title={translate(time.title as TranslationKeyType)}
                value={value.time}
                onChange={value => {
                  onChange('time', value);
                  onChange('type', time.title);
                }}
                // slots={[...time.slots, ...time.slots]}
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

type Step4Props = {
  onChange: (key: 'clientNotes', value: string) => void;
  values: any;
};

export const Step4: React.FC<Step4Props> = ({ values, onChange }) => {
  const data = [
    {
      title: 'date',
      value: formatDate(values.date),
    },
    {
      title: 'time',
      value: values.time,
    },
    {
      title: 'peoples',
      value: formatNumberOfPerson(values),
    },
  ];
  return (
    <View style={[styles.container]}>
      <View>
        {data.map(({ title, value }) => (
          <View style={styles.line} key={title}>
            <Text style={styles.title}>
              {translate(title as TranslationKeyType)}
            </Text>
            <Text style={styles.description}>{value}</Text>
          </View>
        ))}
      </View>
      <Input
        placeholder="Notas (Opcional)"
        value={values.clientNotes}
        multiline
        style={{ height: 70 }}
        returnKeyType="next"
        autoCompleteType="name"
        onChangeText={value => onChange('clientNotes', value)}
      />
    </View>
  );
};
