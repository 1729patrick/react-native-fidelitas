import React from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const useHideTabBar = (autoHide?: boolean = true) => {
  const { getParent } = useNavigation<StackNavigationProp<any>>();

  const hideTabBar = () => {
    const parent = getParent();
    parent.setOptions({
      tabBarVisible: false,
    });
  };

  const showTabBar = () => {
    const parent = getParent();
    parent.setOptions({
      tabBarVisible: true,
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      if (!autoHide) {
        return;
      }

      // hide
      hideTabBar();

      // reveal after changing screen
      return showTabBar;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  return { showTabBar, hideTabBar };
};

export default useHideTabBar;
