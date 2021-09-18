import React, { useMemo } from 'react';
import { CalendarList, DateObject } from 'react-native-calendars';
import StyleGuide from '~/util/StyleGuide';
import useStatusBar from '~/hooks/useStatusBar';
import { format } from 'date-fns';
import { DATE_CALENDAR_FORMAT } from '~/util/Constants';
import { View } from 'react-native';

export default ({
  onChange,
  value,
  height,
}: {
  value: string;
  onChange: (value: string) => void;
  height: number;
}) => {
  useStatusBar(true);

  const onDayPress = ({ timestamp }: DateObject) => {
    const date = new Date(timestamp);
    onChange(date.toISOString());
  };

  const current = useMemo(() => {
    if (!value) {
      return '';
    }

    return format(new Date(value), DATE_CALENDAR_FORMAT);
  }, [value]);

  return (
    <View
      style={{
        height,
        width: '100%',
      }}>
      <CalendarList
        pastScrollRange={0}
        firstDay={0}
        onDayPress={onDayPress}
        minDate={new Date()}
        futureScrollRange={2}
        scrollEnabled={true}
        current={value}
        markedDates={{
          [current]: {
            selected: true,
            disabled: true,
          },
        }}
        theme={{
          backgroundColor: StyleGuide.navigation.colors.background,
          calendarBackground: StyleGuide.navigation.colors.background,
          textSectionTitleColor: StyleGuide.palette.secondary,
          selectedDayBackgroundColor: StyleGuide.palette.app,
          selectedDayTextColor: StyleGuide.navigation.colors.background,
          todayTextColor: StyleGuide.palette.blue,
          dayTextColor: StyleGuide.palette.primary,
          textDisabledColor: '#d9e1e8',
          dotColor: StyleGuide.palette.app,
          selectedDotColor: StyleGuide.navigation.colors.background,
          arrowColor: 'orange',
          monthTextColor: StyleGuide.palette.primary,
          textDayFontFamily: 'Montserrat-Medium',
          textMonthFontFamily: 'Montserrat-SemiBold',
          textDayHeaderFontFamily: 'Montserrat-Medium',
          textDayFontSize: 14,
          textMonthFontSize: 14,
          textDayHeaderFontSize: 13,
        }}
      />
    </View>
  );
};
