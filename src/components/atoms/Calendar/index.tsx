import React, { useMemo, useState } from 'react';
import { CalendarList, DateObject } from 'react-native-calendars';
import StyleGuide from '~/util/StyleGuide';
import useStatusBar from '~/hooks/useStatusBar';
import { format } from 'date-fns';
import { DATE_CALENDAR_FORMAT } from '~/util/Constants';
import { Dimensions, View } from 'react-native';

const { height } = Dimensions.get('window');

export default ({
  onChange,
  value,
}: {
  value: string;
  onChange: (value: string) => void;
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
      style={{ height: height - 250, width: '100%', backgroundColor: 'blue' }}>
      <CalendarList
        onVisibleMonthsChange={months => {
          console.log('now these months are visible', months);
        }}
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
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: StyleGuide.palette.secondary,
          selectedDayBackgroundColor: StyleGuide.palette.app,
          selectedDayTextColor: '#ffffff',
          todayTextColor: StyleGuide.palette.blue,
          dayTextColor: StyleGuide.palette.primary,
          textDisabledColor: '#d9e1e8',
          dotColor: StyleGuide.palette.app,
          selectedDotColor: '#ffffff',
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
