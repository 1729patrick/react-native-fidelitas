import React from 'react';
import { Text, View } from 'react-native';
import { useRestaurant, WorkHours } from '~/contexts/Restaurant';
import { translate, TranslationKeyType } from '~/i18n';
import styles from './styles';

const days: (keyof WorkHours)[] = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

const WorkingHours = () => {
  const { restaurant } = useRestaurant();

  const workHours = days.map(day => ({
    day,
    ...restaurant?.workHours[day],
  }));

  return (
    <View>
      <Text style={styles.subtitle}>Horário de Trabalho</Text>

      {workHours.map(({ breakfast, lunch, dinner, day }) => (
        <View style={styles.item} key={day}>
          <Text style={styles.title}>
            {translate(day as TranslationKeyType)}
          </Text>
          <View style={styles.hours}>
            {breakfast?.length && (
              <Text style={styles.description}>{breakfast.join(' às ')}</Text>
            )}
            {lunch?.length && (
              <Text style={styles.description}>{lunch.join(' às ')}</Text>
            )}
            {dinner?.length && (
              <Text style={styles.description}>{dinner.join(' às ')}</Text>
            )}
          </View>
        </View>
      ))}
    </View>
  );
};

export default WorkingHours;
