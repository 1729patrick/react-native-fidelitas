import React, { useState } from 'react';
import { Calendar, DateObject } from 'react-native-calendars';
import StyleGuide from '~/util/StyleGuide';
import RoundButton from '~/components/atoms/buttons/RoundButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useStatusBar from '~/hooks/useStatusBar';
import { format } from 'date-fns';
import { DATE_FORMAT, MONTH_FORMAT } from '~/util/Constants';

const today = new Date();
export default () => {
  const [date, setDate] = useState(today);
  const [disableArrowLeft, setDisableArrowLeft] = useState(true);
  useStatusBar(true);

  const onDayPress = ({ timestamp }: DateObject) => {
    setDate(new Date(timestamp));
  };

  const onMonthChange = ({ timestamp }: DateObject) => {
    const date = format(new Date(timestamp), MONTH_FORMAT);

    setDisableArrowLeft(date === format(today, MONTH_FORMAT));
  };

  return (
    <Calendar
      current={date}
      minDate={today}
      onDayPress={onDayPress}
      onMonthChange={onMonthChange}
      renderArrow={direction => {
        return (
          <RoundButton
            onPress={() => {}}
            name={direction === 'left' ? 'navigate-before' : 'navigate-next'}
            disabled={disableArrowLeft && direction === 'left'}
            size={24}
            Icon={Icon}
            color={StyleGuide.palette.primary}
          />
        );
      }}
      firstDay={0}
      onPressArrowLeft={subtractMonth => subtractMonth()}
      onPressArrowRight={addMonth => addMonth()}
      disableArrowLeft={disableArrowLeft}
      disableArrowRight={false}
      markingType="simple"
      disableAllTouchEventsForDisabledDays={true}
      theme={{
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: StyleGuide.palette.secondary,
        selectedDayBackgroundColor: StyleGuide.palette.app,
        selectedDayTextColor: '#ffffff',
        todayTextColor: StyleGuide.palette.app,
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
      markedDates={{
        [format(date, DATE_FORMAT)]: { selected: true, disabled: true },
      }}
      hideExtraDays={true}
      enableSwipeMonths={true}
    />
  );
};
