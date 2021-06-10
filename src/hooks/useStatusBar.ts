import { useNavigation } from '@react-navigation/core';
import { useEffect, useRef } from 'react';
import { StatusBar } from 'react-native';

const useStatusBar = (condition: boolean) => {
  const conditionRef = useRef(condition);

  const { addListener, removeListener } = useNavigation();
  useEffect(() => {
    conditionRef.current = condition;
    StatusBar.setBarStyle(condition ? 'dark-content' : 'light-content');
  }, [condition]);

  useEffect(() => {
    const listener = addListener('focus', () => {
      if (conditionRef.current) {
        StatusBar.setBarStyle('dark-content');
      } else {
        StatusBar.setBarStyle('light-content');
      }
    });

    return () => removeListener('focus', listener);
  }, [addListener, condition, removeListener]);
};

export default useStatusBar;
