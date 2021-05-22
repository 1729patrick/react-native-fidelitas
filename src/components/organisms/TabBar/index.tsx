import React, { memo, useCallback } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import {
  BottomTabBarProps,
  BottomTabBarOptions,
} from '@react-navigation/bottom-tabs';

import { ActiveHome, InactiveHome } from '../../atoms/icons/Home';
import { ActiveProfile, InactiveProfile } from '../../atoms/icons/Profile';
import { ActiveQRCode, InactiveQRCode } from '../../atoms/icons/QRCode';
import StyleGuide from '../../../util/StyleGuide';

const TABS = [
  {
    name: 'Home',
    title: 'Inicío',
    InactiveIcon: InactiveHome,
    ActiveIcon: ActiveHome,
  },
  {
    name: 'QRCode',
    title: 'Pontos',
    InactiveIcon: InactiveQRCode,
    ActiveIcon: ActiveQRCode,
  },
  {
    name: 'Profile',
    title: 'Perfil',
    InactiveIcon: InactiveProfile,
    ActiveIcon: ActiveProfile,
  },
];

type TabBarProps = BottomTabBarProps<BottomTabBarOptions>;

const TabBar: React.FC<TabBarProps> = ({ state, navigation }) => {
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

  return (
    <>
      <View style={[styles.container]}>
        <View style={[styles.borderContainer]}>
          <View style={[styles.border]} />
        </View>
        {TABS.map((tab, index) => {
          if (index !== 1) {
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
          }

          return (
            <RectButton
              style={{
                width: 60,
                height: 60,
                backgroundColor: StyleGuide.palette.app,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -20,
                elevation: 5,
              }}
              onPress={() => jumpTo(tab)}
              key={tab.name}>
              {isFocused(index) ? <tab.ActiveIcon /> : <tab.InactiveIcon />}
            </RectButton>
          );
        })}
      </View>
    </>
  );
};

export default memo(TabBar);
