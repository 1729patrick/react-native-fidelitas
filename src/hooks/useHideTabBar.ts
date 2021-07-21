import React from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const useHideTabBar = () => {
  const { getParent } = useNavigation<StackNavigationProp<any>>();

  useFocusEffect(
    React.useCallback(() => {
      // hide
      const parent = getParent();
      parent.setOptions({
        tabBarVisible: false,
      });

      // reveal after changing screen
      return () =>
        parent.setOptions({
          tabBarVisible: true,
        });
    }, []),
  );
};

export default useHideTabBar;
