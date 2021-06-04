import React, { memo, useCallback } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { ActiveHome, InactiveHome } from '../../atoms/icons/Home';
import { ActiveProfile, InactiveProfile } from '../../atoms/icons/Profile';
import StyleGuide from '../../../util/StyleGuide';
import { ActiveWinner, InactiveWinner } from '../../atoms/icons/Winner';
import { ActiveMenu, InactiveMenu } from '../../atoms/icons/Menu';
import {
  ActiveReservation,
  InactiveReservation,
} from '../../atoms/icons/Reservation';

const TABS = [
  {
    name: 'Home',
    title: 'Inicío',
    InactiveIcon: InactiveHome,
    ActiveIcon: ActiveHome,
  },
  {
    name: 'Menu',
    title: 'Ementa',
    InactiveIcon: InactiveMenu,
    ActiveIcon: ActiveMenu,
  },
  {
    name: 'Reservation',
    title: 'Reservas',
    InactiveIcon: InactiveReservation,
    ActiveIcon: ActiveReservation,
  },
  {
    name: 'Achievements',
    title: 'Conquistas',
    InactiveIcon: InactiveWinner,
    ActiveIcon: ActiveWinner,
  },
  {
    name: 'Profile',
    title: 'Perfil',
    InactiveIcon: InactiveProfile,
    ActiveIcon: ActiveProfile,
  },
];

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  navigation,
  descriptors,
}) => {
  const jumpTo = useCallback(
    ({ name }: { name: string }) => {
      //@ts-ignore
      navigation.jumpTo(name);
    },
    [navigation],
  );

  const isFocused = useCallback(
    (index: number) => {
      return state.index === index;
    },
    [state.index],
  );
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <>
      <View style={[styles.container]}>
        <View style={[styles.borderContainer]}>
          <View style={[styles.border]} />
        </View>
        {TABS.map((tab, index) => {
          return (
            <BorderlessButton
              style={styles.tab}
              onPress={() => jumpTo(tab)}
              key={tab.name}>
              {isFocused(index) ? <tab.ActiveIcon /> : <tab.InactiveIcon />}
              <Text
                style={[
                  styles.title,
                  {
                    color: isFocused(index)
                      ? StyleGuide.palette.app
                      : StyleGuide.palette.secondary,
                  },
                ]}>
                {tab.title}
              </Text>
            </BorderlessButton>
          );
        })}
      </View>
    </>
  );
};

export default memo(TabBar);
