import React, { useEffect, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { useRestaurant, WorkHour, WorkHours } from '~/contexts/Restaurant';
import StyleGuide from '~/util/StyleGuide';
import styles from './styles';

import { format } from 'date-fns';

const CompanyStatus = () => {
  const { restaurant } = useRestaurant();
  const [now, setNow] = useState(new Date());
  const [day, setDay] = useState(getDay());

  function getDay() {
    return format(new Date(), 'EEEE').toLocaleLowerCase();
  }

  const hours = useMemo(() => {
    return (restaurant?.workHours[day as keyof WorkHours] as WorkHour) || {};
  }, [day, restaurant?.workHours]);

  const timeWindow = useMemo(() => {
    const startDate = new Date();
    const endDate = new Date();

    for (let [start, end] of Object.values(hours)) {
      const [startHours, startMinutes] = start.split(':');
      const [endHours, endMinutes] = end.split(':');

      startDate.setMinutes(+startMinutes);
      startDate.setHours(+startHours);

      endDate.setMinutes(+endMinutes);
      endDate.setHours(+endHours);

      if (now >= startDate && now <= endDate) {
        return [start, end];
      }
    }
  }, [hours, now]);

  const nextEvent = useMemo(() => {
    if (timeWindow) {
      const [_, end] = timeWindow;

      return `Fecha hoje às ${end}`;
    }

    const startDate = new Date();
    const endDate = new Date();

    const values = [hours.breakfast, hours.lunch, hours.dinner].filter(
      v => v,
    ) as string[][];

    for (const [index, [_, end]] of values.entries()) {
      const [endHours, endMinutes] = end.split(':');

      const [nextStart] = values[index + 1] || [];
      if (!nextStart) {
        continue;
      }

      const [startHours, startMinutes] = nextStart?.split(':') || [];

      startDate.setMinutes(+startMinutes);
      startDate.setHours(+startHours);

      endDate.setMinutes(+endMinutes);
      endDate.setHours(+endHours);

      if (now >= endDate && now <= startDate) {
        return `Abre hoje às ${nextStart}`;
      }
    }

    const startTimes = values.map(([start]) => {
      const [startHours, startMinutes] = start?.split(':');

      startDate.setMinutes(+startMinutes);
      startDate.setHours(+startHours);

      return startDate.getTime();
    });

    const nextStartTime = Math.min(...startTimes);

    const [nextStart] =
      values.find(([start]) => {
        const [startHours, startMinutes] = start?.split(':');

        startDate.setMinutes(+startMinutes);
        startDate.setHours(+startHours);

        return startDate.getTime() === nextStartTime;
      }) || [];

    if (nextStart) {
      return `Abre amanhã às ${nextStart}`;
    }
  }, [hours.breakfast, hours.dinner, hours.lunch, now, timeWindow]);

  useEffect(() => {
    const timeout = setInterval(() => {
      setNow(new Date());
      setDay(getDay());
    }, 60000);

    return () => clearInterval(timeout);
  }, []);

  return (
    <View>
      <View style={styles.areas}>
        <Text style={styles.area}>{restaurant?.description}</Text>
      </View>

      <Text style={[StyleGuide.typography.caption]}>
        <Text
          style={[
            StyleGuide.typography.caption,
            timeWindow ? styles.opened : styles.closed,
          ]}>
          {timeWindow ? 'Aberto' : 'Fechado'}
        </Text>{' '}
        • {nextEvent}
      </Text>
    </View>
  );
};

export default CompanyStatus;
