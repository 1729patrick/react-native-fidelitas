import { useNavigation } from '@react-navigation/core';
import { useEffect, useRef } from 'react';
import { StatusBar } from 'react-native';

const useStatusBar = (dark: boolean) => {
  const conditionRef = useRef(dark);

  const { addListener, removeListener } = useNavigation();
  useEffect(() => {
    conditionRef.current = dark;
    StatusBar.setBarStyle(dark ? 'dark-content' : 'light-content');
  }, [dark]);

  useEffect(() => {
    const listener = addListener('focus', () => {
      if (conditionRef.current) {
        StatusBar.setBarStyle('dark-content');
      } else {
        StatusBar.setBarStyle('light-content');
      }
    });

    return () => removeListener('focus', listener);
  }, [addListener, dark, removeListener]);
};

export default useStatusBar;
