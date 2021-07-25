/* eslint-disable */

import React from 'react';
import { Calendar } from 'react-native-calendars';
import StyleGuide from '~/util/StyleGuide';
import RoundButton from '~/components/atoms/buttons/RoundButton';
import Icon from 'react-native-vector-icons/AntDesign';
import useStatusBar from '~/hooks/useStatusBar';

export default () => {
  useStatusBar(true);

  return (
    <Calendar
      style={{ marginTop: 25 }}
      // Initially visible month. Default = Date()
      // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
      minDate={new Date()}
      // Enable horizontal scrolling, default = false
      horizontal={true}
      // Enable paging on horizontal, default = false
      pagingEnabled={true}
      // Set custom calendarWidth.
      calendarWidth={320}
      // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
      // Handler which gets executed on day press. Default = undefined
      onDayPress={day => {
        console.log('selected day', day);
      }}
      // Handler which gets executed on day long press. Default = undefined
      onDayLongPress={day => {
        console.log('selected day', day);
      }}
      // Handler which gets executed when visible month changes in calendar. Default = undefined
      onMonthChange={month => {
        console.log('month changed', month);
      }}
      // Replace default arrows with custom ones (direction can be 'left' or 'right')
      renderArrow={direction => {
        return (
          <RoundButton
            onPress={() => {}}
            name={direction === 'left' ? 'arrowleft' : 'arrowright'}
            size={24}
            Icon={Icon}
            color={StyleGuide.palette.primary}
          />
        );
      }}
      // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
      firstDay={0}
      // Hide day names. Default = false
      // hideDayNames={true}
      // Show week numbers to the left. Default = false
      // showWeekNumbers={true}
      // Handler which gets executed when press arrow icon left. It receive a callback can go back month
      onPressArrowLeft={subtractMonth => subtractMonth()}
      // Handler which gets executed when press arrow icon right. It receive a callback can go next month
      onPressArrowRight={addMonth => addMonth()}
      // Disable left arrow. Default = false
      disableArrowLeft={false}
      // Disable right arrow. Default = false
      disableArrowRight={false}
      markingType="simple"
      // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
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
        '2021-07-27': { selected: true },
        '2021-07-28': {
          disabled: true,
        },
        '2021-07-30': {
          disabled: true,
        },
      }}
      hideExtraDays={true}
      // Enable the option to swipe between months. Default = false
      enableSwipeMonths={true}
    />
  );
};
