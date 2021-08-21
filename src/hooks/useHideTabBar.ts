import React, { useEffect, useCallback } from 'react';
import {
  useFocusEffect,
  useNavigation,
  useNavigationState,
} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const useHideTabBar = (autoHide: boolean = true) => {
  const index = useNavigationState(state => state.index);
  const { getParent } = useNavigation<StackNavigationProp<any>>();

  const hideTabBar = useCallback(() => {
    const parent = getParent();
    parent.setOptions({
      tabBarVisible: false,
    });
  }, [getParent]);

  const showTabBar = useCallback(() => {
    if (index) {
      return;
    }

    const parent = getParent();
    parent.setOptions({
      tabBarVisible: true,
    });
  }, [getParent, index]);

  useEffect(() => {
    if (!autoHide) {
      return;
    }

    if (index) {
      hideTabBar();
      return;
    }

    showTabBar();
  }, [autoHide, hideTabBar, index, showTabBar]);

  return { showTabBar, hideTabBar };
};

export default useHideTabBar;
