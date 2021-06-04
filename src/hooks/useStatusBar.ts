import { useNavigation } from '@react-navigation/core';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';

const useStatusBar = (condition: boolean) => {
  const { addListener, removeListener } = useNavigation();
  useEffect(() => {
    const listener = addListener('focus', () => {
      if (condition) {
        StatusBar.setBarStyle('dark-content');
      } else {
        StatusBar.setBarStyle('light-content');
      }
    });

    return () => removeListener('focus', listener);
  }, [addListener, condition, removeListener]);
};

export default useStatusBar;
