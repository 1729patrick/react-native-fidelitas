import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
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
  const [now, setNow] = useState(new Date());
  const [today, setToday] = useState(getDay());

  function getDay() {
    return format(new Date(), 'EEEE').toLocaleLowerCase();
  }

  useEffect(() => {
    const timeout = setInterval(() => {
      setToday(getDay());
      setNow(new Date());
    }, 60000);

    return () => clearInterval(timeout);
  }, []);

  const workHours = days.map(day => ({
    day,
    ...restaurant?.workHours[day],
  }));

  const getTodayStyle = (day: keyof WorkHours, timeWindow?: string[]) => {
    if (today !== day || !timeWindow) {
      return;
    }

    const startDate = new Date();
    const endDate = new Date();
    const [start, end] = timeWindow;

    const [startHours, startMinutes] = start.split(':');
    const [endHours, endMinutes] = end.split(':');

    startDate.setHours(+startHours, +startMinutes);
    endDate.setHours(+endHours, +endMinutes);

    if (now >= startDate && now <= endDate) {
      return styles.today;
    }
  };

  const renderItem = ({
    breakfast,
    lunch,
    dinner,
    day,
  }: {
    breakfast?: string[];
    lunch?: string[];
    dinner?: string[];
    day: keyof WorkHours;
  }) => {
    const breakfastStyle = getTodayStyle(day, breakfast);
    const lunchStyle = getTodayStyle(day, lunch);
    const dinnerStyle = getTodayStyle(day, dinner);

    const todayStyle =
      breakfastStyle || lunchStyle || dinnerStyle ? styles.today : {};

    return (
      <View style={styles.item} key={day}>
        <Text style={[styles.title, todayStyle]}>
          {translate(day as TranslationKeyType)}
        </Text>
        <View style={styles.hours}>
          {breakfast?.length && (
            <Text style={[styles.description, breakfastStyle]}>
              {breakfast.join(' às ')}
            </Text>
          )}
          {lunch?.length && (
            <Text style={[styles.description, lunchStyle]}>
              {lunch.join(' às ')}
            </Text>
          )}
          {dinner?.length && (
            <Text style={[styles.description, dinnerStyle]}>
              {dinner.join(' às ')}
            </Text>
          )}
        </View>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.subtitle}>Horário de Trabalho</Text>

      {workHours.map(renderItem)}
    </View>
  );
};

export default WorkingHours;
